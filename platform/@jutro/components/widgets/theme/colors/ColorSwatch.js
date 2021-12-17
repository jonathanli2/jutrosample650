import React,{useContext}from"react";import PropTypes from"prop-types";import cx from"classnames";import{TranslatorContext}from"@jutro/locale";import{intlMessageShape}from"@jutro/prop-types";import styles from"./ColorSwatch.module.css";import{hexColorElements}from"./hexColorElements";import{getKeyPressHandler}from"../../../accessibility/getKeyPressHandler";import{isBright}from"./utils";const solidColorPropTypes=PropTypes.shape({hexColor:PropTypes.string.isRequired,color:PropTypes.string.isRequired}),gradientColorPropTypes=PropTypes.shape({startingColor:PropTypes.string.isRequired,startingHexColor:PropTypes.string.isRequired,finishingColor:PropTypes.string.isRequired,finishingHexColor:PropTypes.string.isRequired});const boxStyleByType={solid:function({color:color,hexColor:hexColor}){return{backgroundColor:color,borderColor:isBright(hexColor)?"var(--GW-BORDER-COLOR)":color}},gradient:function({startingColor:startingColor,startingHexColor:startingHexColor,finishingColor:finishingColor,finishingHexColor:finishingHexColor}){const gradientColorValue=`linear-gradient(to right, ${startingColor}, ${finishingColor})`;return{backgroundImage:gradientColorValue,...isBright(startingHexColor)||isBright(finishingHexColor)?{borderColor:"var(--GW-BORDER-COLOR)"}:{borderImage:gradientColorValue,borderImageSlice:1}}}},colorSwatchPropTypes={title:intlMessageShape.isRequired,colorProperties:PropTypes.oneOfType([solidColorPropTypes,gradientColorPropTypes]).isRequired,type:PropTypes.oneOf(["gradient","solid"]).isRequired,onClick:PropTypes.func};export const ColorSwatch=props=>{const translator=useContext(TranslatorContext),title=props.title,colorProperties=props.colorProperties,type=props.type,className=props.className,onClick=props.onClick;function handleClick(event){onClick&&onClick(event)}const swatchClasses=cx(styles.colorSwatch,className),colorElements=hexColorElements(type,colorProperties,styles.color);return React.createElement("div",{tabIndex:"0",role:"button",className:swatchClasses,onClick:handleClick,onKeyPress:getKeyPressHandler(handleClick)},React.createElement("div",{className:styles.box,style:boxStyleByType[type](colorProperties)}),React.createElement("div",{className:styles.title},translator(title)),colorElements)};ColorSwatch.propTypes=colorSwatchPropTypes,ColorSwatch.defaultProps={type:"solid"},ColorSwatch.__docgenInfo={description:"ColorSwatch\n@type {React.FC<PropTypes.InferProps<typeof colorSwatchPropTypes>>}\n\n@metadataType action",methods:[],displayName:"ColorSwatch",props:{type:{defaultValue:{value:"'solid'",computed:!1},type:{name:"enum",value:[{value:"'gradient'",computed:!1},{value:"'solid'",computed:!1}]},required:!1,description:"Type of the color. Either gradient or solid"},title:{type:{name:"custom",raw:"intlMessageShape.isRequired"},required:!1,description:"Title of the color"},colorProperties:{type:{name:"union",value:[{name:"custom",raw:"solidColorPropTypes"},{name:"custom",raw:"gradientColorPropTypes"}]},required:!0,description:"Color properties containing either color and hex color for solid colors or starting and finishing colors and hexColors of a gradient"},onClick:{type:{name:"func"},required:!1,description:"Custom onClick handler"}}},ColorSwatch.__docgenInfo={componentName:"ColorSwatch",packageName:"@jutro/components",description:"ColorSwatch",displayName:"ColorSwatch",methods:[],actualName:"ColorSwatch",metadataType:"action",props:{title:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!0,description:"Title of the color"},colorProperties:{type:{name:"union",value:[{name:"custom",raw:"solidColorPropTypes"},{name:"custom",raw:"gradientColorPropTypes"}]},required:!0,description:"Color properties containing either color and hex color for solid colors or starting and finishing colors and hexColors of a gradient"},type:{type:{name:"enum",value:[{value:"'gradient'",computed:!1},{value:"'solid'",computed:!1}]},required:!1,description:"Type of the color. Either gradient or solid",defaultValue:{value:"'solid'",computed:!1}},onClick:{type:{name:"func"},required:!1,description:"Custom onClick handler"}}};