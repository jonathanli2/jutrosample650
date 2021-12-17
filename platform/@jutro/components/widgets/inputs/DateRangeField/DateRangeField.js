import _extends from"@babel/runtime-corejs3/helpers/extends";import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useState,useCallback}from"react";import PropTypes from"prop-types";import cx from"classnames";import{dateRangeValueShape,intlMessageShape,nestedTooltipShape}from"@jutro/prop-types";import{GridLayout}from"@jutro/layout";import{DateField}from"../DateField/DateField";import{messages}from"./DateRangeField.messages";import styles from"./DateRangeField.module.css";const dateRangeFieldDefaultProps={...DateField.defaultProps,defaultValue:{},startPathValueProp:"startDate",endPathValueProp:"endDate",highlightRange:!1},dateRangePropTypes={...DateField.propTypes,value:dateRangeValueShape,defaultValue:dateRangeValueShape,startPath:PropTypes.string,endPath:PropTypes.string,startDataPath:PropTypes.string,endDataPath:PropTypes.string,startPathValueProp:PropTypes.string,endPathValueProp:PropTypes.string,endLabel:intlMessageShape,endSecondaryLabel:intlMessageShape,endTooltip:PropTypes.oneOfType([PropTypes.string,nestedTooltipShape]),endPlaceholder:intlMessageShape,endContentContainerClassName:PropTypes.string,endControlClassName:PropTypes.string,endLabelContainerClassName:PropTypes.string,endLabelClassName:PropTypes.string,highlightRange:PropTypes.bool};export const DateRangeField=({id:id,value:value,defaultValue:defaultValue={},maxDate:maxDate,minDate:minDate,onValueChange:onValueChange,label:label,path:path,startPath:startPath,endPath:endPath,dataPath:dataPath,startDataPath:startDataPath,endDataPath:endDataPath,startPathValueProp:startPathValueProp,endPathValueProp:endPathValueProp,readOnly:readOnly,labelPosition:labelPosition,className:className,endLabel:endLabel,endSecondaryLabel:endSecondaryLabel,endTooltip:endTooltip,endPlaceholder:endPlaceholder,endContentContainerClassName:endContentContainerClassName,endControlClassName:endControlClassName,endLabelContainerClassName:endLabelContainerClassName,endLabelClassName:endLabelClassName,highlightRange:highlightRange,...commonDateProps})=>{const _useState=useState(value||defaultValue),_useState2=_slicedToArray(_useState,2),_useState2$=_useState2[0],startDate=_useState2$.startDate,endDate=_useState2$.endDate,setRange=_useState2[1],startDatePath=null!=startPath?startPath:`${path}.${startPathValueProp}`,endDatePath=null!=endPath?endPath:`${path}.${endPathValueProp}`,startDateDataPath=null!=startDataPath?startDataPath:`${dataPath}.${startPathValueProp}`,endDateDataPath=null!=endDataPath?endDataPath:`${dataPath}.${endPathValueProp}`,setDateRange=useCallback(((startDate,endDate,model,props)=>{const endDateChanged=props.endDateChanged;setRange({startDate:startDate,endDate:endDate}),onValueChange&&onValueChange(endDateChanged?endDate:startDate,model,props)}),[onValueChange]),setMinDate=useCallback(((newStartDate,model,props)=>setDateRange(newStartDate,endDate,model,{...props,startDateChanged:!0})),[endDate,setDateRange]),setMaxDate=useCallback(((newEndDate,model,props)=>setDateRange(startDate,newEndDate,model,{...props,endDateChanged:!0})),[startDate,setDateRange]),labelOnTop="top"===labelPosition,gridColumns=labelOnTop?["minmax(0, 1fr)"]:[];return React.createElement(GridLayout,{id:id,className:className,repeat:2,columns:gridColumns,hgap:"small",vgap:labelOnTop?"none":void 0,phone:{columns:[],repeat:void 0,vgap:void 0},style:{gridTemplateRows:"min-content"},defaultGridItem:{className:cx({[styles.fieldContainer]:labelOnTop}),phone:{className:void 0}}},React.createElement(DateField,_extends({},commonDateProps,{readOnly:readOnly,labelPosition:labelPosition,label:label||messages.startLabel,contentContainerClassName:cx({[styles.startDateField]:labelOnTop},commonDateProps.contentContainerClassName),labelContainerClassName:cx({[styles.startDateLabel]:labelOnTop},commonDateProps.labelContainerClassName),id:`${id}_${startPathValueProp}`,path:startDatePath,dataPath:startDateDataPath,value:startDate||(null==value?void 0:value.startDate),minDate:minDate,maxDate:endDate||maxDate,onValueChange:setMinDate,startDate:highlightRange?startDate||(null==value?void 0:value.startDate):void 0,endDate:highlightRange?endDate||(null==value?void 0:value.endDate):void 0,selectsStart:highlightRange})),React.createElement(DateField,_extends({},commonDateProps,{readOnly:readOnly,labelPosition:labelPosition,label:endLabel||messages.endLabel,secondaryLabel:endSecondaryLabel||commonDateProps.secondaryLabel,placeholder:endPlaceholder||commonDateProps.placeholder,tooltip:endTooltip||commonDateProps.tooltip,contentContainerClassName:cx({[styles.endDateField]:labelOnTop},endContentContainerClassName||commonDateProps.contentContainerClassName),controlClassName:endControlClassName||commonDateProps.controlClassName,labelContainerClassName:cx({[styles.endDateLabel]:labelOnTop},endLabelContainerClassName||commonDateProps.labelContainerClassName),labelClassName:endLabelClassName||commonDateProps.labelClassName,id:`${id}_${endPathValueProp}`,path:endDatePath,dataPath:endDateDataPath,value:endDate||(null==value?void 0:value.endDate),minDate:startDate||minDate,maxDate:maxDate,onValueChange:setMaxDate,startDate:highlightRange?startDate||(null==value?void 0:value.startDate):void 0,endDate:highlightRange?endDate||(null==value?void 0:value.endDate):void 0,selectsEnd:highlightRange})))};DateRangeField.displayName="DateRangeField",DateRangeField.propTypes=dateRangePropTypes,DateRangeField.defaultProps=dateRangeFieldDefaultProps,DateRangeField.__docgenInfo={description:"@extends {FieldComponent<DateRangeFieldPropTypes>}\n\n@metadataType field",methods:[],displayName:"DateRangeField",props:{defaultValue:{defaultValue:{value:"{}",computed:!1},type:{name:"custom",raw:"dateRangeValueShape"},required:!1,description:"Default date range value"},startPathValueProp:{defaultValue:{value:"'startDate'",computed:!1},type:{name:"string"},required:!1,description:"Name of prop in value object for startPath"},endPathValueProp:{defaultValue:{value:"'endDate'",computed:!1},type:{name:"string"},required:!1,description:"Name of prop in value object for endPath"},highlightRange:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"if true, selected range will be highlighted"},value:{type:{name:"custom",raw:"dateRangeValueShape"},required:!1,description:"Date range value to display if used as controlled component"},startPath:{type:{name:"string"},required:!1,description:"Path in model to start date"},endPath:{type:{name:"string"},required:!1,description:"Path in model to end date"},startDataPath:{type:{name:"string"},required:!1,description:"Start date dataPath"},endDataPath:{type:{name:"string"},required:!1,description:"End date dataPath"},endLabel:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Intl message for end date label"},endSecondaryLabel:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Intl message for end date label (by default same as secondaryLabel prop)"},endTooltip:{type:{name:"union",value:[{name:"string"},{name:"custom",raw:"nestedTooltipShape"}]},required:!1,description:"Tooltip for end date (by default same as tooltip prop for start date)"},endPlaceholder:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Intl message for end date placeholder (by default same as placeholder prop)"},endContentContainerClassName:{type:{name:"string"},required:!1,description:"class for end content container (by default takes value from contentContainerClassName prop if specified)"},endControlClassName:{type:{name:"string"},required:!1,description:"class for end date control input (by default takes value from controlClassName prop if specified)"},endLabelContainerClassName:{type:{name:"string"},required:!1,description:"class for end label container (by default takes value from labelContainerClassName prop if specified)"},endLabelClassName:{type:{name:"string"},required:!1,description:"class for end date label (by default takes value from labelClassName prop if specified)"}},composes:["../DateField/DateField"]},DateRangeField.__docgenInfo={componentName:"DateRangeField",packageName:"@jutro/components",description:"",displayName:"DateRangeField",methods:[],actualName:"DateRangeField",metadataType:"field",props:{value:{type:{name:"custom",raw:"dateRangeValueShape"},required:!1,description:"Date range value to display if used as controlled component"},defaultValue:{type:{name:"custom",raw:"dateRangeValueShape"},required:!1,description:"Default date range value",defaultValue:{value:"{}",computed:!1}},startPath:{type:{name:"string"},required:!1,description:"Path in model to start date"},endPath:{type:{name:"string"},required:!1,description:"Path in model to end date"},startDataPath:{type:{name:"string"},required:!1,description:"Start date dataPath"},endDataPath:{type:{name:"string"},required:!1,description:"End date dataPath"},startPathValueProp:{type:{name:"string"},required:!1,description:"Name of prop in value object for startPath",defaultValue:{value:"'startDate'",computed:!1}},endPathValueProp:{type:{name:"string"},required:!1,description:"Name of prop in value object for endPath",defaultValue:{value:"'endDate'",computed:!1}},endLabel:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Intl message for end date label"},endSecondaryLabel:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Intl message for end date label (by default same as secondaryLabel prop)"},endTooltip:{type:{name:"union",value:[{name:"string"},{name:"custom",raw:"nestedTooltipShape"}]},required:!1,description:"Tooltip for end date (by default same as tooltip prop for start date)"},endPlaceholder:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Intl message for end date placeholder (by default same as placeholder prop)"},endContentContainerClassName:{type:{name:"string"},required:!1,description:"class for end content container (by default takes value from contentContainerClassName prop if specified)"},endControlClassName:{type:{name:"string"},required:!1,description:"class for end date control input (by default takes value from controlClassName prop if specified)"},endLabelContainerClassName:{type:{name:"string"},required:!1,description:"class for end label container (by default takes value from labelContainerClassName prop if specified)"},endLabelClassName:{type:{name:"string"},required:!1,description:"class for end date label (by default takes value from labelClassName prop if specified)"},highlightRange:{type:{name:"bool"},required:!1,description:"if true, selected range will be highlighted",defaultValue:{value:"false",computed:!1}}},composes:["../DateField/DateField"]};