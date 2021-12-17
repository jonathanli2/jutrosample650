import _extends from"@babel/runtime-corejs3/helpers/extends";import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _assertThisInitialized from"@babel/runtime-corejs3/helpers/assertThisInitialized";import _get from"@babel/runtime-corejs3/helpers/get";import _inherits from"@babel/runtime-corejs3/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime-corejs3/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime-corejs3/helpers/getPrototypeOf";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}import React from"react";import PropTypes from"prop-types";import cx from"classnames";import{deprecated}from"@jutro/prop-types";import{getValueForInput}from"@jutro/data";import isUndefined from"lodash/isUndefined";import{FieldComponent}from"../FieldComponent/FieldComponent";import styles from"./InputField.module.css";import{FieldIcon}from"../FieldComponent/FieldIcon";import{getKeyPressHandler}from"../../../accessibility/getKeyPressHandler";export let InputField=function(_FieldComponent){_inherits(InputField,FieldComponent);var _super=_createSuper(InputField);function InputField(..._args){var _this;return _classCallCheck(this,InputField),_this=_super.call(this,..._args),_defineProperty(_assertThisInitialized(_this),"handleClick",getKeyPressHandler(((...args)=>{const onEnter=_this.props.onEnter;onEnter&&onEnter(...args)}),["Enter"])),_this}return _createClass(InputField,[{key:"getValidationConfig",value:function(){return _get(_getPrototypeOf(InputField.prototype),"getValidationConfig",this).call(this,{propsList:["pattern"]})}},{key:"render",value:function(){return _get(_getPrototypeOf(InputField.prototype),"render",this).call(this)}},{key:"renderControl",value:function(breakpointProps,options){const value=breakpointProps.value,maxLength=breakpointProps.maxLength,disabled=breakpointProps.disabled,editable=breakpointProps.editable,controlClassName=breakpointProps.controlClassName,required=breakpointProps.required,autoComplete=breakpointProps.autoComplete,inputType=breakpointProps.inputType,id=breakpointProps.id,testId=breakpointProps.testId,name=breakpointProps.name,focusHandlers=this.getInputFocusHandlers(),fieldUniqueId=this.fieldUniqueId,icon=breakpointProps.icon,iconPosition=breakpointProps.iconPosition,registerValidation=breakpointProps.registerValidation,validationMessages=this.getValidationMessages(value),messageStyle=this.getValidationMessageStyle(validationMessages),inputStyle=cx(styles.input,{disabled:disabled,[messageStyle]:!options.isValid},!isUndefined(registerValidation)&&!options.isValid&&styles.labpreviewBorder,controlClassName),componentAutoComplete=null==autoComplete||autoComplete,inputName=!name&&id&&componentAutoComplete?id:name,inputAutoComplete=name||componentAutoComplete?"on":"off";return React.createElement(FieldIcon,{icon:icon,iconPosition:iconPosition,disabled:disabled},React.createElement("input",_extends({id:fieldUniqueId,type:inputType,className:inputStyle,maxLength:maxLength,value:getValueForInput(inputType,value),onChange:this.handleChange,onKeyPress:this.handleClick},focusHandlers,{"aria-disabled":!editable,disabled:disabled,readOnly:!editable,"aria-readonly":!editable,required:required,autoComplete:inputAutoComplete,name:inputName},this.generateDataPathProperty(),this.generateAccessibilityProperties(),{"data-testid":testId||id})))}}]),InputField}();_defineProperty(InputField,"propTypes",{...FieldComponent.propTypes,value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),defaultValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),autoComplete:deprecated(PropTypes.bool,"7.0.0","Use name instead, if name provided, native autocomplete will be switched on"),maxLength:PropTypes.number,...FieldIcon.propTypes,onEnter:PropTypes.func,editable:PropTypes.bool,name:PropTypes.string,pattern:PropTypes.oneOfType([PropTypes.oneOf(["email","alphanumeric","lowercase","uppercase","url"]),PropTypes.string])}),_defineProperty(InputField,"defaultProps",{...FieldComponent.defaultProps,editable:!0}),_defineProperty(InputField,"contextType",FieldComponent.contextType),InputField.__docgenInfo={description:"Renders an input element.\n@typedef {typeof InputField.propTypes} InputFieldPropTypes\n@extends FieldComponent<PropTypes.InferProps<InputFieldPropTypes>>\n@extends FieldIcon<PropTypes.InferProps<IconPropTypes>>\n\n@metadataType field",methods:[{name:"getValidationConfig",docblock:null,modifiers:[],params:[],returns:null},{name:"renderControl",docblock:"Render control for this component.\n\n@param {object} breakpointProps - breakpoint-specific props\n@param {object} options - rendering options (like 'isInvalid', 'isValid', etc)\n\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1},{name:"options",description:"rendering options (like 'isInvalid', 'isValid', etc)",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render control for this component."}],displayName:"InputField",props:{editable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"If set to false the input field is read-only but user can tab to it, highlight it, and copy the text from it"},value:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"String or number passed as value"},defaultValue:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"Default value"},autoComplete:{type:{name:"custom",raw:"deprecated(\n    PropTypes.bool,\n    '7.0.0',\n    'Use name instead, if name provided, native autocomplete will be switched on'\n)"},required:!1,description:"HTML5 native autoComplete support"},maxLength:{type:{name:"number"},required:!1,description:"Max length for the input field"},onEnter:{type:{name:"func"},required:!1,description:"Callback to call on enter key press"},name:{type:{name:"string"},required:!1,description:"This name will be passed to input name attribute and switched on autocomplete, if prop is not set name attribute is set to id on default and autocomplete is off"},pattern:{type:{name:"union",value:[{name:"enum",value:[{value:"'email'",computed:!1},{value:"'alphanumeric'",computed:!1},{value:"'lowercase'",computed:!1},{value:"'uppercase'",computed:!1},{value:"'url'",computed:!1}]},{name:"string"}]},required:!1,description:"A pattern that must be followed for validation purposed. (This can only be used with @jutro/validation)\nUse some of the available presets or define your own regex pattern to test against."}},composes:["../FieldComponent/FieldComponent","../FieldComponent/FieldIcon"]},InputField.__docgenInfo={componentName:"InputField",packageName:"@jutro/components",description:"Renders an input element.",displayName:"InputField",methods:[{name:"getValidationConfig",docblock:null,modifiers:[],params:[],returns:null},{name:"renderControl",docblock:"Render control for this component.\n\n@param {object} breakpointProps - breakpoint-specific props\n@param {object} options - rendering options (like 'isInvalid', 'isValid', etc)\n\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1},{name:"options",description:"rendering options (like 'isInvalid', 'isValid', etc)",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render control for this component."}],actualName:"InputField",metadataType:"field",props:{value:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"String or number passed as value"},defaultValue:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"Default value"},autoComplete:{type:{name:"bool"},required:!1,description:"@deprecated HTML5 native autoComplete support",deprecationInfo:{version:"7.0.0",mapTo:null}},maxLength:{type:{name:"number"},required:!1,description:"Max length for the input field"},onEnter:{type:{name:"func"},required:!1,description:"Callback to call on enter key press"},editable:{type:{name:"bool"},required:!1,description:"If set to false the input field is read-only but user can tab to it, highlight it, and copy the text from it",defaultValue:{value:"true",computed:!1}},name:{type:{name:"string"},required:!1,description:"This name will be passed to input name attribute and switched on autocomplete, if prop is not set name attribute is set to id on default and autocomplete is off"},pattern:{type:{name:"union",value:[{name:"enum",value:[{value:"'email'",computed:!1},{value:"'alphanumeric'",computed:!1},{value:"'lowercase'",computed:!1},{value:"'uppercase'",computed:!1},{value:"'url'",computed:!1}]},{name:"string"}]},required:!1,description:"A pattern that must be followed for validation purposed. (This can only be used with @jutro/validation)\nUse some of the available presets or define your own regex pattern to test against."}},composes:["../FieldComponent/FieldComponent","../FieldComponent/FieldIcon"]};