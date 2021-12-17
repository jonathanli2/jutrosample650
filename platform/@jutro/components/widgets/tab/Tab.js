import React,{useContext}from"react";import PropTypes from"prop-types";import{intlMessageShape}from"@jutro/prop-types";import{TabSetContext}from"./TabSetContext";import{getTabHeadingId}from"./TabBar";const tabPropTypes={id:PropTypes.string.isRequired,disabled:PropTypes.bool,visible:PropTypes.bool,className:PropTypes.string,heading:PropTypes.oneOfType([PropTypes.node,intlMessageShape]),children:PropTypes.node};export const Tab=({id:id,children:children,className:className,disabled:disabled=!1,visible:visible=!0})=>{const hidden=id!==useContext(TabSetContext)||disabled||!visible,headingElemId=getTabHeadingId(id).headingElemId;return React.createElement("div",{id:id,className:className,"aria-labelledby":headingElemId,role:"tabpanel","aria-hidden":hidden,tabIndex:hidden?-1:0},!hidden&&children)};Tab.propTypes=tabPropTypes,Tab.__docgenInfo={description:"The `Tab` component is designed to be used as the child of a `TabSet` component.  It will render its `children`\ninside the appropriate tab pane <div> only if its `id` matches the `activeTabId` from the context provided by the\n`TabSet` AND the component is not `disabled`.  Also, the `heading` prop will never be rendered internally by a `Tab`\nas this will be done by the `TabSet` container instead.\n\n@typedef {typeof Tab.propTypes} TabPropTypes\n@extends Component<PropTypes.InferProps<TabPropTypes>>\n\n@metadataType container",methods:[],displayName:"Tab",props:{disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"If true, this `Tab` is disabled."},visible:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"If true, this `Tab` is visible."},id:{type:{name:"string"},required:!0,description:"The id for this Tab"},className:{type:{name:"string"},required:!1,description:"Optional class name to apply to this component"},heading:{type:{name:"union",value:[{name:"node"},{name:"custom",raw:"intlMessageShape"}]},required:!1,description:"The heading for the `Tab`. This prop is NOT rendered by the `Tab` component directly, but rather is extracted out by the `TabSet` component and rendered by it instead\nCan either be a simple string or renderer function (which should accept rendering props object as an argument)"},children:{type:{name:"node"},required:!1,description:"The content of this tab, child components to display"}}},Tab.__docgenInfo={componentName:"Tab",packageName:"@jutro/components",description:"The `Tab` component is designed to be used as the child of a `TabSet` component.  It will render its `children`\ninside the appropriate tab pane <div> only if its `id` matches the `activeTabId` from the context provided by the\n`TabSet` AND the component is not `disabled`.  Also, the `heading` prop will never be rendered internally by a `Tab`\nas this will be done by the `TabSet` container instead.",displayName:"Tab",methods:[],actualName:"Tab",metadataType:"container",props:{id:{type:{name:"string"},required:!0,description:"The id for this Tab"},disabled:{type:{name:"bool"},required:!1,description:"If true, this `Tab` is disabled.",defaultValue:{value:"false",computed:!1}},visible:{type:{name:"bool"},required:!1,description:"If true, this `Tab` is visible.",defaultValue:{value:"true",computed:!1}},className:{type:{name:"string"},required:!1,description:"Optional class name to apply to this component"},heading:{type:{name:"union",value:[{name:"node"},{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]}]},required:!1,description:"The heading for the `Tab`. This prop is NOT rendered by the `Tab` component directly, but rather is extracted out by the `TabSet` component and rendered by it instead\nCan either be a simple string or renderer function (which should accept rendering props object as an argument)"},children:{type:{name:"node"},required:!1,description:"The content of this tab, child components to display"}}};