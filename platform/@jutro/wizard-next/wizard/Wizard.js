import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{memo,useMemo,useEffect,useCallback,useReducer}from"react";import cx from"classnames";import merge from"lodash/merge";import{withRouter}from"react-router-dom";import{matchPath}from"react-router";import{PageLayout,layoutShape}from"@jutro/components";import{withTransformedProps}from"@jutro/prop-types";import{prepareCallbacksInComponentProps}from"@jutro/uiconfig";import PropTypes from"prop-types";import{WizardContext}from"./WizardContext";import styles from"./Wizard.module.css";import{getActions}from"./getActions";import{Routes}from"../routes/Routes";import{WizardProgress}from"../progress/WizardProgress";import{WizardActionBar}from"../actionBar/WizardActionBar";import{wizardCallbackProptype}from"./WizardProptypes";function wizardCallbackReducer(state,action){switch(action.type){case"setWizardCallbacks":{const _action$payload=action.payload,onFinish=_action$payload.onFinish,onCancel=_action$payload.onCancel;return{...state,onFinish:onFinish,onCancel:onCancel}}case"setWizardPageOnNextCallback":{const onNext=action.payload.onNext;return{...state,onNext:onNext}}case"setWizardPageOnPreviousCallback":{const onPrevious=action.payload.onPrevious;return{...state,onPrevious:onPrevious}}case"loadPage":{const onLoad=action.payload.onLoad;return onLoad&&"function"==typeof onLoad&&onLoad(),{...state}}case"clearWizardPageOnNextCallback":return{...state,onNext:null};case"clearWizardPageOnPreviousCallback":return{...state,onPrevious:null};case"start":{const onStart=action.payload.onStart;return"function"==typeof onStart&&onStart(),{...state}}case"setButtonProps":return{...state,buttonProps:action.payload};default:throw new Error(`Invalid action ${action.type} for wizard reducer`)}}function WizardInternal({actionBarLayout:actionBarLayout,basePath:basePath,baseRoute:baseRoute,bodyClassName:bodyClassName,buttonProps:buttonProps,callbackMap:callbackMap,cancelPath:cancelPath,className:className,componentMap:componentMap,finishPath:finishPath,history:history,initialStepPath:initialStepPath,knockoutPath:knockoutPath,layout:layout,location:location,onCancel:onCancel,onFinish:onFinish,onStart:onStart,onWizardEvent:onWizardEvent,renderActionBar:renderActionBar,renderNotFound:renderNotFound,renderProgressBar:renderProgressBar,steps:steps,subRoutes:subRoutes}){const _useReducer=useReducer(wizardCallbackReducer,{onPrevious:null,onFinish:null,onNext:null,onCancel:null,buttonProps:{}}),_useReducer2=_slicedToArray(_useReducer,2),callbacks=_useReducer2[0],dispatch=_useReducer2[1],goToLastLocation=useCallback((()=>{}),[history,basePath]),isMainWizard=subRoutes.length>0,isCancelPathUndefinedForMainWizard=isMainWizard&&!cancelPath,isFinishPathUndefinedForMainWizard=isMainWizard&&!finishPath;useEffect((()=>{const updatedCallbackMap={...callbackMap,onCancelWizard:isCancelPathUndefinedForMainWizard?goToLastLocation:null==callbackMap?void 0:callbackMap.onCancelWizard,onFinishWizard:isFinishPathUndefinedForMainWizard?goToLastLocation:null==callbackMap?void 0:callbackMap.onFinishWizard},resolvedCallbacks=prepareCallbacksInComponentProps({componentProps:{onFinish:onFinish,onCancel:onCancel},resolvers:{resolveCallbackMap:updatedCallbackMap}});dispatch({type:"setWizardCallbacks",payload:{onFinish:null==resolvedCallbacks?void 0:resolvedCallbacks.onFinish,onCancel:null==resolvedCallbacks?void 0:resolvedCallbacks.onCancel}})}),[goToLastLocation,isCancelPathUndefinedForMainWizard,isFinishPathUndefinedForMainWizard,onCancel,onFinish,callbackMap]);const returnPath=useMemo((()=>history&&history.length>1&&history.entries?history.entries[history.length-2].pathname:void 0),[history]);useEffect((()=>{if(onStart){const resolvedCallbacks=prepareCallbacksInComponentProps({componentProps:{onStart:onStart},resolvers:{resolveCallbackMap:callbackMap}});dispatch({type:"start",payload:{onStart:null==resolvedCallbacks?void 0:resolvedCallbacks.onStart}})}}),[]);const isActiveWizard=!subRoutes.some((({route:route})=>matchPath(location.pathname,{path:`${baseRoute}/${route}`}))),wizardClasses=cx(styles.wizard,className),cancelPathProp=isCancelPathUndefinedForMainWizard?basePath:null!=cancelPath?cancelPath:returnPath,finishPathProp=isFinishPathUndefinedForMainWizard?basePath:null!=finishPath?finishPath:returnPath,bodyClasses=cx(styles.main,bodyClassName),contextValue={basePath:basePath,steps:steps,subRoutes:subRoutes,onCancelWizard:null==callbacks?void 0:callbacks.onCancel,onFinishWizard:null==callbacks?void 0:callbacks.onFinish,onWizardEvent:onWizardEvent,wizardReducerDispatch:dispatch},customButtonProps=callbacks.buttonProps?merge({},buttonProps,callbacks.buttonProps):buttonProps,actions=useMemo((()=>getActions({finishPath:finishPathProp,cancelPath:cancelPathProp,steps:steps,basePath:basePath,initialStepPath:initialStepPath,location:location,callbacks:callbacks,buttonProps:customButtonProps,knockoutPath:knockoutPath,renderActionBar:renderActionBar,actionBarLayout:actionBarLayout},[finishPathProp,cancelPathProp,steps,basePath,initialStepPath,location,callbacks,customButtonProps,knockoutPath,renderActionBar,actionBarLayout]))),ProgressBar=customRenderComponent(renderProgressBar,[{steps:steps,basePath:basePath}],React.createElement(WizardProgress,{layout:"progressBar",steps:steps,basePath:basePath})),ActionBar=customRenderComponent(renderActionBar,[actions,actionBarLayout],React.createElement(WizardActionBar,{actions:actions,layout:actionBarLayout}));return React.createElement(WizardContext.Provider,{value:contextValue},React.createElement(PageLayout,{className:wizardClasses,layout:layout},isActiveWizard&&ProgressBar,React.createElement("div",{className:bodyClasses},React.createElement(Routes,{steps:steps,basePath:basePath,baseRoute:baseRoute,initialStepPath:initialStepPath,componentMap:componentMap,renderNotFound:renderNotFound,subRoutes:subRoutes})),isActiveWizard&&ActionBar))}WizardInternal.defaultProps={actionBarLayout:"default",buttonProps:{},renderActionBar:!0,renderProgressBar:!0,callbackMap:{},subRoutes:[]};const wizardPropTypes={actionBarLayout:PropTypes.oneOf(["default","spaceEvenly"]),basePath:PropTypes.string.isRequired,baseRoute:PropTypes.string.isRequired,bodyClassName:PropTypes.string,buttonProps:PropTypes.object,cancelPath:PropTypes.string,className:PropTypes.string,finishPath:PropTypes.string,initialStepPath:PropTypes.string,knockoutPath:PropTypes.string,layout:PropTypes.shape({desktop:layoutShape,tablet:layoutShape,phoneWide:layoutShape,phone:layoutShape}),location:PropTypes.shape({hash:PropTypes.string.isRequired,key:PropTypes.string,pathname:PropTypes.string.isRequired,search:PropTypes.string.isRequired,state:PropTypes.oneOfType([PropTypes.array,PropTypes.bool,PropTypes.number,PropTypes.object,PropTypes.string])}).isRequired,onCancel:wizardCallbackProptype,onFinish:wizardCallbackProptype,onStart:wizardCallbackProptype,onWizardEvent:PropTypes.func,steps:PropTypes.array.isRequired,subRoutes:PropTypes.array,renderActionBar:PropTypes.oneOfType([PropTypes.func,PropTypes.bool]),renderNotFound:PropTypes.func,renderProgressBar:PropTypes.oneOfType([PropTypes.func,PropTypes.bool]),callbackMap:PropTypes.shape({onStartWizard:PropTypes.func,onFinishWizard:PropTypes.func,onCancelWizard:PropTypes.func}),history:PropTypes.object,match:PropTypes.object,staticContext:PropTypes.object,componentMap:PropTypes.object};WizardInternal.propTypes=wizardPropTypes;export const Wizard=memo(withRouter(withTransformedProps(WizardInternal)));function customRenderComponent(renderFunction,renderArgs,defaultComponent){return"function"==typeof renderFunction?renderFunction(...renderArgs):null===renderFunction||!1===renderFunction?null:defaultComponent}WizardInternal.__docgenInfo={description:"Wizard is an Jutro component.\n\nUse this component to render a wizard. This component is the main wizard container.\nIt renders routes for the specified steps. Each step should reference a component that either\nwraps or extends `<WizardPage`. Each step component will receive metadata and navigation paths\nto be used in page rendering. See `<WizardPage>` documentation for more details.\n\nProperties: {@link Wizard.propTypes}\n\n@example\nconst steps = [\n    {\n       key: 'one',\n        route: 'step1',\n        component: PageOne\n    },\n    {\n        key: 'two',\n        route: 'step2',\n        component: PageTwo\n    },\n    {\n        key: 'three',\n        route: 'step3',\n        component: PageThree\n    }\n];\n\n<Wizard\n    baseRoute=\"/wizard/:zipCode\"\n    basePath=\"/wizard/90210\"\n    steps={steps}\n    cancelPath=\"/home\"\n    finishPath=\"/home\"\n/>\n\n@type {React.FC<PropTypes.InferProps<typeof wizardPropTypes>>}\n\n@returns {React.ReactElement} wizard component",methods:[],displayName:"WizardInternal",props:{actionBarLayout:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'spaceEvenly'",computed:!1}]},required:!1,description:"type of layout applied to action bar items: `default` - keeps items with visual separation, `spaceEvenly` - distributes items evenly in available grid space"},buttonProps:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:"Overrides for action buttons"},renderActionBar:{defaultValue:{value:"true",computed:!1},type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:"Callback to render action bar, or hide/show it"},renderProgressBar:{defaultValue:{value:"true",computed:!1},type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:"Callback to render progress bar, or hide/show it"},callbackMap:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{onStartWizard:{name:"func",required:!1},onFinishWizard:{name:"func",required:!1},onCancelWizard:{name:"func",required:!1}}},required:!1,description:"Callback map for resolver"},subRoutes:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:"Array of subRoute metadata: { key, route, component, ...}"},basePath:{type:{name:"string"},required:!0,description:"Base path for the wizard; used when building step links"},baseRoute:{type:{name:"string"},required:!0,description:"Base route for the wizard; used when building step routes"},bodyClassName:{type:{name:"string"},required:!1,description:"CSS class name for the body of this component"},cancelPath:{type:{name:"string"},required:!1,description:"Path to navigate on 'cancel'; if none provided, button will not be displayed"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},finishPath:{type:{name:"string"},required:!1,description:"Path to navigate on 'finish'; if none provided, button will not be displayed"},initialStepPath:{type:{name:"string"},required:!1,description:"Path to initial step; if not provided, the first step will be displayed"},knockoutPath:{type:{name:"string"},required:!1,description:"Path to navigate on fail of 'next'; if none provided, no default failTo will be added to 'next' button"},layout:{type:{name:"shape",value:{desktop:{name:"custom",raw:"layoutShape",required:!1},tablet:{name:"custom",raw:"layoutShape",required:!1},phoneWide:{name:"custom",raw:"layoutShape",required:!1},phone:{name:"custom",raw:"layoutShape",required:!1}}},required:!1,description:"Object to override page layout"},location:{type:{name:"shape",value:{hash:{name:"string",required:!0},key:{name:"string",required:!1},pathname:{name:"string",required:!0},search:{name:"string",required:!0},state:{name:"union",value:[{name:"array"},{name:"bool"},{name:"number"},{name:"object"},{name:"string"}],required:!1}}},required:!0,description:"Current path location, provided by react-router\nhttps://github.com/Javascript-Ninja/react-router-prop-types/blob/master/src/index.ts#L3"},onCancel:{type:{name:"custom",raw:"wizardCallbackProptype"},required:!1,description:"Callback to invoke when 'cancel' button is clicked; return true, false or a promise"},onFinish:{type:{name:"custom",raw:"wizardCallbackProptype"},required:!1,description:"Callback to invoke when 'finish' button is clicked; return true, false or a promise"},onStart:{type:{name:"custom",raw:"wizardCallbackProptype"},required:!1,description:"Callback to trigger when Wizard mounts"},onWizardEvent:{type:{name:"func"},required:!1,description:"the function(info, eventName) called when a page loads - invoked by WizardPage"},steps:{type:{name:"array"},required:!0,description:"Array of step metadata: { key, route, component, ...}"},renderNotFound:{type:{name:"func"},required:!1,description:"Callback to render 'not found' content; if not provided, nothing will be rendered if path is not found"},history:{type:{name:"object"},required:!1,description:"React-Router history object"},match:{type:{name:"object"},required:!1,description:"React-Router match object"},staticContext:{type:{name:"object"},required:!1,description:"React-Router static context"},componentMap:{type:{name:"object"},required:!1,description:"Component map for page component resolver"}}},WizardInternal.__docgenInfo={componentName:"WizardInternal",packageName:"@jutro/wizard-next",description:"Wizard is an Jutro component.\n\nUse this component to render a wizard. This component is the main wizard container.\nIt renders routes for the specified steps. Each step should reference a component that either\nwraps or extends `<WizardPage`. Each step component will receive metadata and navigation paths\nto be used in page rendering. See `<WizardPage>` documentation for more details.\n\nProperties: {@link Wizard.propTypes}",displayName:"WizardInternal",methods:[],actualName:"WizardInternal",props:{actionBarLayout:{type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'spaceEvenly'",computed:!1}]},required:!1,description:"type of layout applied to action bar items: `default` - keeps items with visual separation, `spaceEvenly` - distributes items evenly in available grid space",defaultValue:{value:"'default'",computed:!1}},basePath:{type:{name:"string"},required:!0,description:"Base path for the wizard; used when building step links"},baseRoute:{type:{name:"string"},required:!0,description:"Base route for the wizard; used when building step routes"},bodyClassName:{type:{name:"string"},required:!1,description:"CSS class name for the body of this component"},buttonProps:{type:{name:"object"},required:!1,description:"Overrides for action buttons",defaultValue:{value:"{}",computed:!1}},cancelPath:{type:{name:"string"},required:!1,description:"Path to navigate on 'cancel'; if none provided, button will not be displayed"},className:{type:{name:"string"},required:!1,description:"CSS class name for this component"},finishPath:{type:{name:"string"},required:!1,description:"Path to navigate on 'finish'; if none provided, button will not be displayed"},initialStepPath:{type:{name:"string"},required:!1,description:"Path to initial step; if not provided, the first step will be displayed"},knockoutPath:{type:{name:"string"},required:!1,description:"Path to navigate on fail of 'next'; if none provided, no default failTo will be added to 'next' button"},layout:{type:{name:"shape",value:{desktop:{name:"custom",raw:"layoutShape",required:!1},tablet:{name:"custom",raw:"layoutShape",required:!1},phoneWide:{name:"custom",raw:"layoutShape",required:!1},phone:{name:"custom",raw:"layoutShape",required:!1}}},required:!1,description:"Object to override page layout"},location:{type:{name:"shape",value:{hash:{name:"string",required:!0},key:{name:"string",required:!1},pathname:{name:"string",required:!0},search:{name:"string",required:!0},state:{name:"union",value:[{name:"array"},{name:"bool"},{name:"number"},{name:"object"},{name:"string"}],required:!1}}},required:!0,description:"Current path location, provided by react-router\nhttps://github.com/Javascript-Ninja/react-router-prop-types/blob/master/src/index.ts#L3"},onCancel:{type:{name:"union",value:[{name:"string"},{name:"func"},{name:"shape",value:{callback:{name:"string",required:!1},callbackProps:{name:"shape",value:{type:{name:"enum",value:[{value:"'action'",computed:!1}],required:!1},args:{name:"array",required:!1},progress:{name:"shape",value:{message:{name:"string",required:!1}},required:!1},success:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1},failure:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1}},required:!1}}}]},required:!1,description:"Callback to invoke when 'cancel' button is clicked; return true, false or a promise"},onFinish:{type:{name:"union",value:[{name:"string"},{name:"func"},{name:"shape",value:{callback:{name:"string",required:!1},callbackProps:{name:"shape",value:{type:{name:"enum",value:[{value:"'action'",computed:!1}],required:!1},args:{name:"array",required:!1},progress:{name:"shape",value:{message:{name:"string",required:!1}},required:!1},success:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1},failure:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1}},required:!1}}}]},required:!1,description:"Callback to invoke when 'finish' button is clicked; return true, false or a promise"},onStart:{type:{name:"union",value:[{name:"string"},{name:"func"},{name:"shape",value:{callback:{name:"string",required:!1},callbackProps:{name:"shape",value:{type:{name:"enum",value:[{value:"'action'",computed:!1}],required:!1},args:{name:"array",required:!1},progress:{name:"shape",value:{message:{name:"string",required:!1}},required:!1},success:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1},failure:{name:"shape",value:{path:{name:"string",required:!1},message:{name:"string",required:!1}},required:!1}},required:!1}}}]},required:!1,description:"Callback to trigger when Wizard mounts"},onWizardEvent:{type:{name:"func"},required:!1,description:"the function(info, eventName) called when a page loads - invoked by WizardPage"},steps:{type:{name:"array"},required:!0,description:"Array of step metadata: { key, route, component, ...}"},subRoutes:{type:{name:"array"},required:!1,description:"Array of subRoute metadata: { key, route, component, ...}",defaultValue:{value:"[]",computed:!1}},renderActionBar:{type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:"Callback to render action bar, or hide/show it",defaultValue:{value:"true",computed:!1}},renderNotFound:{type:{name:"func"},required:!1,description:"Callback to render 'not found' content; if not provided, nothing will be rendered if path is not found"},renderProgressBar:{type:{name:"union",value:[{name:"func"},{name:"bool"}]},required:!1,description:"Callback to render progress bar, or hide/show it",defaultValue:{value:"true",computed:!1}},callbackMap:{type:{name:"shape",value:{onStartWizard:{name:"func",required:!1},onFinishWizard:{name:"func",required:!1},onCancelWizard:{name:"func",required:!1}}},required:!1,description:"Callback map for resolver",defaultValue:{value:"{}",computed:!1}},history:{type:{name:"object"},required:!1,description:"React-Router history object"},match:{type:{name:"object"},required:!1,description:"React-Router match object"},staticContext:{type:{name:"object"},required:!1,description:"React-Router static context"},componentMap:{type:{name:"object"},required:!1,description:"Component map for page component resolver"}}};