import _extends from"@babel/runtime-corejs3/helpers/extends";import _objectWithoutProperties from"@babel/runtime-corejs3/helpers/objectWithoutProperties";import React,{Children}from"react";import PropTypes from"prop-types";import{Button,Icon,InlineLabel,Link,Tooltip}from"@jutro/components";import{DropdownMenu,DropdownMenuLink}from"@jutro/router";import{uniqueInnerId}from"@jutro/platform";import{BreakpointTracker}from"@jutro/layout";import{ComponentPropTypes}from"@jutro/prop-types";import cx from"classnames";import{TableColumn}from"../table/TableColumn";import{ActionItem}from"./ActionItem";import styles from"./ActionColumn.module.css";import tableStyles from"../DataTable.module.css";export const ActionColumn=()=>React.createElement(React.Fragment,null);ActionColumn.propTypes={...TableColumn.propTypes,singleActionType:PropTypes.oneOf(["icon","link"]),wrapActions:PropTypes.oneOfType([PropTypes.oneOf(["never","always"]),PropTypes.shape({allWhen:PropTypes.number}),PropTypes.shape({maxItems:PropTypes.number})]),hideIconsInDropdown:PropTypes.bool,children:ComponentPropTypes.childOfComponentType(ActionItem),tooltip:PropTypes.oneOfType([PropTypes.bool,PropTypes.object])},ActionColumn.getRowActions=({row:row,rowId:rowId,props:props,onEditStart:onEditStart})=>getBreakpointProps(props.children,props.breakpoint).map((({onClick:onClick,triggerOnRowClick:triggerOnRowClick,isEditTrigger:isEditTrigger})=>{if(triggerOnRowClick)return isEditTrigger?()=>onEditStart(row,rowId):()=>onClick(row,rowId)}));ActionColumn.defaultCell=(row,rowId,props,onEditStart)=>{const children=props.children,visible=props.visible,disableActions=props.disableActions,wrapActions=props.wrapActions,hideIconsInDropdown=props.hideIconsInDropdown,breakpoint=props.breakpoint,tooltip=props.tooltip,_props$translator=props.translator,translator=void 0===_props$translator?str=>str:_props$translator;if(!1===visible||disableActions||!children)return null;const _splitActions=((wrapActions,actions)=>{if("never"===wrapActions)return{inlineActions:actions,dropdownActions:[]};if("always"===wrapActions)return{inlineActions:[],dropdownActions:actions};if("object"==typeof wrapActions){const allWhen=wrapActions.allWhen,maxItems=wrapActions.maxItems;if(allWhen)return allWhen<=actions.length?{inlineActions:[],dropdownActions:actions}:{inlineActions:actions,dropdownActions:[]};if(maxItems)return maxItems>=actions.length?{inlineActions:actions,dropdownActions:[]}:{inlineActions:actions.slice(0,maxItems-1),dropdownActions:actions.slice(maxItems-1)}}return{inlineActions:actions,dropdownActions:[]}})(wrapActions,getBreakpointProps(children,breakpoint)),inlineActions=_splitActions.inlineActions,dropdownActions=_splitActions.dropdownActions,menu=dropdownActions.length>0?renderActionMenu(dropdownActions,row,rowId,onEditStart,hideIconsInDropdown,translator):null,getTooltipForButton=buttonProps=>!1!==tooltip&&{...tooltip,...buttonProps.tooltip},inline=1===inlineActions.length?renderOneAction(inlineActions[0],row,rowId,onEditStart,translator):inlineActions.map(((buttonProps,buttonIndex)=>renderActionButton({...buttonProps,tooltip:getTooltipForButton(buttonProps)},row,rowId,buttonIndex,onEditStart,translator)));return React.createElement(React.Fragment,null,inline,menu&&React.createElement("div",{className:styles.dropdownMenuWrapper},menu))};export function renderOneAction(actionProps,row,rowId,onEditStart,translator=(str=>str)){const icon=actionProps.icon,onClick=actionProps.onClick,className=actionProps.className,label=actionProps.label,isEditTrigger=actionProps.isEditTrigger,singleActionType=actionProps.singleActionType,isOpen=actionProps.isOpen,other=_objectWithoutProperties(actionProps,["icon","onClick","className","label","isEditTrigger","singleActionType","isOpen"]),classes=cx(styles.actionItem,{[styles.focusedActionItem]:isOpen},className),handleOnClick=isEditTrigger?onEditStart:onClick,onClickHandler=()=>handleOnClick(row,rowId);return"icon"===singleActionType&&icon?renderActionButton(actionProps,row,rowId,0,onEditStart,translator):"link"===singleActionType?React.createElement(Link,_extends({className:classes,icon:icon,onClick:onClickHandler},other),translator(label)):React.createElement(Button,_extends({className:classes,onClick:onClickHandler,size:"small",icon:icon},other),translator(label))}export function renderActionButton({icon:icon,onClick:onClick,className:className,isEditTrigger:isEditTrigger,isOpen:isOpen,label:label,ariaLabel:ariaLabel,disabled:disabled,tooltip:tooltip},row,rowId,key=rowId,onEditStart,translator=(str=>str)){var _translator,_tooltip$content;const classes=cx(styles.actionItem,styles.actionButton,{[styles.focusedActionItem]:isOpen},className),handleOnClick=isEditTrigger?onEditStart:onClick,btnLabel=ariaLabel||(null===(_translator=translator(label))||void 0===_translator?void 0:_translator.toLowerCase())||icon,btnContent=React.createElement(Button,{key:`${key}`,className:classes,onClick:()=>handleOnClick(row,rowId),size:"small",type:"text",icon:icon,disabled:disabled,"aria-label":btnLabel,"aria-expanded":isOpen,tabIndex:"0"}),tooltipContent=null!==(_tooltip$content=null==tooltip?void 0:tooltip.content)&&void 0!==_tooltip$content?_tooltip$content:label;return tooltip&&tooltipContent?React.createElement(Tooltip,_extends({id:`tooltip-${key}`,key:`tooltip-${key}`},tooltip,{content:tooltipContent}),btnContent):btnContent}export function renderActionMenu(actionsProps,row,rowId,onEditStart,hideIconsInDropdown,translator=(str=>str)){let toggleDropdownMenu;const menuId=uniqueInnerId(`${rowId}`,"menuId").menuId;return React.createElement("div",{className:styles.dropdownMenu},React.createElement(DropdownMenu,{id:menuId,renderTrigger:(props,toggleMenu)=>{const isOpen=props.isOpen,rest=(props.menuId,_objectWithoutProperties(props,["isOpen","menuId"]));toggleDropdownMenu=toggleMenu;return renderActionButton({...rest,icon:"gw-more-horizontal",onClick:()=>toggleMenu(!isOpen),isOpen:isOpen,ariaLabel:"View more"},row,rowId,translator)},menuClassName:styles.menu,alignRight:!0},actionsProps.map(((props,linkIndex)=>{const label=props.label,icon=props.icon,onClick=props.onClick,isEditTrigger=props.isEditTrigger,id=(props.singleActionType,props.id),rest=_objectWithoutProperties(props,["label","icon","onClick","isEditTrigger","singleActionType","id"]),handleOnClick=isEditTrigger?onEditStart:onClick,linkId=`${menuId}__${id||rowId}`,labelId=`${linkId}-label`,labelClassName=cx({[styles.menuItemLabel]:!hideIconsInDropdown}),labelComponent=React.createElement("span",{className:labelClassName},translator(label)),iconComponent=icon&&React.createElement(Icon,{icon:icon});return React.createElement(DropdownMenuLink,_extends({id:linkId,key:`${linkIndex}`,onClick:e=>{var _toggleDropdownMenu;null==e||e.stopPropagation(),null==e||e.preventDefault(),null===(_toggleDropdownMenu=toggleDropdownMenu)||void 0===_toggleDropdownMenu||_toggleDropdownMenu(!1),handleOnClick(row,rowId)},"aria-labelledby":labelId},rest),hideIconsInDropdown?labelComponent:React.createElement(InlineLabel,{id:labelId,tag:"div",icon:iconComponent},labelComponent))}))))}function getBreakpointProps(children,breakpoint){return Children.toArray(children).filter(Boolean).map((({props:props})=>BreakpointTracker.applyBreakpointOverrides(props,breakpoint)))}ActionColumn.editCell=({editActions:editActions})=>{const save=editActions.save,cancel=editActions.cancel,classes=cx(styles.actionButton,styles.editButton),cancelClasses=cx(classes,styles.cancelButton);return React.createElement(React.Fragment,null,React.createElement(Button,{className:classes,onClick:save,size:"small",icon:"gw-check",tabIndex:"0"}),React.createElement(Button,{className:cancelClasses,onClick:cancel,size:"small",type:"text",icon:"gw-close",tabIndex:"0"}))},ActionColumn.displayName="ActionColumn",ActionColumn.defaultProps={renderCell:ActionColumn.defaultCell,renderEditCell:ActionColumn.editCell,getRowActions:ActionColumn.getRowActions,columnClassName:tableStyles.actionColumn,cellClassName:styles.actionColumnCell,wrapActions:{allWhen:3},hideIconsInDropdown:!1,width:120,sortable:!1,textAlign:"right",onFilter:()=>()=>!1},ActionColumn.__docgenInfo={description:"ActionColumn\n@returns {null} - The ActionColumn component does not render anything\n\n@metadataType container",methods:[{name:"getRowActions",docblock:"Render action button(s) or ellipsis with dropdown menu of actions\n\n@param {object} row - the row to be rendered from data table\n@param {number} index - the index of the row\n@param {object} props - the properties used by ActionColumn\n@param {Function} onEditStart - is called when clicked on action item with `isEditTrigger` prop enabled\n@returns {React.ReactElement}",modifiers:["static"],params:[{name:"{ row, rowId, props, onEditStart }"}],returns:{description:null,type:{name:"React.ReactElement"}},description:"Render action button(s) or ellipsis with dropdown menu of actions"},{name:"defaultCell",docblock:null,modifiers:["static"],params:[{name:"row",optional:!1,type:null},{name:"rowId",optional:!1,type:null},{name:"props",optional:!1,type:null},{name:"onEditStart",optional:!1,type:null}],returns:null},{name:"editCell",docblock:null,modifiers:["static"],params:[{name:"{ editActions }",type:null}],returns:null}],displayName:"ActionColumn",props:{renderCell:{defaultValue:{value:"ActionColumn.defaultCell",computed:!0},required:!1},renderEditCell:{defaultValue:{value:"ActionColumn.editCell",computed:!0},required:!1},getRowActions:{defaultValue:{value:"ActionColumn.getRowActions",computed:!0},required:!1},columnClassName:{defaultValue:{value:"tableStyles.actionColumn",computed:!0},required:!1},cellClassName:{defaultValue:{value:"styles.actionColumnCell",computed:!0},required:!1},wrapActions:{defaultValue:{value:"{ allWhen: 3 }",computed:!1},type:{name:"union",value:[{name:"enum",value:[{value:"'never'",computed:!1},{value:"'always'",computed:!1}]},{name:"shape",value:{allWhen:{name:"number",required:!1}}},{name:"shape",value:{maxItems:{name:"number",required:!1}}}]},required:!1,description:'Specifies behavior of wrapping action items in a dropdown. By default dropdown is shown for 3 or more actions.\n"never" - actions are never wrapped, all are visible in a row;\n"always" - all actions are placed in a dropdown regardless of their number;\n{ "allWhen": N } - all actions are placed in a dropdown when there are more than N (inclusive),\n  otherwise are visible (default, N=3);\n{ "maxItems": N } - maximum N items are visible (including dropdown), excess is placed in a dropdown.'},hideIconsInDropdown:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"If set to true only labels are displayed in the dropdown with actions, icons are hidden"},width:{defaultValue:{value:"120",computed:!1},required:!1},sortable:{defaultValue:{value:"false",computed:!1},required:!1},textAlign:{defaultValue:{value:"'right'",computed:!1},required:!1},onFilter:{defaultValue:{value:"() => () => false",computed:!1},required:!1},singleActionType:{type:{name:"enum",value:[{value:"'icon'",computed:!1},{value:"'link'",computed:!1}]},required:!1,description:"Specifies the type of action 'icon' or 'link', when one action is rendered\nBy default renders `Button` action"},children:{type:{name:"custom",raw:"ComponentPropTypes.childOfComponentType(ActionItem)"},required:!1,description:"List of ActionItems"},tooltip:{type:{name:"union",value:[{name:"bool"},{name:"object"}]},required:!1,description:"Tooltip configuration which is shared between all actions\nfalse - disable tooltips in column\nobject - has same fields as regular tooltip component"}},composes:["../table/TableColumn"]},renderOneAction.__docgenInfo={description:"Render the button with action defined on onclick listener\n\n@param {object} actionProps - The action properties provided by application\n@param {object} row - Current row to be rendered from the data table\n@param {number | string} rowId - The id of the current row\n@param {Function} onEditStart - is called when clicked on action item with `isEditTrigger` prop enabled\n@returns {React.ReactElement}",methods:[],displayName:"renderOneAction"},renderActionButton.__docgenInfo={description:"Render the button with action defined on onclick listener\n\n@param {object} actionProps - The action properties provided by application\n@param {object} row - Current row to be rendered from the data table\n@param {number | string} rowId - The id of the current row\n@param {number} key - Unique key for the component\n@param {Function} onEditStart - is called when clicked on action item with `isEditTrigger` prop enabled\n@returns {React.ReactElement}",methods:[],displayName:"renderActionButton"},renderActionMenu.__docgenInfo={description:"Render ellipsis with dropdown menu of actions\n\n@param {object} actionsProps - The action's children properties provided by application\n@param {object} row - Current row to be rendered from the data table\n@param {number | string} rowId - The id of the current row\n@param {Function} onEditStart - is called when clicked on action item with `isEditTrigger` prop enabled\n@returns {React.ReactElement}",methods:[],displayName:"renderActionMenu"},ActionColumn.__docgenInfo={componentName:"ActionColumn",packageName:"@jutro/datatable",description:"ActionColumn",displayName:"ActionColumn",methods:[{name:"getRowActions",docblock:"Render action button(s) or ellipsis with dropdown menu of actions\n\n@param {object} row - the row to be rendered from data table\n@param {number} index - the index of the row\n@param {object} props - the properties used by ActionColumn\n@param {Function} onEditStart - is called when clicked on action item with `isEditTrigger` prop enabled\n@returns {React.ReactElement}",modifiers:["static"],params:[{name:"{ row, rowId, props, onEditStart }"}],returns:{description:null,type:{name:"React.ReactElement"}},description:"Render action button(s) or ellipsis with dropdown menu of actions"},{name:"defaultCell",docblock:null,modifiers:["static"],params:[{name:"row",optional:!1,type:null},{name:"rowId",optional:!1,type:null},{name:"props",optional:!1,type:null},{name:"onEditStart",optional:!1,type:null}],returns:null},{name:"editCell",docblock:null,modifiers:["static"],params:[{name:"{ editActions }",optional:void 0,type:null}],returns:null}],actualName:"ActionColumn",metadataType:"container",props:{singleActionType:{type:{name:"enum",value:[{value:"'icon'",computed:!1},{value:"'link'",computed:!1}]},required:!1,description:"Specifies the type of action 'icon' or 'link', when one action is rendered\nBy default renders `Button` action"},wrapActions:{type:{name:"union",value:[{name:"enum",value:[{value:"'never'",computed:!1},{value:"'always'",computed:!1}]},{name:"shape",value:{allWhen:{name:"number",required:!1}}},{name:"shape",value:{maxItems:{name:"number",required:!1}}}]},required:!1,description:'Specifies behavior of wrapping action items in a dropdown. By default dropdown is shown for 3 or more actions.\n"never" - actions are never wrapped, all are visible in a row;\n"always" - all actions are placed in a dropdown regardless of their number;\n{ "allWhen": N } - all actions are placed in a dropdown when there are more than N (inclusive),\n  otherwise are visible (default, N=3);\n{ "maxItems": N } - maximum N items are visible (including dropdown), excess is placed in a dropdown.',defaultValue:{value:"{ allWhen: 3 }",computed:!1}},hideIconsInDropdown:{type:{name:"bool"},required:!1,description:"If set to true only labels are displayed in the dropdown with actions, icons are hidden",defaultValue:{value:"false",computed:!1}},children:{type:{name:"custom",raw:"ComponentPropTypes.childOfComponentType(ActionItem)"},required:!1,description:"List of ActionItems"},tooltip:{type:{name:"union",value:[{name:"bool"},{name:"object"}]},required:!1,description:"Tooltip configuration which is shared between all actions\nfalse - disable tooltips in column\nobject - has same fields as regular tooltip component"},renderCell:{defaultValue:{value:"ActionColumn.defaultCell",computed:!0},required:!1},renderEditCell:{defaultValue:{value:"ActionColumn.editCell",computed:!0},required:!1},getRowActions:{defaultValue:{value:"ActionColumn.getRowActions",computed:!0},required:!1},columnClassName:{defaultValue:{value:"tableStyles.actionColumn",computed:!0},required:!1},cellClassName:{defaultValue:{value:"styles.actionColumnCell",computed:!0},required:!1},width:{defaultValue:{value:"120",computed:!1},required:!1},sortable:{defaultValue:{value:"false",computed:!1},required:!1},textAlign:{defaultValue:{value:"'right'",computed:!1},required:!1},onFilter:{defaultValue:{value:"() => () => false",computed:!1},required:!1}},composes:["../table/TableColumn"]},renderOneAction.__docgenInfo={componentName:"renderOneAction",packageName:"@jutro/datatable",description:"Render the button with action defined on onclick listener",displayName:"renderOneAction",methods:[],actualName:"renderOneAction"},renderActionButton.__docgenInfo={componentName:"renderActionButton",packageName:"@jutro/datatable",description:"Render the button with action defined on onclick listener",displayName:"renderActionButton",methods:[],actualName:"renderActionButton"},renderActionMenu.__docgenInfo={componentName:"renderActionMenu",packageName:"@jutro/datatable",description:"Render ellipsis with dropdown menu of actions",displayName:"renderActionMenu",methods:[],actualName:"renderActionMenu"};