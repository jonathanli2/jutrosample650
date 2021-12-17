import{getMessageProp}from"@jutro/platform";import{TranslatorContext,LocaleContext}from"@jutro/locale";import{Flex}from"@jutro/layout";import React,{useContext}from"react";import cx from"classnames";import prettyBytes from"pretty-bytes";import{IconButton}from"../../IconButton/IconButton";import{Card}from"../../card/Card";import{SimpleProgressBar}from"../../ProgressIndicator/SimpleProgress/SimpleProgressBar";import styles from"./UploadingProgress.module.css";import{messages}from"./UploadingProgress.messages";export const UploadingProgress=props=>{const id=props.id,filename=props.filename,completed=props.completed,total=props.total,state=props.state,messageProps=props.messageProps,errorMessage=props.errorMessage,onActionClick=props.onActionClick,onActionKeyDown=props.onActionKeyDown,translator=useContext(TranslatorContext),locale=useContext(LocaleContext).locale,progressBarClasses=cx({[styles.cancelled]:"cancelled"===state,[styles.failed]:"failed"===state,[styles.done]:"completed"===state}),actionIcon="selection"===state||"cancelled"===state?"gw-delete":"gw-close";return React.createElement(Card,{className:styles.card,id:`${id}_progress_card`},React.createElement("div",{className:styles.container},React.createElement("div",{className:styles.progressWrapper},React.createElement(Flex,{justifyContent:"between"},React.createElement("span",null,filename),React.createElement("span",null,(()=>{switch(state){case"failed":return translator(getMessageProp("uploadFailedMessage",messageProps,messages));case"cancelled":return translator(getMessageProp("uploadCancelledMessage",messageProps,messages));case"completed":return translator(getMessageProp("uploadCompletedMessage",messageProps,messages));case"progress":return translator(getMessageProp("uploadProgressMessage",messageProps,messages),{completed:prettyBytes(completed,{locale:locale}),total:prettyBytes(total,{locale:locale})});case"selection":default:return translator(getMessageProp("uploadSelectedMessage",messageProps,messages))}})())),React.createElement(SimpleProgressBar,{stepClassName:progressBarClasses,id:`${id}_progress_bar`,showProgressLabel:!1,total:total,completed:completed})),React.createElement(IconButton,{className:styles.actionButton,icon:actionIcon,iconColor:"neutral",onClick:onActionClick,onKeyDown:onActionKeyDown})),React.createElement("span",{className:styles.error},translator(errorMessage)))};UploadingProgress.defaultProps={completed:0,total:1},UploadingProgress.__docgenInfo={description:"",methods:[],displayName:"UploadingProgress",props:{completed:{defaultValue:{value:"0",computed:!1},required:!1},total:{defaultValue:{value:"1",computed:!1},required:!1}}},UploadingProgress.__docgenInfo={componentName:"UploadingProgress",packageName:"@jutro/components",description:"",displayName:"UploadingProgress",methods:[],actualName:"UploadingProgress",props:{completed:{defaultValue:{value:"0",computed:!1},required:!1},total:{defaultValue:{value:"1",computed:!1},required:!1}}};