import _extends from"@babel/runtime-corejs3/helpers/extends";import React from"react";import{components}from"react-select";export const GenericSelectControlPlaceholder=({isDisabled:isDisabled,innerProps:innerProps,selectProps:selectProps,...rest})=>{const genericSelectStyles=selectProps.genericSelectStyles,customProps={"aria-disabled":isDisabled,...innerProps};return React.createElement(components.Placeholder,_extends({},rest,{className:genericSelectStyles.placeholder,innerProps:customProps}))};GenericSelectControlPlaceholder.__docgenInfo={description:"",methods:[],displayName:"GenericSelectControlPlaceholder"},GenericSelectControlPlaceholder.__docgenInfo={componentName:"GenericSelectControlPlaceholder",packageName:"@jutro/components",description:"",displayName:"GenericSelectControlPlaceholder",methods:[],actualName:"GenericSelectControlPlaceholder"};