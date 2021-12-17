import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useRef,useState,useEffect,useLayoutEffect,useContext}from"react";import PropTypes from"prop-types";import cx from"classnames";import _ from"lodash";import{TranslatorContext}from"@jutro/locale";import{intlMessageShape}from"@jutro/prop-types";import{uniqueInnerId}from"@jutro/platform";import{IconButton}from"../IconButton/IconButton";import styles from"./TabBar.module.css";export const getTabHeadingId=id=>uniqueInnerId(id,"headingElemId");const tabBarPropTypes={onHeadingClick:PropTypes.func,tabs:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string,heading:PropTypes.oneOfType([PropTypes.node,intlMessageShape]),disabled:PropTypes.bool,visible:PropTypes.bool,active:PropTypes.bool})).isRequired,className:PropTypes.string,ariaControls:PropTypes.string,label:PropTypes.string};export const TabBar=({id:id,tabs:tabs,onHeadingClick:onHeadingClick,className:className,label:label})=>{const visibleTabs=tabs.filter((({visible:visible})=>!1!==visible)),headingButtonRefs=useRef({}),nextIconRef=useRef(),prevIconRef=useRef(),tabBarRef=useRef(),tabBarContainerRef=useRef(),_useState=useState(!1),_useState2=_slicedToArray(_useState,2),isPrevArrowVisible=_useState2[0],setPrevArrowVisibility=_useState2[1],_useState3=useState(!1),_useState4=_slicedToArray(_useState3,2),isNextArrowVisible=_useState4[0],setNextArrowVisibility=_useState4[1],translator=useContext(TranslatorContext);let areTabsInMotion=!1,selectedTabId=-1;const updateNavIconsVisibilityOnResize=()=>{if(!_.isNil(tabBarRef)){setPrevArrowVisibility(!1),setNextArrowVisibility(!1);let width=0,isSelectedTabFound=!1;_.each(tabBarRef.current.children,(button=>{button.id===selectedTabId&&(width>0&&setPrevArrowVisibility(!0),tabBarRef.current.scrollTo({left:width,behavior:"smooth"}),isSelectedTabFound=!0,_.delay(updateNavIconsVisibility,500)),width+=button.offsetWidth})),isSelectedTabFound||(tabBarRef.current.scrollTo({left:0,behavior:"smooth"}),_.delay(updateNavIconsVisibility,500))}},updateNavIconsVisibility=()=>{_.isNil(tabBarRef)||(setPrevArrowVisibility(0!==tabBarRef.current.scrollLeft),tabBarContainerRef.current.offsetWidth+tabBarRef.current.scrollLeft>=getTabsWidth()?setNextArrowVisibility(!1):setNextArrowVisibility(!0))};useLayoutEffect((()=>{updateNavIconsVisibility()}),[tabBarRef.current]),useEffect((()=>{const handleWindowResize=()=>{_.delay(updateNavIconsVisibilityOnResize,300)};return window.addEventListener("resize",handleWindowResize),()=>{window.removeEventListener("resize",handleWindowResize)}}),[updateNavIconsVisibilityOnResize]);const moveTabs=action=>{areTabsInMotion||(areTabsInMotion=!0,moveTabsContinue(action))},showPrevTabs=()=>{moveTabs("prev")},showNextTabs=()=>{moveTabs("next")};useEffect((()=>{_.isNil(tabBarContainerRef)||updateNavIconsVisibility()}),[visibleTabs.length]);const renderBarHeadings=(headings=[],collapsible=!1)=>headings.map((({className:headingClassName,id:headingId,...otherProps},i)=>(props=>{const headingClassName=props.className,heading=props.heading,headingId=props.id,disabled=props.disabled,onClick=props.onClick,onKeyDown=props.onKeyDown,active=props.active,collapsible=props.collapsible,onFocus=props.onFocus,onWheel=props.onWheel,ref=props.ref,headingClasses=cx(headingClassName,{active:active}),headingElemId=getTabHeadingId(headingId).headingElemId;return active&&(selectedTabId=headingElemId),React.createElement("button",{type:"button",className:headingClasses,onClick:onClick,onKeyDown:onKeyDown,onWheel:onWheel,onFocus:onFocus,id:headingElemId,"data-tab":headingId,key:headingId,disabled:disabled,role:"tab","aria-controls":headingId,"aria-selected":active,"data-collapsible":collapsible,tabIndex:active?0:-1,ref:ref},heading)})({...otherProps,id:headingId,className:[styles.heading,headingClassName],onKeyDown:e=>{const prevHeadingIdx=0===i?headings.length-1:i-1,nextHeadingIdx=i===headings.length-1?0:i+1;return((event,prevTab,nextTab)=>{let newTab=null;switch(event.key){case"ArrowLeft":newTab=headingButtonRefs.current[prevTab];break;case"ArrowRight":newTab=headingButtonRefs.current[nextTab];break;default:return}event.preventDefault(),newTab.focus(),newTab.click(),updateNavIconsVisibility()})(e,headings[prevHeadingIdx].id,headings[nextHeadingIdx].id)},onWheel:()=>updateNavIconsVisibility(),collapsible:collapsible,ref:ref=>{headingButtonRefs.current[headingId]=ref}}))),moveTabsContinue=action=>{const leftWidthOfNextTab=(action=>{if(!_.isNil(tabBarRef)){let tabWidthCounter=0,leftWidthOfNextTab=0;return"next"===action&&_.each(tabBarRef.current.children,(button=>{tabWidthCounter+=button.offsetWidth,tabWidthCounter>=tabBarRef.current.scrollLeft&&tabWidthCounter<=tabBarRef.current.scrollLeft+tabBarContainerRef.current.offsetWidth&&(leftWidthOfNextTab=tabWidthCounter-button.offsetWidth)})),"prev"===action&&_.forEachRight(tabBarRef.current.children,(button=>{tabWidthCounter+=button.offsetWidth,tabBarContainerRef.current.offsetWidth>tabBarRef.current.scrollLeft&&(leftWidthOfNextTab=0),tabWidthCounter<tabBarContainerRef.current.offsetWidth&&(leftWidthOfNextTab=tabBarRef.current.scrollLeft-(tabWidthCounter-button.offsetWidth))})),leftWidthOfNextTab}})(action);setPrevArrowVisibility(0!==leftWidthOfNextTab),tabBarRef.current.scrollTo({left:leftWidthOfNextTab,behavior:"smooth"}),tabBarContainerRef.current.offsetWidth+leftWidthOfNextTab>getTabsWidth()?setNextArrowVisibility(!1):setNextArrowVisibility(!0),areTabsInMotion=!1},getTabsWidth=()=>_.reduce(tabBarRef.current.children,((width,button)=>width+button.offsetWidth),0),translateHeader=heading=>_.isString(heading)||_.isObject(heading)?translator(heading):heading,headings=visibleTabs.map((({heading:heading,...otherProps})=>({heading:translateHeader(heading),onClick:onHeadingClick,...otherProps}))),tabBarClasses=cx(styles.tabBarContainer,className);return React.createElement("div",{ref:tabBarContainerRef,id:"tabBarContainer",className:tabBarClasses},isPrevArrowVisible&&React.createElement("div",{ref:prevIconRef,id:"prevTab",className:cx(styles.prevIcon,className)},React.createElement(IconButton,{disabled:!1,icon:"gw-chevron-left",path:"iconbutton",className:cx(styles.prevIconButton,className),value:null,onClick:showPrevTabs,tabIndex:-1})),React.createElement("div",{id:id,ref:tabBarRef,className:cx(styles.tabBar,className),role:"tablist","aria-label":label},renderBarHeadings(headings)),isNextArrowVisible&&React.createElement("div",{ref:nextIconRef,id:"nextTab",className:cx(styles.nextIcon,className)},React.createElement(IconButton,{disabled:!1,icon:"gw-chevron-right",path:"iconbutton",className:cx(styles.nextIconButton,className),value:null,onClick:showNextTabs,tabIndex:-1})))};TabBar.propTypes=tabBarPropTypes,TabBar.__docgenInfo={description:"TabBar\n@type {React.FC<PropTypes.InferProps<typeof tabBarPropTypes>>}",methods:[],displayName:"TabBar",props:{onHeadingClick:{type:{name:"func"},required:!1,description:"Callback for clicking on bar items"},tabs:{type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},heading:{name:"union",value:[{name:"node"},{name:"custom",raw:"intlMessageShape"}],required:!1},disabled:{name:"bool",required:!1},visible:{name:"bool",required:!1},active:{name:"bool",required:!1}}}},required:!0,description:"A set of tabs rendering metadata"},className:{type:{name:"string"},required:!1,description:"Optional class name to apply to this component"},ariaControls:{type:{name:"string"},required:!1,description:"Identifier of the region displaying selected tab's content"},label:{type:{name:"string"},required:!1,description:"Optional label describing the purpose of the tablist"}}},TabBar.__docgenInfo={componentName:"TabBar",packageName:"@jutro/components",description:"TabBar",displayName:"TabBar",methods:[],actualName:"TabBar",props:{onHeadingClick:{type:{name:"func"},required:!1,description:"Callback for clicking on bar items"},tabs:{type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},heading:{name:"union",value:[{name:"node"},{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]}],required:!1},disabled:{name:"bool",required:!1},visible:{name:"bool",required:!1},active:{name:"bool",required:!1}}}},required:!0,description:"A set of tabs rendering metadata"},className:{type:{name:"string"},required:!1,description:"Optional class name to apply to this component"},ariaControls:{type:{name:"string"},required:!1,description:"Identifier of the region displaying selected tab's content"},label:{type:{name:"string"},required:!1,description:"Optional label describing the purpose of the tablist"}}};