import React from"react";import PropTypes from"prop-types";import{createHOC}from"@jutro/platform";import{intlMessageShape}from"@jutro/prop-types";import{ValueComponentWrapper}from"./ValueComponentWrapper";import{FormattedNumber,formattedNumberPropTypes}from"./FormattedNumber";const NumberValueInternal=createHOC({component:FormattedNumber,wrapper:ValueComponentWrapper,displayName:"NumberValue"}),numberValuePropTypes={id:PropTypes.string.isRequired,className:PropTypes.string,path:PropTypes.string,tag:PropTypes.string,prefix:intlMessageShape,suffix:intlMessageShape,...formattedNumberPropTypes,_rest:PropTypes.any};export const NumberValue=props=>React.createElement(NumberValueInternal,props);NumberValue.propTypes=numberValuePropTypes,NumberValue.defaultProps={tag:"div",...FormattedNumber.defaultProps},NumberValue.__docgenInfo={description:"Renders a formatted number using the `tag` property to wrap\nthe value.\n\n@type {React.FC<PropTypes.InferProps<typeof numberValuePropTypes>>}\n\n@metadataType element",methods:[],displayName:"NumberValue",props:{tag:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:"The html tag to use when rendering the outermost element of this component"},id:{type:{name:"string"},required:!0,description:"Used to identify the component"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},path:{type:{name:"string"},required:!1,description:"Hint path to value"},prefix:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Optional prefix message to be attached in front of the value"},suffix:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Optional suffix message to be attached at the end the value"},_rest:{type:{name:"any"},required:!1,description:"Do not set this field directly - this is a placeholder for the rest od properties, same as you can pass to FormattedNumber component"}},composes:["./FormattedNumber"]},NumberValue.__docgenInfo={componentName:"NumberValue",packageName:"@jutro/components",description:"Renders a formatted number using the `tag` property to wrap\nthe value.",displayName:"NumberValue",methods:[],actualName:"NumberValue",metadataType:"element",props:{id:{type:{name:"string"},required:!0,description:"Used to identify the component"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},path:{type:{name:"string"},required:!1,description:"Hint path to value"},tag:{type:{name:"string"},required:!1,description:"The html tag to use when rendering the outermost element of this component",defaultValue:{value:"'div'",computed:!1}},prefix:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Optional prefix message to be attached in front of the value"},suffix:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Optional suffix message to be attached at the end the value"},_rest:{type:{name:"any"},required:!1,description:"Do not set this field directly - this is a placeholder for the rest od properties, same as you can pass to FormattedNumber component"}},composes:["./FormattedNumber"]};