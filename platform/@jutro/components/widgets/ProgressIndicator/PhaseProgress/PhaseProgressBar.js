import _extends from"@babel/runtime-corejs3/helpers/extends";import React from"react";import PropTypes from"prop-types";import cx from"classnames";import{useBreakpoint}from"@jutro/layout";import styles from"./PhaseProgressBar.module.css";import{PhaseProgress,phaseProgressPropTypes}from"./PhaseProgress";import{PhaseProgressLabel}from"./PhaseProgressLabel";const phaseProgressBarPropTypes={phases:PropTypes.arrayOf(PropTypes.shape({...phaseProgressPropTypes}).isRequired).isRequired,className:PropTypes.string};export const PhaseProgressBar=({phases:phases,className:className,...rest})=>{const isPhone="phone"===useBreakpoint().breakpoint,classes=cx(styles.phaseProgressBar,className);return React.createElement("nav",_extends({className:classes},rest),React.createElement("div",{className:styles.phases},phases.map(((phaseProps,index)=>{const id=`${phaseProps.id}${index}`;return React.createElement(PhaseProgress,_extends({},phaseProps,{id:id,key:id,showLabel:!isPhone}))}))),(()=>{if(!isPhone)return null;const activePhase=phases.find((phase=>phase.steps.some((step=>step.active))));if(!activePhase)return null;const activeStep=activePhase.steps.find((step=>step.active)),title=activePhase.title,icon=activePhase.icon,isError=activePhase.isError,stepTitle=activeStep.title;return React.createElement(PhaseProgressLabel,{title:title,stepTitle:stepTitle,icon:icon,isError:isError,active:!0})})())};PhaseProgressBar.propTypes=phaseProgressBarPropTypes,PhaseProgressBar.__docgenInfo={description:"PhaseProgressBar\n@type {React.FC<PropTypes.InferProps<typeof phaseProgressBarPropTypes>>}",methods:[],displayName:"PhaseProgressBar",props:{phases:{type:{name:"arrayOf",value:{name:"shape",value:{}}},required:!0,description:"Phases in progress indicator"},className:{type:{name:"string"},required:!1,description:"Class to override progress bar styles"}}},PhaseProgressBar.__docgenInfo={componentName:"PhaseProgressBar",packageName:"@jutro/components",description:"PhaseProgressBar",displayName:"PhaseProgressBar",methods:[],actualName:"PhaseProgressBar",props:{phases:{type:{name:"arrayOf",value:{name:"shape",value:{}}},required:!0,description:"Phases in progress indicator"},className:{type:{name:"string"},required:!1,description:"Class to override progress bar styles"}}};