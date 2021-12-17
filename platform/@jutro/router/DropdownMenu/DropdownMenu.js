import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useRef,useState,useCallback,useEffect,useMemo}from"react";import useMeasure from"react-use-measure";import PropTypes from"prop-types";import cx from"classnames";import{uniqueInnerId}from"@jutro/platform";import{deprecated}from"@jutro/prop-types";import styles from"./DropdownMenu.module.css";import{DropdownMenuHeader}from"./DropdownMenuHeader";const getNodeText=node=>{return["string","number"].includes(typeof node)?node:node instanceof Array?node.map(getNodeText).join(""):"object"==typeof node&&node?getNodeText(null===(_node$props=node.props)||void 0===_node$props?void 0:_node$props.children):void 0;var _node$props},DropDownMenuPropTypes={id:PropTypes.string.isRequired,renderTrigger:PropTypes.func,onRenderTrigger:deprecated(PropTypes.func,"7.0.0",'Please use "renderTrigger" instead'),isOpen:PropTypes.bool,dropUp:PropTypes.bool,alignRight:PropTypes.bool,className:PropTypes.string,menuClassName:PropTypes.string,children:PropTypes.node,focused:PropTypes.bool,openMenuId:PropTypes.string,onMenuOpen:PropTypes.func,onMenuClose:PropTypes.func,keepContext:PropTypes.bool};export const DropdownMenu=({id:id,onRenderTrigger:onRenderTrigger,renderTrigger:renderTrigger=onRenderTrigger,isOpen:isOpen,dropUp:dropUp,alignRight:alignRight,className:className,menuClassName:menuClassName,children:children,focused:focused,openMenuId:openMenuId,onMenuOpen:onMenuOpen,onMenuClose:onMenuClose,keepContext:keepContext=!1})=>{const dropdownMenuRef=useRef(),triggerRef=useRef(),_useState=useState(null!=isOpen&&isOpen),_useState2=_slicedToArray(_useState,2),isMenuOpen=_useState2[0],setIsMenuOpen=_useState2[1],_useState3=useState(),_useState4=_slicedToArray(_useState3,2),selectedItemText=_useState4[0],setSelectedItemText=_useState4[1],_useMeasure=useMeasure(),_useMeasure2=_slicedToArray(_useMeasure,2),dropdownRef=_useMeasure2[0],dropdownBounds=_useMeasure2[1],componentClasses=cx(styles.dropdownMenuPosition,className,{opened:isMenuOpen}),shouldDropUp=dropUp&&dropdownBounds.y>dropdownBounds.height||dropdownBounds.bottom>window.innerHeight,menuClasses=cx(styles.menu,{[styles["menu-top"]]:shouldDropUp},{[styles["menu-left"]]:alignRight},{[styles["menu-active"]]:isMenuOpen},menuClassName),_uniqueInnerId=uniqueInnerId(id,"triggerId","menuId"),triggerId=_uniqueInnerId.triggerId,menuId=_uniqueInnerId.menuId,toggleMenu=useCallback((({open:open,moveFocusToTrigger:moveFocusToTrigger,callbackOnClose:callbackOnClose})=>{const newIsOpen=void 0===open?!isMenuOpen:!!open;if(isMenuOpen!==newIsOpen){var _triggerRef$current,_triggerRef$current$f;if(newIsOpen&&(null==onMenuOpen||onMenuOpen(id)),!newIsOpen&&moveFocusToTrigger)null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||null===(_triggerRef$current$f=_triggerRef$current.focus)||void 0===_triggerRef$current$f||_triggerRef$current$f.call(_triggerRef$current);!newIsOpen&&callbackOnClose&&(null==onMenuClose||onMenuClose()),setIsMenuOpen(newIsOpen)}}),[isMenuOpen,onMenuOpen,onMenuClose]),hideMenuOnClickOut=useCallback((()=>{isMenuOpen&&toggleMenu({open:!1,moveFocusToTrigger:!0,callbackOnClose:!0})}),[toggleMenu]),keyPressHandler=useCallback((event=>{"Escape"===event.key&&toggleMenu({open:!1,moveFocusToTrigger:!0,callbackOnClose:!0})}),[toggleMenu]),blurHandler=useCallback((event=>{dropdownMenuRef.current&&dropdownMenuRef.current.contains(event.relatedTarget)||(event.preventDefault(),toggleMenu({open:!1,callbackOnClose:!0,moveFocusToTrigger:!1}))}),[toggleMenu]);useEffect((()=>{void 0!==isOpen&&toggleMenu({open:isOpen})}),[isOpen]),useEffect((()=>{var _triggerRef$current2,_triggerRef$current2$;focused&&(null===(_triggerRef$current2=triggerRef.current)||void 0===_triggerRef$current2||null===(_triggerRef$current2$=_triggerRef$current2.focus)||void 0===_triggerRef$current2$||_triggerRef$current2$.call(_triggerRef$current2))}),[focused]),useEffect((()=>{const eventsTimeout=setTimeout((()=>{window.addEventListener("click",hideMenuOnClickOut)}),0);return window.addEventListener("keydown",keyPressHandler),window.addEventListener("blur",blurHandler),()=>{clearTimeout(eventsTimeout),window.removeEventListener("click",hideMenuOnClickOut),window.removeEventListener("keydown",keyPressHandler),window.removeEventListener("blur",blurHandler)}}),[hideMenuOnClickOut,keyPressHandler,blurHandler]);const dropdownTrigger=useMemo((()=>renderTrigger&&renderTrigger({id:triggerId,menuId:menuId,isOpen:isMenuOpen,ref:triggerRef,"aria-haspopup":!0,"aria-expanded":isMenuOpen,...keepContext&&selectedItemText&&{title:selectedItemText}},(open=>toggleMenu({open:open,moveFocusToTrigger:!0,callbackOnClose:!0})))),[renderTrigger,triggerId,menuId,isMenuOpen,triggerRef,toggleMenu,selectedItemText]),mapChildRender=child=>{let item=(child=>React.cloneElement(child,{onMenuItemClick:()=>{var _triggerRef$current3,_triggerRef$current3$;const childText=getNodeText(child);setSelectedItemText(childText),null==onMenuClose||onMenuClose(),null===(_triggerRef$current3=triggerRef.current)||void 0===_triggerRef$current3||null===(_triggerRef$current3$=_triggerRef$current3.focus)||void 0===_triggerRef$current3$||_triggerRef$current3$.call(_triggerRef$current3)}}))(child);if((child.type===DropdownMenuHeader||child.type===React.Fragment)&&child.props.children){const itemChildren=React.Children.toArray(item.props.children).map((subChild=>subChild.props.disabled?subChild:mapChildRender(subChild)));item=React.cloneElement(child,{children:itemChildren})}return item},mappedChildren=React.Children.toArray(children).map(mapChildRender);return React.createElement("div",{className:componentClasses,id:id,ref:dropdownMenuRef,onBlur:blurHandler},dropdownTrigger,React.createElement("div",{ref:dropdownRef,"data-testid":"menu-panel",id:menuId,className:menuClasses,"aria-hidden":!isMenuOpen,"aria-labelledby":triggerId},mappedChildren))};DropdownMenu.propTypes=DropDownMenuPropTypes,DropdownMenu.__docgenInfo={description:"A dropdown menu where you can add your actions to each item.\n\n@type {React.FC<PropTypes.InferProps<typeof DropDownMenuPropTypes>>}\n\n@metadataType container",methods:[],displayName:"DropdownMenu",props:{renderTrigger:{defaultValue:{value:"onRenderTrigger",computed:!0},type:{name:"func"},required:!1,description:"The function that generates a component that the user clicks on to show the menu."},keepContext:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Optional boolean that if true sets title to selected value"},id:{type:{name:"string"},required:!0,description:"Used to identify menu component."},onRenderTrigger:{type:{name:"custom",raw:"deprecated(\n    PropTypes.func,\n    '7.0.0',\n    'Please use \"renderTrigger\" instead'\n)"},required:!1,description:"The function that generates a component that the user clicks on to show the menu.\n@deprecated"},isOpen:{type:{name:"bool"},required:!1,description:"The prop that indicates if the menu is currently visible."},dropUp:{type:{name:"bool"},required:!1,description:"If `true`, the menu appears above the trigger component."},alignRight:{type:{name:"bool"},required:!1,description:"If `true`, items are aligned to the right edge of the menu."},className:{type:{name:"string"},required:!1,description:"Override class for dropdown menu"},menuClassName:{type:{name:"string"},required:!1,description:"Override class for the inner menu of the dropdown menu"},children:{type:{name:"node"},required:!1,description:"The component children wrapped by the dropdown menu component."},focused:{type:{name:"bool"},required:!1,description:"If `true`, root element is considered as a currently active one"},openMenuId:{type:{name:"string"},required:!1,description:"Optional id of the component instance that's supposed be to currently opened.\nMostly useful when rendering multiple instances next to each other (e.g. within Header)"},onMenuOpen:{type:{name:"func"},required:!1,description:"Optional callback that's supposed to be triggered when menu gets opened"},onMenuClose:{type:{name:"func"},required:!1,description:"Optional callback that's supposed to be triggered when menu gets closed"}}},DropdownMenu.__docgenInfo={componentName:"DropdownMenu",packageName:"@jutro/router",description:"A dropdown menu where you can add your actions to each item.",displayName:"DropdownMenu",methods:[],actualName:"DropdownMenu",metadataType:"container",props:{id:{type:{name:"string"},required:!0,description:"Used to identify menu component."},renderTrigger:{type:{name:"func"},required:!1,description:"The function that generates a component that the user clicks on to show the menu.",defaultValue:{value:"onRenderTrigger",computed:!0}},onRenderTrigger:{type:{name:"func"},required:!1,description:"The function that generates a component that the user clicks on to show the menu.\n@deprecated",deprecationInfo:{version:"7.0.0",mapTo:"renderTrigger"}},isOpen:{type:{name:"bool"},required:!1,description:"The prop that indicates if the menu is currently visible."},dropUp:{type:{name:"bool"},required:!1,description:"If `true`, the menu appears above the trigger component."},alignRight:{type:{name:"bool"},required:!1,description:"If `true`, items are aligned to the right edge of the menu."},className:{type:{name:"string"},required:!1,description:"Override class for dropdown menu"},menuClassName:{type:{name:"string"},required:!1,description:"Override class for the inner menu of the dropdown menu"},children:{type:{name:"node"},required:!1,description:"The component children wrapped by the dropdown menu component."},focused:{type:{name:"bool"},required:!1,description:"If `true`, root element is considered as a currently active one"},openMenuId:{type:{name:"string"},required:!1,description:"Optional id of the component instance that's supposed be to currently opened.\nMostly useful when rendering multiple instances next to each other (e.g. within Header)"},onMenuOpen:{type:{name:"func"},required:!1,description:"Optional callback that's supposed to be triggered when menu gets opened"},onMenuClose:{type:{name:"func"},required:!1,description:"Optional callback that's supposed to be triggered when menu gets closed"},keepContext:{type:{name:"bool"},required:!1,description:"Optional boolean that if true sets title to selected value",defaultValue:{value:"false",computed:!1}}}};