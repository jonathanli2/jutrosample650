import _extends from"@babel/runtime-corejs3/helpers/extends";import _objectWithoutProperties from"@babel/runtime-corejs3/helpers/objectWithoutProperties";import React,{useMemo,useContext}from"react";import PropTypes from"prop-types";import{NavLink}from"react-router-dom";import cx from"classnames";import{useAccessibleRef}from"@jutro/platform";import{intlMessageShape,intlToShape,IntlMessageShape,IntlToShape}from"@jutro/prop-types";import{useSafeTranslatedUrls,TranslatorContext}from"@jutro/locale";import styles from"./DropdownMenu.module.css";export const DropdownMenuLink=props=>{const id=props.id,className=props.className,activeClassName=props.activeClassName,disabled=props.disabled,children=props.children,onClickProp=props.onClick,visible=props.visible,focused=props.focused,onMenuItemClick=props.onMenuItemClick,to=(props.dangerouslySetInnerHTML,props.to),href=props.href,target=props.target,relProp=props.rel,other=_objectWithoutProperties(props,["id","className","activeClassName","disabled","children","onClick","visible","focused","onMenuItemClick","dangerouslySetInnerHTML","to","href","target","rel"]),translator=useContext(TranslatorContext),urlTranslatorAndSanitizer=useSafeTranslatedUrls(),onClick=useMemo((()=>disabled?evt=>evt.preventDefault():evt=>{null==onMenuItemClick||onMenuItemClick(),null==onClickProp||onClickProp(evt)}),[disabled,onMenuItemClick,onClickProp]),linkRef=useAccessibleRef(focused);if(!1===visible)return null;const translatedChildren=translator(children),classes=cx(styles.link,{[styles.disabled]:disabled},className),safeTo=to&&urlTranslatorAndSanitizer(to);if(safeTo)return React.createElement(NavLink,_extends({id:id,className:classes,activeClassName:activeClassName,onClick:onClick,disabled:disabled,"aria-disabled":disabled,innerRef:linkRef,tabIndex:disabled?-1:0,to:safeTo},other),translatedChildren);const safeHref=href?urlTranslatorAndSanitizer(href):safeTo,rel="_blank"===target?"noreferrer":relProp;return React.createElement("a",_extends({id:id,className:classes,onClick:onClick,href:safeHref,"aria-disabled":disabled,ref:linkRef,target:target,rel:rel,tabIndex:disabled?-1:0},other),translatedChildren)};const dropdownMenuLinkPropTypes={id:PropTypes.string,to:intlToShape,href:intlMessageShape,target:PropTypes.string,rel:PropTypes.string,disabled:PropTypes.bool,onMenuItemClick:PropTypes.func,focused:PropTypes.bool,className:PropTypes.string,activeClassName:PropTypes.string,visible:PropTypes.bool,onClick:PropTypes.func,children:PropTypes.oneOfType([PropTypes.node,intlMessageShape])};DropdownMenuLink.propTypes=dropdownMenuLinkPropTypes,DropdownMenuLink.__docgenInfo={description:"DropdownMenuLink\n\n@type {React.FC<DropdownMenuLinkProps>}\n\n@metadataType action",methods:[],displayName:"DropdownMenuLink",props:{id:{type:{name:"string"},required:!1,description:"Used to identify dropdown menu link component."},to:{type:{name:"custom",raw:"intlToShape"},required:!1,description:"Internal link."},href:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"External link."},target:{type:{name:"string"},required:!1,description:"Specifies where to open the external link."},rel:{type:{name:"string"},required:!1,description:"Specifies the relationship between the current and an external document."},disabled:{type:{name:"bool"},required:!1,description:"If `true`, this link is disabled"},onMenuItemClick:{type:{name:"func"},required:!1,description:"Callback supposed to be triggered when clicked in the context of menu"},focused:{type:{name:"bool"},required:!1,description:"If `true`, the link is considered as a currently active one"},className:{type:{name:"string"},required:!1,description:"The class name of the link"},activeClassName:{type:{name:"string"},required:!1,description:"The class to give the link when it is active"},visible:{type:{name:"bool"},required:!1,description:"If true, this link is visible."},onClick:{type:{name:"func"},required:!1,description:"On link click event handler"},children:{type:{name:"union",value:[{name:"node"},{name:"custom",raw:"intlMessageShape"}]},required:!1,description:"The children elements to render inside of the DropdownMenuLink"}}},DropdownMenuLink.__docgenInfo={componentName:"DropdownMenuLink",packageName:"@jutro/router",description:"DropdownMenuLink",displayName:"DropdownMenuLink",methods:[],actualName:"DropdownMenuLink",metadataType:"action",props:{id:{type:{name:"string"},required:!1,description:"Used to identify dropdown menu link component."},to:{type:{name:"custom",raw:"intlToShape"},required:!1,description:"Internal link."},href:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"External link."},target:{type:{name:"string"},required:!1,description:"Specifies where to open the external link."},rel:{type:{name:"string"},required:!1,description:"Specifies the relationship between the current and an external document."},disabled:{type:{name:"bool"},required:!1,description:"If `true`, this link is disabled"},onMenuItemClick:{type:{name:"func"},required:!1,description:"Callback supposed to be triggered when clicked in the context of menu"},focused:{type:{name:"bool"},required:!1,description:"If `true`, the link is considered as a currently active one"},className:{type:{name:"string"},required:!1,description:"The class name of the link"},activeClassName:{type:{name:"string"},required:!1,description:"The class to give the link when it is active"},visible:{type:{name:"bool"},required:!1,description:"If true, this link is visible."},onClick:{type:{name:"func"},required:!1,description:"On link click event handler"},children:{type:{name:"union",value:[{name:"node"},{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]}]},required:!1,description:"The children elements to render inside of the DropdownMenuLink"}}};