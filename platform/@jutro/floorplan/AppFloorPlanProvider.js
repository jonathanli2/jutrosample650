import React,{createContext}from"react";export const AppFloorPlanContext=createContext({});export const AppFloorPlanContextProvider=({children:children,...props})=>React.createElement(AppFloorPlanContext.Provider,{value:props},children);AppFloorPlanContextProvider.displayName="AppFloorPlanContextProvider",AppFloorPlanContextProvider.__docgenInfo={description:"A provider for the AppFloorPlanContext, allowing AppFloorPlan props default values\nto be managed from the context, for example, when embedded in micro-apps",methods:[],displayName:"AppFloorPlanContextProvider"},AppFloorPlanContextProvider.__docgenInfo={componentName:"AppFloorPlanContextProvider",packageName:"@jutro/floorplan",description:"A provider for the AppFloorPlanContext, allowing AppFloorPlan props default values\nto be managed from the context, for example, when embedded in micro-apps",displayName:"AppFloorPlanContextProvider",methods:[],actualName:"AppFloorPlanContextProvider"};