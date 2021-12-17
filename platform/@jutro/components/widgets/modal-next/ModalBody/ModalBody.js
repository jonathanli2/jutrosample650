import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useEffect,useState}from"react";import{disableBodyScroll,enableBodyScroll}from"body-scroll-lock";import cx from"classnames";import PropTypes from"prop-types";import{layoutShape}from"../../../layouts/Layout";import{getLayoutComponent}from"../helpers/modalHelpers";import styles from"./ModalBody.module.css";const modalBodyPropTypes={id:PropTypes.string,autoFocus:PropTypes.bool,contentLayout:PropTypes.oneOfType([PropTypes.shape({component:PropTypes.string.isRequired,componentProps:PropTypes.object}),layoutShape]),children:PropTypes.node};export const ModalBody=({id:id,autoFocus:autoFocus,contentLayout:contentLayout,children:children})=>{const modalBodyRef=React.createRef(),Layout=getLayoutComponent(contentLayout.component),_useState=useState(!1),_useState2=_slicedToArray(_useState,2),hasVerticalScrollbar=_useState2[0],setHasVerticalScrollbar=_useState2[1],bodyClasses=cx(styles.modalBody,{[styles.hasVerticalScrollbar]:hasVerticalScrollbar});return useEffect((()=>{const modalBodyElement=modalBodyRef.current;return setHasVerticalScrollbar(modalBodyElement.scrollHeight>modalBodyElement.clientHeight),modalBodyElement&&disableBodyScroll(modalBodyElement,{reserveScrollBarGap:!0}),()=>{modalBodyElement&&enableBodyScroll(modalBodyElement)}}),[modalBodyRef]),useEffect((()=>{var _modalBodyRef$current,_modalBodyRef$current2;autoFocus&&(null===(_modalBodyRef$current=modalBodyRef.current)||void 0===_modalBodyRef$current||null===(_modalBodyRef$current2=_modalBodyRef$current.querySelector("input:not([disabled]), select:not([disabled]), textarea:not([disabled])"))||void 0===_modalBodyRef$current2||_modalBodyRef$current2.focus())}),[autoFocus,modalBodyRef.current]),React.createElement("div",{id:id,ref:modalBodyRef,className:bodyClasses},React.createElement(Layout,contentLayout.componentProps,children))};ModalBody.propTypes=modalBodyPropTypes,ModalBody.defaultProps={contentLayout:{component:"div"},autoFocus:!0},ModalBody.__docgenInfo={description:"ModalBody\n@type {React.FC<PropTypes.InferProps<typeof modalBodyPropTypes>>}",methods:[],displayName:"ModalBody",props:{contentLayout:{defaultValue:{value:"{\n    component: 'div',\n}",computed:!1},type:{name:"union",value:[{name:"shape",value:{component:{name:"string",required:!0},componentProps:{name:"object",required:!1}}},{name:"custom",raw:"layoutShape"}]},required:!1,description:"Defines the layout to be used with a 'component' property set to either Flex or Grid and 'componentProps' property to set properties for that layout component."},autoFocus:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Optional flag indicating whether the ModalBody will autofocus to itself on open"},id:{type:{name:"string"},required:!1,description:"Used to identify modal body component."},children:{type:{name:"node"},required:!1,description:"The component children wrapped by the modal body component."}}},ModalBody.__docgenInfo={componentName:"ModalBody",packageName:"@jutro/components",description:"ModalBody",displayName:"ModalBody",methods:[],actualName:"ModalBody",props:{id:{type:{name:"string"},required:!1,description:"Used to identify modal body component."},autoFocus:{type:{name:"bool"},required:!1,description:"Optional flag indicating whether the ModalBody will autofocus to itself on open",defaultValue:{value:"true",computed:!1}},contentLayout:{type:{name:"union",value:[{name:"shape",value:{component:{name:"string",required:!0},componentProps:{name:"object",required:!1}}},{name:"shape",value:{id:{name:"string",description:"Used to identify the component",required:!1},repeat:{name:"union",value:[{name:"enum",value:[{value:"'auto-fit'",computed:!1},{value:"'auto-fill'",computed:!1}]},{name:"number"},{name:"string"}],description:"repeat columns: 'auto-fit' or 'auto-fill' or number",required:!1},gap:{name:"enum",computed:!0,value:"Object.keys(gaps)",description:"gap between rows and columns: 'none', 'small', 'medium', 'large'",required:!1},columns:{name:"array",description:"define explicit columns",required:!1},colSpan:{name:"union",value:[{name:"number"},{name:"string"}],required:!1},colStart:{name:"union",value:[{name:"number"},{name:"string"}],required:!1}}}]},required:!1,description:"Defines the layout to be used with a 'component' property set to either Flex or Grid and 'componentProps' property to set properties for that layout component.",defaultValue:{value:"{\n    component: 'div',\n}",computed:!1}},children:{type:{name:"node"},required:!1,description:"The component children wrapped by the modal body component."}}};