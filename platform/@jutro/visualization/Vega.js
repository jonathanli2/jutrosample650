import _extends from"@babel/runtime-corejs3/helpers/extends";import _objectWithoutProperties from"@babel/runtime-corejs3/helpers/objectWithoutProperties";import React from"react";import PropTypes from"prop-types";import{Vega as VegaComponent}from"react-vega";const availableEcodeEntryName=["enter","update","exit","hover","leave","select","release"],vegaPropTypes={data:PropTypes.objectOf(PropTypes.any),className:PropTypes.string,spec:PropTypes.object.isRequired,style:PropTypes.object,onNewView:PropTypes.func,onError:PropTypes.func,logLevel:PropTypes.number,renderer:PropTypes.oneOf(["canvas","svg","none"]),onTooltip:PropTypes.oneOfType([PropTypes.func,PropTypes.bool]),width:PropTypes.number,height:PropTypes.number,padding:PropTypes.oneOfType([PropTypes.number,PropTypes.shape({left:PropTypes.number.isRequired,right:PropTypes.number.isRequired,top:PropTypes.number.isRequired,bottom:PropTypes.number.isRequired})]),hover:PropTypes.oneOfType([PropTypes.bool,PropTypes.shape({hoverSet:PropTypes.oneOf(availableEcodeEntryName).isRequired,updateSet:PropTypes.oneOf(availableEcodeEntryName).isRequired})])};export const Vega=props=>{const onTooltip=props.onTooltip,other=_objectWithoutProperties(props,["onTooltip"]);return React.createElement(VegaComponent,_extends({},other,{tooltip:onTooltip}))};Vega.displayName="Vega",Vega.propTypes=vegaPropTypes,Vega.__docgenInfo={description:"Jutro wrapper for Vega visualization component. Detailed props descriptions can be found here -\nhttps://github.com/vega/react-vega/tree/master/packages/react-vega#props, specification -\nhttps://vega.github.io/vega/docs/specification/.\n\n@metadataType element",methods:[],displayName:"Vega",props:{data:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},spec:{type:{name:"object"},required:!0,description:""},style:{type:{name:"object"},required:!1,description:""},onNewView:{type:{name:"func"},required:!1,description:""},onError:{type:{name:"func"},required:!1,description:""},logLevel:{type:{name:"number"},required:!1,description:"Sets the current log level"},renderer:{type:{name:"enum",value:[{value:"'canvas'",computed:!1},{value:"'svg'",computed:!1},{value:"'none'",computed:!1}]},required:!1,description:'The renderer to use for the view. One of "canvas" (default) or "svg"'},onTooltip:{type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:""},width:{type:{name:"number"},required:!1,description:"The width in pixels of the data rectangle"},height:{type:{name:"number"},required:!1,description:"The height in pixels of the data rectangle"},padding:{type:{name:"union",value:[{name:"number"},{name:"shape",value:{left:{name:"number",required:!0},right:{name:"number",required:!0},top:{name:"number",required:!0},bottom:{name:"number",required:!0}}}]},required:!1,description:"The distance in pixels between the data rectangles"},hover:{type:{name:"union",value:[{name:"bool"},{name:"shape",value:{hoverSet:{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'update'",computed:!1},{value:"'exit'",computed:!1},{value:"'hover'",computed:!1},{value:"'leave'",computed:!1},{value:"'select'",computed:!1},{value:"'release'",computed:!1}],required:!0},updateSet:{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'update'",computed:!1},{value:"'exit'",computed:!1},{value:"'hover'",computed:!1},{value:"'leave'",computed:!1},{value:"'select'",computed:!1},{value:"'release'",computed:!1}],required:!0}}}]},required:!1,description:"Highlight data rectangle on hover"}}},Vega.__docgenInfo={componentName:"Vega",packageName:"@jutro/visualization",description:"Jutro wrapper for Vega visualization component. Detailed props descriptions can be found here -\nhttps://github.com/vega/react-vega/tree/master/packages/react-vega#props, specification -\nhttps://vega.github.io/vega/docs/specification/.",displayName:"Vega",methods:[],actualName:"Vega",metadataType:"element",props:{data:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:""},className:{type:{name:"string"},required:!1,description:""},spec:{type:{name:"object"},required:!0,description:""},style:{type:{name:"object"},required:!1,description:""},onNewView:{type:{name:"func"},required:!1,description:""},onError:{type:{name:"func"},required:!1,description:""},logLevel:{type:{name:"number"},required:!1,description:"Sets the current log level"},renderer:{type:{name:"enum",value:[{value:"'canvas'",computed:!1},{value:"'svg'",computed:!1},{value:"'none'",computed:!1}]},required:!1,description:'The renderer to use for the view. One of "canvas" (default) or "svg"'},onTooltip:{type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:""},width:{type:{name:"number"},required:!1,description:"The width in pixels of the data rectangle"},height:{type:{name:"number"},required:!1,description:"The height in pixels of the data rectangle"},padding:{type:{name:"union",value:[{name:"number"},{name:"shape",value:{left:{name:"number",required:!0},right:{name:"number",required:!0},top:{name:"number",required:!0},bottom:{name:"number",required:!0}}}]},required:!1,description:"The distance in pixels between the data rectangles"},hover:{type:{name:"union",value:[{name:"bool"},{name:"shape",value:{hoverSet:{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'update'",computed:!1},{value:"'exit'",computed:!1},{value:"'hover'",computed:!1},{value:"'leave'",computed:!1},{value:"'select'",computed:!1},{value:"'release'",computed:!1}],required:!0},updateSet:{name:"enum",value:[{value:"'enter'",computed:!1},{value:"'update'",computed:!1},{value:"'exit'",computed:!1},{value:"'hover'",computed:!1},{value:"'leave'",computed:!1},{value:"'select'",computed:!1},{value:"'release'",computed:!1}],required:!0}}}]},required:!1,description:"Highlight data rectangle on hover"}}};