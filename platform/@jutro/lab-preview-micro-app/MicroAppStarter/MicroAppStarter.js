import _extends from"@babel/runtime-corejs3/helpers/extends";import React from"react";import PropTypes from"prop-types";import{AppFloorPlanContextProvider}from"@jutro/floorplan";import{ComponentMapProvider}from"@jutro/uiconfig";import styles from"./MicroAppStarter.module.css";import{MicroAppRouterBinding}from"./MicroAppRouterBinding";import{AppContextProvider}from"../AppProvider";export const microAppStarterPropTypes={Main:PropTypes.elementType.isRequired,microAppName:PropTypes.string.isRequired,propsFromAppRoot:PropTypes.objectOf(PropTypes.any),propsFromShell:PropTypes.objectOf(PropTypes.any),jutroProps:PropTypes.objectOf(PropTypes.any)};const ComponentMapProviderComponent=props=>ComponentMapProvider?React.createElement(ComponentMapProvider,props):React.createElement(React.Fragment,null,props.children);export const MicroAppStarter=allProps=>{var _jutroProps$routerBin,_jutroProps$launchPro;const _ref=allProps,Main=_ref.Main,microAppName=_ref.microAppName,propsFromAppRoot=_ref.propsFromAppRoot,propsFromShell=_ref.propsFromShell,jutroProps=_ref.jutroProps,shellHistory=null==jutroProps||null===(_jutroProps$routerBin=jutroProps.routerBinding)||void 0===_jutroProps$routerBin?void 0:_jutroProps$routerBin.shellHistory,customHistory=null==jutroProps||null===(_jutroProps$launchPro=jutroProps.launchPropOverrides)||void 0===_jutroProps$launchPro?void 0:_jutroProps$launchPro.routerHistory;return React.createElement(AppContextProvider,{appName:microAppName,appMode:"embedded"},React.createElement((({children:children})=>{var _jutroProps$launchPro2;return shellHistory&&!customHistory?React.createElement(MicroAppRouterBinding,{shellHistory:shellHistory,routerBasename:null==jutroProps||null===(_jutroProps$launchPro2=jutroProps.launchPropOverrides)||void 0===_jutroProps$launchPro2?void 0:_jutroProps$launchPro2.routerBasename},children):React.createElement(React.Fragment,null,children)}),null,React.createElement(ComponentMapProviderComponent,{componentMapExtensions:null==jutroProps?void 0:jutroProps.componentMapExtensions},React.createElement(AppFloorPlanContextProvider,{className:styles.microAppFloorPlan,showHeader:!1,showFooter:!1},React.createElement(Main,_extends({},propsFromAppRoot,propsFromShell))))))};MicroAppStarter.displayName="MicroAppStarter",MicroAppStarter.propTypes=microAppStarterPropTypes,MicroAppStarter.defaultProps={propsFromAppRoot:{},propsFromShell:{},jutroProps:{}},MicroAppStarter.__docgenInfo={description:"",methods:[],displayName:"MicroAppStarter",props:{propsFromAppRoot:{defaultValue:{value:"{}",computed:!1},type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props to be passed to the Main component from ApplicationRoot,\nisolated here to avoid naming conflicts with the MicroAppStarter props"},propsFromShell:{defaultValue:{value:"{}",computed:!1},type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props to be passed to the Main component from the shell app,\nisolated here to avoid naming conflicts with the MicroAppStarter props"},jutroProps:{defaultValue:{value:"{}",computed:!1},type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props related to Jutro internal behaviors, such as any dev overrides for the micro-app component map or\nrouting-related props from the shell"},Main:{type:{name:"elementType"},required:!0,description:"The main React component to render in this micro-app and pass props to"},microAppName:{type:{name:"string"},required:!0,description:"The name for the current micro-app as determined by the shell app"}}},ComponentMapProviderComponent.__docgenInfo={componentName:"ComponentMapProviderComponent",packageName:"@jutro/lab-preview-micro-app",description:"",displayName:"ComponentMapProviderComponent",methods:[],actualName:"ComponentMapProviderComponent"},MicroAppStarter.__docgenInfo={componentName:"MicroAppStarter",packageName:"@jutro/lab-preview-micro-app",description:"",displayName:"MicroAppStarter",methods:[],actualName:"MicroAppStarter",props:{Main:{type:{name:"elementType"},required:!0,description:"The main React component to render in this micro-app and pass props to"},microAppName:{type:{name:"string"},required:!0,description:"The name for the current micro-app as determined by the shell app"},propsFromAppRoot:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props to be passed to the Main component from ApplicationRoot,\nisolated here to avoid naming conflicts with the MicroAppStarter props",defaultValue:{value:"{}",computed:!1}},propsFromShell:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props to be passed to the Main component from the shell app,\nisolated here to avoid naming conflicts with the MicroAppStarter props",defaultValue:{value:"{}",computed:!1}},jutroProps:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:"The props related to Jutro internal behaviors, such as any dev overrides for the micro-app component map or\nrouting-related props from the shell",defaultValue:{value:"{}",computed:!1}}}};