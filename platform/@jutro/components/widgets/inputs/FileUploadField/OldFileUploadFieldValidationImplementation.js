import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _get from"@babel/runtime-corejs3/helpers/get";import _inherits from"@babel/runtime-corejs3/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime-corejs3/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime-corejs3/helpers/getPrototypeOf";function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}import{getMessageProp}from"@jutro/platform";import{messages}from"./FileUploadField.messages";import{OldFieldComponentValidationImplementation}from"../FieldComponent/OldFieldComponentValidationImplementation";import*as mimeTypes from"./mimeTypes";export let OldFileUploadFieldValidationImplementation=function(_OldFieldComponentVal){_inherits(OldFileUploadFieldValidationImplementation,OldFieldComponentValidationImplementation);var _super=_createSuper(OldFileUploadFieldValidationImplementation);function OldFileUploadFieldValidationImplementation(){return _classCallCheck(this,OldFileUploadFieldValidationImplementation),_super.apply(this,arguments)}return _createClass(OldFileUploadFieldValidationImplementation,[{key:"bind",value:function(entityToBind){const superBoundMethods=_get(_getPrototypeOf(OldFileUploadFieldValidationImplementation.prototype),"bind",this).call(this,entityToBind);return["getFileName","getValidationMessages","handleChange","handleClearFile"].reduce(((acc,method)=>({...acc,[method]:this[method].bind(entityToBind)})),superBoundMethods)}},{key:"componentDidUpdate",value:function(prevProps,prevState){const prevErrorMessageState=prevState.errorMessage,errorMessageState=this.state.errorMessage;this.handleErrorStateChange(prevErrorMessageState,errorMessageState),_get(_getPrototypeOf(OldFileUploadFieldValidationImplementation.prototype),"componentDidUpdate",this).call(this,prevProps,prevState)}},{key:"handleChange",value:function(evt){const _this$props=this.props,maxLength=_this$props.maxLength,onUpload=_this$props.onUpload,accept=_this$props.accept,messageProps=_this$props.messageProps,maxFileSizeKB=_this$props.maxFileSizeKB;this.pristine=!1,this.focusPristine=!1;const path=evt.target.value||evt.dataTransfer.files[0].name,file=evt.dataTransfer?evt.dataTransfer.files[0]:evt.target.files[0];evt.target.value=null;const incorrectFileTypeMessage=getMessageProp("incorrectFileTypeMessage",messageProps,messages),maxFileSizeKBMessage=getMessageProp("maxFileSizeKBMessage",messageProps,messages),maxLengthMessage=getMessageProp("maxLengthMessage",messageProps,messages);let errorMessage;if(maxLength&&file&&file.name.length>maxLength&&(errorMessage=this.translator(maxLengthMessage,{nameLength:maxLength})),accept&&file){accept.toLowerCase().split(",").map((item=>item.trim())).some(mimeTypes.isMatches(file))||(errorMessage=this.translator(incorrectFileTypeMessage))}maxFileSizeKB&&file&&file.size>1e3*maxFileSizeKB&&(errorMessage=this.translator(maxFileSizeKBMessage,{fileSizeKB:maxFileSizeKB,fileSize:1e3*maxFileSizeKB})),this.setState({errorMessage:errorMessage}),this.notifyChange(path),onUpload&&file&&!errorMessage&&onUpload(file)}},{key:"getValidationMessages",value:function(progressErrorMessage,isFileValidationMessage){if(this.props.value&&!isFileValidationMessage)return[];const errorMessage=this.state.errorMessage;return errorMessage?progressErrorMessage||[errorMessage]:progressErrorMessage||_get(_getPrototypeOf(OldFileUploadFieldValidationImplementation.prototype),"getValidationMessages",this).call(this)}},{key:"handleClearFile",value:function(){this.state.errorMessage&&this.setState({errorMessage:void 0}),this.notifyChange(void 0)}},{key:"getFileName",value:function(value){var _value$split;return null==value||null===(_value$split=value.split)||void 0===_value$split?void 0:_value$split.call(value,/[/\\]/).pop()}}]),OldFileUploadFieldValidationImplementation}();