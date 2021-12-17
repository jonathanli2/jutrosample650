import React,{useContext}from"react";import PropTypes from"prop-types";import cx from"classnames";import{IntlContext,TranslatorContext}from"@jutro/locale";import{LiveRegion}from"../../accessibility/LiveRegion/LiveRegion";import styles from"./Badge.module.css";import{InfoLabel}from"../InfoLabel/InfoLabel";import{getFromArray}from"../../helpers";const availableInfoLabelTypes=["success","error","warning","info","neutral"],availableBadgeTypes=[...availableInfoLabelTypes,"notification","primary","inverse"],badgePropTypes={value:PropTypes.number.isRequired,maxValue:PropTypes.number,className:PropTypes.string,id:PropTypes.string.isRequired,type:PropTypes.oneOf(availableBadgeTypes),liveRegionContext:PropTypes.string};export const Badge=({value:value,maxValue:maxValue,className:className,id:id,type:type,liveRegionContext:liveRegionContext})=>{const formatNumber=useContext(IntlContext).formatNumber,translator=useContext(TranslatorContext),badgeType=getFromArray(availableBadgeTypes,type,"notification"),infoLabelType=getFromArray(availableInfoLabelTypes,badgeType),badgeContent=value>maxValue?`${formatNumber(maxValue)}+`:formatNumber(value),classes=cx(styles.badge,styles[badgeType],className),liveRegionContextClass=styles.liveRegionContext;return React.createElement(LiveRegion,{context:translator(liveRegionContext),contextClass:liveRegionContextClass},React.createElement(InfoLabel,{id:id,type:infoLabelType,className:classes},badgeContent))};Badge.propTypes=badgePropTypes,Badge.defaultProps={type:"notification"},Badge.__docgenInfo={description:'Displays a "badge" element with child components, such as text or images.\n\n@type {React.FC<PropTypes.InferProps<typeof badgePropTypes>>}\n\n@metadataType element',methods:[],displayName:"Badge",props:{type:{defaultValue:{value:"'notification'",computed:!1},type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'neutral'",computed:!1},{value:"'notification'",computed:!1},{value:"'primary'",computed:!1},{value:"'inverse'",computed:!1}]},required:!1,description:"Phrase allowing to set custom flavor (success, general, neutral, etc.)"},value:{type:{name:"number"},required:!0,description:"The value of the Badge"},maxValue:{type:{name:"number"},required:!1,description:"The maximum value for the badge\nif value prop is greater then maxValue, then Badge will display 'maxValue+'"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},id:{type:{name:"string"},required:!0,description:"Component unique identifier"},liveRegionContext:{type:{name:"string"},required:!1,description:"Used to describe the live region for assistive technologies (E.g. Unread Emails)"}}},Badge.__docgenInfo={componentName:"Badge",packageName:"@jutro/components",description:'Displays a "badge" element with child components, such as text or images.',displayName:"Badge",methods:[],actualName:"Badge",metadataType:"element",props:{value:{type:{name:"number"},required:!0,description:"The value of the Badge"},maxValue:{type:{name:"number"},required:!1,description:"The maximum value for the badge\nif value prop is greater then maxValue, then Badge will display 'maxValue+'"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},id:{type:{name:"string"},required:!0,description:"Component unique identifier"},type:{type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1},{value:"'neutral'",computed:!1},{value:"'notification'",computed:!1},{value:"'primary'",computed:!1},{value:"'inverse'",computed:!1}]},required:!1,description:"Phrase allowing to set custom flavor (success, general, neutral, etc.)",defaultValue:{value:"'notification'",computed:!1}},liveRegionContext:{type:{name:"string"},required:!1,description:"Used to describe the live region for assistive technologies (E.g. Unread Emails)"}}};