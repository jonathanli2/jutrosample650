import React from"react";export const hexColorElements=(type,colorProperties,className)=>{if("solid"===type)return React.createElement("div",{className:className},colorProperties.hexColor);const startingHexColor=colorProperties.startingHexColor,finishingHexColor=colorProperties.finishingHexColor;return React.createElement(React.Fragment,null,React.createElement("div",{key:"startingHexColor",className:className},startingHexColor),React.createElement("div",{key:"finishingHexColor",className:className},finishingHexColor))};hexColorElements.__docgenInfo={description:"",methods:[],displayName:"hexColorElements"},hexColorElements.__docgenInfo={componentName:"hexColorElements",packageName:"@jutro/components",description:"",displayName:"hexColorElements",methods:[],actualName:"hexColorElements"};