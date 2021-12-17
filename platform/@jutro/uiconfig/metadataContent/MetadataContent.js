import{useContext}from"react";import PropTypes from"prop-types";import{deprecated}from"@jutro/prop-types";import{ComponentMapContext}from"../componentMap/ComponentMapProvider";import{renderContentFromMetadataInternal}from"../render/renderMetadataHelper";const metadataContentPropTypes={uiProps:PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any),PropTypes.array]).isRequired,overrideProps:PropTypes.objectOf(PropTypes.any),resolveValidation:PropTypes.func,resolveFormValidation:PropTypes.func,resolveDataProps:PropTypes.func,resolveComponent:deprecated(PropTypes.func,"7.0.0",'Pass "resolveComponent" to a ComponentMapProvider around this component to consume from context instead'),resolveValue:PropTypes.func,resolveComponentMap:PropTypes.objectOf(PropTypes.any),resolveClassNameMap:PropTypes.objectOf(PropTypes.any),resolveCallbackMap:PropTypes.objectOf(PropTypes.any),showHidden:PropTypes.bool};export const MetadataContent=({uiProps:uiProps,overrideProps:overrideProps,showHidden:showHidden,resolveComponent:localResolver,...resolvers})=>{const resolveComponent=useContext(ComponentMapContext),resolversWithOverrides={...resolvers,resolveComponent:localResolver||resolveComponent};return renderContentFromMetadataInternal(uiProps,overrideProps,resolversWithOverrides,showHidden)};MetadataContent.propTypes=metadataContentPropTypes,MetadataContent.defaultProps={showHidden:!1};