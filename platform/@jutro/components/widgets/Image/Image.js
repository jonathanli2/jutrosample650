import _extends from"@babel/runtime-corejs3/helpers/extends";import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useState,useEffect}from"react";import PropTypes from"prop-types";import{intlMessageShape}from"@jutro/prop-types";import{Loader}from"../loading/loader/Loader";import styles from"./Image.module.css";const imagePropTypes={src:PropTypes.string.isRequired,alt:intlMessageShape,className:PropTypes.string,figcaption:intlMessageShape,width:PropTypes.number,onError:PropTypes.func,onLoad:PropTypes.func,showLoader:PropTypes.bool};export const Image=({src:src,alt:alt,className:className,figcaption:figcaption,onError:onError,onLoad:onLoad,showLoader:showLoader,dangerouslySetInnerHTML:dangerouslySetInnerHTML,...rest})=>{const _useState=useState(),_useState2=_slicedToArray(_useState,2),imageLoading=_useState2[0],setImageLoading=_useState2[1];useEffect((()=>{setImageLoading(!0)}),[src]);return React.createElement("figure",{className:styles.imageFigure},showLoader&&imageLoading&&React.createElement(Loader,null),React.createElement("img",_extends({src:src,alt:alt,className:showLoader&&imageLoading?styles.imageFigureLoading:className,onError:()=>(setImageLoading(!1),onError&&onError()),onLoad:()=>(setImageLoading(!1),onLoad&&onLoad())},rest)),figcaption&&React.createElement("figcaption",{className:styles.imageFigureCaption},figcaption))};Image.propTypes=imagePropTypes,Image.defaultProps={showLoader:!0},Image.__docgenInfo={description:"Image\n@type {React.FC<PropTypes.InferProps<typeof imagePropTypes>>}\n\n@metadataType element",methods:[],displayName:"Image",props:{showLoader:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Show loader when Image still loading"},src:{type:{name:"string"},required:!0,description:"Specifies the URL of an Image"},alt:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Specifies an alternate text for an Image"},className:{type:{name:"string"},required:!1,description:"Additional img styling class name"},figcaption:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"The caption for the figure"},width:{type:{name:"number"},required:!1,description:"Specifies the width of an Image"},onError:{type:{name:"func"},required:!1,description:"Script to be run when an error occurs when the Image is being loaded"},onLoad:{type:{name:"func"},required:!1,description:"Script to be run when Image is loaded succesfully"}}},Image.__docgenInfo={componentName:"Image",packageName:"@jutro/components",description:"Image",displayName:"Image",methods:[],actualName:"Image",metadataType:"element",props:{src:{type:{name:"string"},required:!0,description:"Specifies the URL of an Image"},alt:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Specifies an alternate text for an Image"},className:{type:{name:"string"},required:!1,description:"Additional img styling class name"},figcaption:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"The caption for the figure"},width:{type:{name:"number"},required:!1,description:"Specifies the width of an Image"},onError:{type:{name:"func"},required:!1,description:"Script to be run when an error occurs when the Image is being loaded"},onLoad:{type:{name:"func"},required:!1,description:"Script to be run when Image is loaded succesfully"},showLoader:{type:{name:"bool"},required:!1,description:"Show loader when Image still loading",defaultValue:{value:"true",computed:!1}}}};