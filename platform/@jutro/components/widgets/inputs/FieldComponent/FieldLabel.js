import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _inherits from"@babel/runtime-corejs3/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime-corejs3/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime-corejs3/helpers/getPrototypeOf";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}import React,{PureComponent}from"react";import PropTypes from"prop-types";import cx from"classnames";import{intlMessageShape}from"@jutro/prop-types";import{getMessageProp}from"@jutro/platform";import styles from"./FieldLabel.module.css";import{messages}from"./FieldComponent.messages";export let FieldLabel=function(_PureComponent){_inherits(FieldLabel,PureComponent);var _super=_createSuper(FieldLabel);function FieldLabel(){return _classCallCheck(this,FieldLabel),_super.apply(this,arguments)}return _createClass(FieldLabel,[{key:"createLabel",value:function(label,classes,translator){const translatedLabel=label&&translator(label),labelElement="string"==typeof translatedLabel?translatedLabel.trim():translatedLabel;return labelElement&&React.createElement("span",{className:classes},labelElement)}},{key:"renderLabel",value:function(){const _this$props=this.props,translator=_this$props.translator,messageProps=_this$props.messageProps,_this$props2=this.props,id=_this$props2.id,label=_this$props2.label,required=_this$props2.required,readOnly=_this$props2.readOnly,disabled=_this$props2.disabled,hideLabel=_this$props2.hideLabel,showOptional=_this$props2.showOptional,showRequired=_this$props2.showRequired,className=_this$props2.className,labelClassName=_this$props2.labelClassName,secondaryLabelClassName=_this$props2.secondaryLabelClassName,tooltipIcon=_this$props2.tooltipIcon,secondaryLabel=_this$props2.secondaryLabel,htmlFor=_this$props2.htmlFor,labelPosition=_this$props2.labelPosition,showInlineLabel=_this$props2.showInlineLabel,labelContainerClassName=_this$props2.labelContainerClassName,translatedLabel=this.createLabel(label,cx(styles.primaryLabel,labelClassName),translator),translatedSecondaryLabel=this.createLabel(secondaryLabel,cx(styles.secondaryLabel,secondaryLabelClassName),translator),optional=getMessageProp("optional",messageProps,messages),optionalIndicator=showOptional&&!required&&!readOnly&&this.createLabel(optional,styles.optional,translator),requiredIndicator=showRequired&&required&&!readOnly&&!disabled&&React.createElement("span",{"aria-hidden":"true",className:cx(styles.requiredSymbol)},"*"),labelContainerClasses=cx(styles.fieldLabelContainer,labelContainerClassName,{[styles[labelPosition]]:!showInlineLabel,[styles.hidden]:hideLabel}),labelClasses=cx(styles.fieldLabel,{[styles.readOnly]:readOnly},className);return React.createElement("div",{className:labelContainerClasses},React.createElement("label",{id:id,className:labelClasses,htmlFor:htmlFor,"data-testid":"field-component-label"},requiredIndicator,translatedLabel,optionalIndicator,tooltipIcon),translatedSecondaryLabel)}},{key:"render",value:function(){return this.renderLabel()}}]),FieldLabel}();_defineProperty(FieldLabel,"propTypes",{id:PropTypes.string,htmlFor:PropTypes.string.isRequired,label:PropTypes.oneOfType([PropTypes.string,PropTypes.object]),secondaryLabel:intlMessageShape,required:PropTypes.bool,readOnly:PropTypes.bool,hideLabel:PropTypes.bool,className:PropTypes.string,labelClassName:PropTypes.string,secondaryLabelClassName:PropTypes.string,showOptional:PropTypes.bool,showRequired:PropTypes.bool,tooltipIcon:PropTypes.node,translator:PropTypes.func.isRequired,messageProps:PropTypes.shape({optional:intlMessageShape}),labelPosition:PropTypes.oneOf(["top","left","right"]),labelContainerClassName:PropTypes.string}),_defineProperty(FieldLabel,"defaultProps",{labelPosition:"top"}),FieldLabel.__docgenInfo={description:"Class renders label for `FieldComponent`.",methods:[{name:"createLabel",docblock:null,modifiers:[],params:[{name:"label",type:null},{name:"classes",type:null},{name:"translator",type:null}],returns:null},{name:"renderLabel",docblock:"Renders component\n\n@returns {React.ReactElement}",modifiers:[],params:[],returns:{description:null,type:{name:"React.ReactElement"}},description:"Renders component"}],displayName:"FieldLabel",props:{labelPosition:{defaultValue:{value:"'top'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1,description:"Allows to select label position"},id:{type:{name:"string"},required:!1,description:"Used to identify the component. Significant for components with more complex structures, where aria-labelledby property needs to be used"},htmlFor:{type:{name:"string"},required:!0,description:"Used to identify the component. Applied to control and referenced by label"},label:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Text to display; if not provided, uses the value of the '[id]' prop"},secondaryLabel:{type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Text for secondary label"},required:{type:{name:"bool"},required:!1,description:"If true, this field is required"},readOnly:{type:{name:"bool"},required:!1,description:"If true, this field is readonly?"},hideLabel:{type:{name:"bool"},required:!1,description:"If true, the label is not visible"},className:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to the component"},labelClassName:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to primary label"},secondaryLabelClassName:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to secondary label"},showOptional:{type:{name:"bool"},required:!1,description:"If true, displays the `Optional` span"},showRequired:{type:{name:"bool"},required:!1,description:"If true, displays the required asterisc next to the label"},tooltipIcon:{type:{name:"node"},required:!1,description:'The icon to use in the tooltip. Use Material icon keyword, like "calendar" without any prefix'},translator:{type:{name:"func"},required:!0,description:"The function used to translate strings"},messageProps:{type:{name:"shape",value:{optional:{name:"custom",raw:"intlMessageShape",description:"Optional message",required:!1}}},required:!1,description:"Message props(error message/aria-label)"},labelContainerClassName:{type:{name:"string"},required:!1,description:"Additional style to apply to the label container of the component"}}},FieldLabel.__docgenInfo={componentName:"FieldLabel",packageName:"@jutro/components",description:"Class renders label for `FieldComponent`.",displayName:"FieldLabel",methods:[{name:"createLabel",docblock:null,modifiers:[],params:[{name:"label",optional:void 0,type:null},{name:"classes",optional:void 0,type:null},{name:"translator",optional:void 0,type:null}],returns:null},{name:"renderLabel",docblock:"Renders component\n\n@returns {React.ReactElement}",modifiers:[],params:[],returns:{description:null,type:{name:"React.ReactElement"}},description:"Renders component"}],actualName:"FieldLabel",props:{id:{type:{name:"string"},required:!1,description:"Used to identify the component. Significant for components with more complex structures, where aria-labelledby property needs to be used"},htmlFor:{type:{name:"string"},required:!0,description:"Used to identify the component. Applied to control and referenced by label"},label:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Text to display; if not provided, uses the value of the '[id]' prop"},secondaryLabel:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Text for secondary label"},required:{type:{name:"bool"},required:!1,description:"If true, this field is required"},readOnly:{type:{name:"bool"},required:!1,description:"If true, this field is readonly?"},hideLabel:{type:{name:"bool"},required:!1,description:"If true, the label is not visible"},className:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to the component"},labelClassName:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to primary label"},secondaryLabelClassName:{type:{name:"string"},required:!1,description:"CSS class, provides an additional style to apply to secondary label"},showOptional:{type:{name:"bool"},required:!1,description:"If true, displays the `Optional` span"},showRequired:{type:{name:"bool"},required:!1,description:"If true, displays the required asterisc next to the label"},tooltipIcon:{type:{name:"node"},required:!1,description:'The icon to use in the tooltip. Use Material icon keyword, like "calendar" without any prefix'},translator:{type:{name:"func"},required:!0,description:"The function used to translate strings"},messageProps:{type:{name:"shape",value:{optional:{name:"union",description:"Optional message",required:!1,value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]}}},required:!1,description:"Message props(error message/aria-label)"},labelPosition:{type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1,description:"Allows to select label position",defaultValue:{value:"'top'",computed:!1}},labelContainerClassName:{type:{name:"string"},required:!1,description:"Additional style to apply to the label container of the component"}}};