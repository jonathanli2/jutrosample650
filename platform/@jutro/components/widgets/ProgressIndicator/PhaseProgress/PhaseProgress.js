import React,{useContext}from"react";import PropTypes from"prop-types";import cx from"classnames";import{TranslatorContext}from"@jutro/locale";import{intlMessageShape}from"@jutro/prop-types";import styles from"./ProgressPhase.module.css";import{getKeyPressHandler}from"../../../accessibility/getKeyPressHandler";import{PhaseProgressLabel}from"./PhaseProgressLabel";export const phaseProgressPropTypes={id:PropTypes.string.isRequired,steps:PropTypes.arrayOf(PropTypes.shape({title:intlMessageShape.isRequired,visited:PropTypes.bool,active:PropTypes.bool}).isRequired).isRequired,title:intlMessageShape.isRequired,icon:PropTypes.string,onClick:PropTypes.func,className:PropTypes.string,isError:PropTypes.bool,showLabel:PropTypes.bool};export const PhaseProgress=({title:title,id:id,steps:steps=[],icon:icon,onClick:onClick,className:className,showLabel:showLabel,isError:isError})=>{const translator=useContext(TranslatorContext),active=steps.some((step=>step.active)),activeStepIndex=steps.findIndex((step=>step.active)),finalStep=activeStepIndex===steps.length-1,complete=steps.every((step=>step.visited)),disabled=!(active||complete),progress=finalStep||complete?100:100/steps.length*(activeStepIndex+1),progressPercent=`${progress}%`,handleClick=e=>{e.preventDefault(),disabled||onClick&&onClick(e)},classes=cx(styles.progressPhase,{[styles.active]:active,[styles.complete]:complete,[styles.disabled]:disabled,[styles.error]:isError},className),labelId=`${id}-label`;return React.createElement("div",{id:id,role:"link",className:classes,onClick:handleClick,onKeyPress:getKeyPressHandler((e=>{disabled||handleClick(e)})),active:active.toString(),"aria-label":translator(title),tabIndex:disabled?"-1":"0"},React.createElement("div",{role:"progressbar","aria-valuetext":title,"aria-valuenow":progress,"aria-valuemin":"0","aria-valuemax":"100",className:styles.bar,"aria-labelledby":showLabel&&labelId},React.createElement("div",{className:styles.indicator,style:{width:progressPercent}})),showLabel&&React.createElement(PhaseProgressLabel,{id:labelId,title:title,stepTitle:active?steps[activeStepIndex].title:void 0,icon:icon,complete:complete,active:active,isError:isError}))};PhaseProgress.propTypes=phaseProgressPropTypes,PhaseProgress.__docgenInfo={description:"PhaseProgress\n@type {React.FC<PropTypes.InferProps<typeof phaseProgressPropTypes>>}",methods:[],displayName:"PhaseProgress",props:{steps:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"custom",raw:"intlMessageShape.isRequired",required:!0},visited:{name:"bool",required:!1},active:{name:"bool",required:!1}}}},required:!1,description:"Steps"},id:{type:{name:"string"},required:!0,description:"Component's identifier. Should be unique on a per-page basis."},title:{type:{name:"custom",raw:"intlMessageShape.isRequired"},required:!1,description:"Text part for labeling the phase"},icon:{type:{name:"string"},required:!1,description:"Name of the icon which should be displayed as part of the label"},onClick:{type:{name:"func"},required:!1,description:"Callback function triggered when the phase gets clicked"},className:{type:{name:"string"},required:!1,description:"Additional class names for component"},isError:{type:{name:"bool"},required:!1,description:"Flag determining if phase should be shown as error"},showLabel:{type:{name:"bool"},required:!1,description:"Flag determining if phase label should be displayed"}}},PhaseProgress.__docgenInfo={componentName:"PhaseProgress",packageName:"@jutro/components",description:"PhaseProgress",displayName:"PhaseProgress",methods:[],actualName:"PhaseProgress",props:{id:{type:{name:"string"},required:!0,description:"Component's identifier. Should be unique on a per-page basis."},steps:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"union",required:!0,value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},visited:{name:"bool",required:!1},active:{name:"bool",required:!1}}}},required:!1,description:"Steps",defaultValue:{value:"[]",computed:!1}},title:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!0,description:"Text part for labeling the phase"},icon:{type:{name:"string"},required:!1,description:"Name of the icon which should be displayed as part of the label"},onClick:{type:{name:"func"},required:!1,description:"Callback function triggered when the phase gets clicked"},className:{type:{name:"string"},required:!1,description:"Additional class names for component"},isError:{type:{name:"bool"},required:!1,description:"Flag determining if phase should be shown as error"},showLabel:{type:{name:"bool"},required:!1,description:"Flag determining if phase label should be displayed"}}};