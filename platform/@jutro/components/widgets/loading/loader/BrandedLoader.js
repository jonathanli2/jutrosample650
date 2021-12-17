import React,{useContext}from"react";import cx from"classnames";import{uniqueInnerId}from"@jutro/platform";import{TranslatorContext}from"@jutro/locale";import styles from"./BrandedLoader.module.css";import{messages}from"./BrandedLoader.messages";export const BrandedLoader=()=>{const translator=useContext(TranslatorContext),labelId=uniqueInnerId("BrandedLoader","labelId").labelId;return React.createElement(React.Fragment,null,React.createElement("div",{className:styles.brandedLoader,"aria-describedby":labelId},React.createElement("svg",{viewBox:"0 0 64 64"},React.createElement("g",null,React.createElement("polygon",{className:cx(styles.fill2,styles.logoSegment),points:"64,25.6 64,38.4 64,38.4 64,64 51.2,64 51.2,38.4 25.6,38.4 25.6,25.6 \t"}),React.createElement("polygon",{className:cx(styles.fill1,styles.logoSegment),points:"64,12.8 64,0 12.8,0 0,0 0,12.8 0,51.2 0,64 0,64 12.8,64 12.8,64 38.4,64 38.4,51.2 12.8,51.2 12.8,12.8"})))),React.createElement("div",{id:labelId,className:styles.screenReaderOnly},translator(messages.loading)))};BrandedLoader.displayName="BrandedLoader",BrandedLoader.__docgenInfo={description:"BrandedLoader is default loader element for Loader component",methods:[],displayName:"BrandedLoader"},BrandedLoader.__docgenInfo={componentName:"BrandedLoader",packageName:"@jutro/components",description:"BrandedLoader is default loader element for Loader component",displayName:"BrandedLoader",methods:[],actualName:"BrandedLoader"};