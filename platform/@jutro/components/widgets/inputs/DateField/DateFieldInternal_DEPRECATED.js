import _extends from"@babel/runtime-corejs3/helpers/extends";import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _assertThisInitialized from"@babel/runtime-corejs3/helpers/assertThisInitialized";import _get from"@babel/runtime-corejs3/helpers/get";import _inherits from"@babel/runtime-corejs3/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime-corejs3/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime-corejs3/helpers/getPrototypeOf";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}import React from"react";import DatePicker,{registerLocale}from"react-datepicker";import{isSameDay,isValid,isBefore,isAfter,isEqual as dateIsEqual,format as dateFormat}from"date-fns";import defaultLocaleObject from"date-fns/locale/en-US";import cx from"classnames";import isString from"lodash/isString";import isNumber from"lodash/isNumber";import isEqual from"lodash/isEqual";import isEmpty from"lodash/isEmpty";import{DATA_TYPE_OBJECT,DATA_TYPE_DATE_TIME,intlMessageShape}from"@jutro/prop-types";import{isEmptyValue}from"@jutro/data";import{mergeStyles,getMessageProp,getDatePatternFromLocale,getDateInputFormats,isDateInRange}from"@jutro/platform";import{messages}from"./DateField.messages";import datePickerStyles from"./DatePickerField.module.css";import inputStyles from"../InputField/InputField.module.css";import{FieldIcon}from"../FieldComponent/FieldIcon";import{FieldComponent}from"../FieldComponent/FieldComponent";import{CustomHeader}from"./CustomHeader";import{PopperContainer}from"./PopperContainer";import{DateValue}from"../../values/DateValue";import{maxDefaultYear,minDefaultYear,getDateFormat,getTimeFormat}from"./DateField.commons";const withoutTime=date=>new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()),minTimeOfTheDay=withoutTime(new Date),maxTimeOfTheDay=new Date;maxTimeOfTheDay.setHours(23),maxTimeOfTheDay.setMinutes(59),maxTimeOfTheDay.setSeconds(59),maxTimeOfTheDay.setMilliseconds(999);const DDMMYYYY=/^(?<d>\d{1,2})[/\-.](?<m>\d{1,2})[/\-.](?<y>\d{1,4})(?<t>.*)$/,MMDDYYYY=/^(?<m>\d{1,2})[/\-.](?<d>\d{1,2})[/\-.](?<y>\d{1,4})(?<t>.*)$/,YYYYMMDD=/^(?<y>\d{1,4})[/\-.](?<m>\d{1,2})[/\-.](?<d>\d{1,2})(?<t>.*)$/;function normalizeInput(input,datePattern){var _match$groups,_match$groups2,_match$groups3,_match$groups$t,_match$groups4;const match=input.match(function(datePattern){switch(datePattern.charAt(0).toLowerCase()){case"d":return DDMMYYYY;case"m":return MMDDYYYY;case"y":return YYYYMMDD}return DDMMYYYY}(datePattern));if(!match)return input;return`${null==match||null===(_match$groups=match.groups)||void 0===_match$groups?void 0:_match$groups.y.padEnd(4,"0")}-${null==match||null===(_match$groups2=match.groups)||void 0===_match$groups2?void 0:_match$groups2.m.padStart(2,"0")}-${null==match||null===(_match$groups3=match.groups)||void 0===_match$groups3?void 0:_match$groups3.d.padStart(2,"0")}${null!==(_match$groups$t=null==match||null===(_match$groups4=match.groups)||void 0===_match$groups4?void 0:_match$groups4.t)&&void 0!==_match$groups$t?_match$groups$t:""}`}export let DateFieldInternalDEPRECATED=function(_FieldComponent){_inherits(DateFieldInternalDEPRECATED,FieldComponent);var _super=_createSuper(DateFieldInternalDEPRECATED);function DateFieldInternalDEPRECATED(_props){var _this;_classCallCheck(this,DateFieldInternalDEPRECATED),_this=_super.call(this,_props),_defineProperty(_assertThisInitialized(_this),"state",{isValidDate:!0,isOpen:_this.props.isInitiallyOpen}),_defineProperty(_assertThisInitialized(_this),"valueToDate",(value=>{const showTime=_this.props.showTime;let dateValue=value;if(value&&isString(value)&&(dateValue=showTime?new Date(value):withoutTime(new Date(value))),value&&isNumber(value)&&(dateValue=new Date(value)),null!=value&&value.year){const year=value.year,month=value.month,day=value.day,_value$hour=value.hour,hour=void 0===_value$hour?0:_value$hour,_value$minute=value.minute,minute=void 0===_value$minute?0:_value$minute;dateValue=showTime?new Date(Date.UTC(year,month,day,hour,minute)):withoutTime(new Date(Date.UTC(year,month,day)))}return dateValue})),_defineProperty(_assertThisInitialized(_this),"formatValue",(value=>{if(!value)return;const _this$props=_this.props,dataType=_this$props.dataType;if(!_this$props.showTime){const year=value.getTimezoneOffset()<0?value.getFullYear():value.getUTCFullYear(),month=value.getTimezoneOffset()<0?value.getMonth():value.getUTCMonth(),day=value.getTimezoneOffset()<0?value.getDate():value.getUTCDate();if(dataType===DATA_TYPE_OBJECT)return{year:year,month:month,day:day};const dateString=new Date(Date.UTC(year,month,day)).toISOString();return dataType===DATA_TYPE_DATE_TIME?dateString:dateString.substr(0,10)}return dataType===DATA_TYPE_OBJECT?{year:value.getUTCFullYear(),month:value.getUTCMonth(),day:value.getUTCDate(),hour:value.getUTCHours(),minute:value.getUTCMinutes()}:(value.setSeconds(0),value.setMilliseconds(0),value.toISOString())})),_defineProperty(_assertThisInitialized(_this),"handleChange",(date=>{isEmptyValue(_this.userInput)||(date=new Date(new Date(_this.userInput).toUTCString()),_this.userInput=void 0);const _this$props2=_this.props,minDate=_this$props2.minDate,maxDate=_this$props2.maxDate,showTime=_this$props2.showTime,isEmptyDate=isEmptyValue(date),adjustedDate=_this.adjustDate(date,_this.valueToDate(minDate),_this.valueToDate(maxDate),showTime),isValidDate=isEmptyDate||isValid(adjustedDate)&&_this.isInRange(adjustedDate),value=!isEmptyDate&&isValid(adjustedDate)?adjustedDate:void 0;_this.setState({isValidDate:isValidDate}),_this.notifyChange(value?_this.formatValue(value):value)})),_defineProperty(_assertThisInitialized(_this),"handleChangeRaw",(evt=>{if(!isEmptyValue(evt.target.value)){const userInput=normalizeInput(evt.target.value,_this.localePattern),date=new Date(userInput);_this.userInput=userInput,(_this.props.showTime||Number.isNaN(date.getTime())||!_this.isInRange(date))&&_this.handleChange(date)}})),_defineProperty(_assertThisInitialized(_this),"isInRange",(date=>{const _this$props3=_this.props,minDate=_this$props3.minDate,maxDate=_this$props3.maxDate,_isDateInRange=isDateInRange(date,minDate,maxDate),fulfillMinRequirement=_isDateInRange.fulfillMinRequirement,fulfillMaxRequirement=_isDateInRange.fulfillMaxRequirement;return fulfillMinRequirement&&fulfillMaxRequirement})),_defineProperty(_assertThisInitialized(_this),"renderPopperContainer",(labelId=>props=>React.createElement(PopperContainer,_extends({},props,{labelId:labelId,parentId:_this.props.id})))),_defineProperty(_assertThisInitialized(_this),"renderCustomHeader",(props=>{const _this$props4=_this.props,minDate=_this$props4.minDate,maxDate=_this$props4.maxDate,locale=_this$props4.locale,min=minDate?_this.valueToDate(minDate).getUTCFullYear():minDefaultYear,max=maxDate?_this.valueToDate(maxDate).getUTCFullYear():maxDefaultYear;return React.createElement(CustomHeader,_extends({},props,{locale:locale,minYear:min,maxYear:max}))})),_defineProperty(_assertThisInitialized(_this),"handleOnBlur",(evt=>{_this.focusPristine=!1,_this.handleBlur(evt)})),_defineProperty(_assertThisInitialized(_this),"setFocus",(()=>{var _this$datePickerRef,_this$datePickerRef$c;null===(_this$datePickerRef=_this.datePickerRef)||void 0===_this$datePickerRef||null===(_this$datePickerRef$c=_this$datePickerRef.current)||void 0===_this$datePickerRef$c||_this$datePickerRef$c.setFocus()})),_defineProperty(_assertThisInitialized(_this),"renderTodayButton",(todayButtonText=>{const translator=_assertThisInitialized(_this).translator;return React.createElement("button",{className:datePickerStyles.todayButton,"aria-label":translator(todayButtonText||messages.today)},translator(todayButtonText||messages.today))})),_defineProperty(_assertThisInitialized(_this),"handleKeyDown",(e=>{if(_this.state.isOpen&&"Tab"===e.key&&e.target.id===_this.props.id){e.preventDefault();const selectedDay=_this.datePickerRef.current.calendar.componentNode&&_this.datePickerRef.current.calendar.componentNode.querySelector('.react-datepicker__day[tabindex="0"]');selectedDay&&selectedDay.focus({preventScroll:!0})}}));const _locale=_props.locale;return _this.datePickerRef=React.createRef(),_this.localePattern=getDatePatternFromLocale(isEmpty(_locale)?defaultLocaleObject:_locale),registerLocale(_locale.code,_locale),_this}return _createClass(DateFieldInternalDEPRECATED,[{key:"render",value:function(){return _get(_getPrototypeOf(DateFieldInternalDEPRECATED.prototype),"render",this).call(this)}},{key:"componentDidUpdate",value:function(prevProps){const prevValue=prevProps.value,prevMessages=prevProps.validationMessages,prevLocale=prevProps.locale,_this$props5=this.props,value=_this$props5.value,validationMessages=_this$props5.validationMessages,locale=_this$props5.locale;isEqual(prevValue,value)&&isEqual(prevMessages,validationMessages)||this.validate(value),isEqual(prevLocale,locale)||registerLocale(locale.code,locale)}},{key:"adjustDate",value:function(date,minDate,maxDate,showTime){return showTime?isSameDay(minDate,date)&&isAfter(minDate,date)?minDate:isSameDay(maxDate,date)&&isBefore(maxDate,date)?maxDate:date:date}},{key:"getTimeLimits",value:function(selectedDate,minDate,maxDate){const selectedDateWithoutTime=selectedDate?withoutTime(selectedDate):null,minDateWithoutTime=minDate?withoutTime(minDate):null,maxDateWithoutTime=maxDate?withoutTime(maxDate):null;let minTime;minTime=dateIsEqual(selectedDateWithoutTime,minDateWithoutTime)?minDate:isBefore(selectedDateWithoutTime,minDateWithoutTime)?maxTimeOfTheDay:minTimeOfTheDay;let maxTime=maxTimeOfTheDay;return dateIsEqual(selectedDateWithoutTime,maxDateWithoutTime)?maxTime=maxDate:isAfter(selectedDateWithoutTime,maxDateWithoutTime)&&(minTime=maxTimeOfTheDay),{minTime:minTime,maxTime:maxTime}}},{key:"getValidationMessages",value:function(){const isValidDate=this.state.isValidDate,incorrectInput=getMessageProp("incorrectInput",this.withThememessageProps,messages),validationMessages=_get(_getPrototypeOf(DateFieldInternalDEPRECATED.prototype),"getValidationMessages",this).call(this)||[];return!isValidDate&&isEmpty(validationMessages)?[this.translator(incorrectInput)]:validationMessages}},{key:"getPlaceholderOrDefault",value:function(placeholder,translator){const translatedLocalPattern=this.localePattern.replace("dd",this.translator(messages.dd)).replace("MM",this.translator(messages.mm)).replace("yyyy",this.translator(messages.yy));if(placeholder)return translator(placeholder,{format:translatedLocalPattern});const locale=this.props.locale,now=new Date,minute=now.getMinutes()>=30?30:0;now.setMinutes(minute);return`${translatedLocalPattern} ${dateFormat(now,"p",{locale:locale})}`}},{key:"renderControlReadOnly",value:function(breakpointProps){const id=breakpointProps.id,value=breakpointProps.value,showTime=breakpointProps.showTime,format=breakpointProps.format,classes=cx(datePickerStyles.datePicker,datePickerStyles.readOnly);return React.createElement(DateValue,{id:id,className:classes,value:value,format:format,showTime:showTime})}},{key:"renderControl",value:function(breakpointProps,options){const combinedStyles=mergeStyles(inputStyles,datePickerStyles),id=breakpointProps.id,disabled=breakpointProps.disabled,controlClassName=breakpointProps.controlClassName,required=breakpointProps.required,placeholder=breakpointProps.placeholder,minDate=breakpointProps.minDate,maxDate=breakpointProps.maxDate,autoComplete=breakpointProps.autoComplete,format=breakpointProps.format,showTime=breakpointProps.showTime,todayButtonText=breakpointProps.todayButtonText,popperPlacement=breakpointProps.popperPlacement,value=breakpointProps.value,intl=breakpointProps.intl,locale=breakpointProps.locale,translator=this.translator,_this$state=this.state,calendarId=_this$state.calendarId,isOpen=_this$state.isOpen,minDateWithoutTime=minDate?withoutTime(this.valueToDate(minDate)):null,maxDateWithoutTime=maxDate?withoutTime(this.valueToDate(maxDate)):null,nowWithoutTime=withoutTime(new Date),todayOutOfRange=isAfter(minDateWithoutTime,nowWithoutTime)||isBefore(maxDateWithoutTime,nowWithoutTime),inputClasses=cx({disabled:disabled,invalid:!options.isValid},combinedStyles.input,combinedStyles.datePicker,controlClassName),calendarClass=cx({todayOutOfRange:todayOutOfRange}),selectedDate=this.valueToDate(value),minDateObject=isEmptyValue(minDate)?new Date(minDefaultYear,0):this.valueToDate(minDate),maxDateObject=isEmptyValue(maxDate)?new Date(maxDefaultYear,0):this.valueToDate(maxDate),timeLimit=showTime?this.getTimeLimits(selectedDate,minDateObject,maxDateObject):{},dateFormats=[getDateFormat(format),...getDateInputFormats(this.localePattern)],inputElement=React.createElement(DatePicker,_extends({id:id,ref:this.datePickerRef,selected:"object"==typeof selectedDate&&isValid(selectedDate)?selectedDate:null,onChange:this.handleChange,onChangeRaw:this.handleChangeRaw,onKeyDown:this.handleKeyDown,onSelect:this.setFocus,todayButton:this.renderTodayButton(todayButtonText),className:inputClasses,locale:locale.code,showTimeSelect:showTime,calendarClassName:calendarClass,minDate:minDateObject,maxDate:maxDateObject,minTime:timeLimit.minTime,maxTime:timeLimit.maxTime,popperPlacement:popperPlacement,popperModifiers:{preventOverflow:{enabled:!0}},customInput:React.createElement("input",this.generateAccessibilityProperties()),dateFormat:showTime?dateFormats.map((pattern=>`${pattern}${getTimeFormat()}`)):dateFormats,timeFormat:getTimeFormat(),isClearable:!1,popperContainer:this.renderPopperContainer(options.labelId),renderCustomHeader:this.renderCustomHeader,required:required,disabled:disabled,autoComplete:autoComplete?"on":"off",placeholderText:this.getPlaceholderOrDefault(placeholder,translator,intl)},this.generateDataPathProperty(),this.generateAccessibilityProperties(intl),this.getInputFocusHandlers(),{onBlur:this.handleOnBlur,open:isOpen,onCalendarOpen:()=>this.setState({isOpen:!0}),onCalendarClose:()=>this.setState({isOpen:!1})})),icon=breakpointProps.icon,iconPosition=breakpointProps.iconPosition;return React.createElement("div",{className:combinedStyles.datePicker,"aria-expanded":"true","aria-haspopup":"true","aria-controls":calendarId},React.createElement(FieldIcon,{icon:icon,iconPosition:iconPosition,disabled:disabled},inputElement))}}]),DateFieldInternalDEPRECATED}();_defineProperty(DateFieldInternalDEPRECATED,"displayName","DateFieldInternalDEPRECATED"),DateFieldInternalDEPRECATED.__docgenInfo={description:"Allows the user to either type or select a date. Displays them according to locale settings.\n\n@extends FieldComponent<DateFieldPropsWithContexts>\n\n@metadataType field",methods:[{name:"valueToDate",docblock:"Convert the value which can be either string or object to a date object.\n\n@param {string | object} value - The string or object representation of the date\n@returns {object} - date object",modifiers:[],params:[{name:"value",description:"The string or object representation of the date",type:{name:"union",elements:[{name:"string"},{name:"object"}]},optional:!1}],returns:{description:"date object",type:{name:"object"}},description:"Convert the value which can be either string or object to a date object."},{name:"formatValue",docblock:"Convert the date object returned by the datepicker to\nthe expected format based on dataType and showTime props.\n\n@param {object} [value] - date object\n@returns {object} - string or date object, always a UTC date",modifiers:[],params:[{name:"value"}],returns:null,description:"Convert the date object returned by the datepicker to\nthe expected format based on dataType and showTime props."},{name:"adjustDate",docblock:null,modifiers:[],params:[{name:"date",type:null},{name:"minDate",type:null},{name:"maxDate",type:null},{name:"showTime",type:null}],returns:null},{name:"getTimeLimits",docblock:null,modifiers:[],params:[{name:"selectedDate",type:null},{name:"minDate",type:null},{name:"maxDate",type:null}],returns:null},{name:"handleChange",docblock:"Handles user triggered date changes\n\n@param {object} [date] the date that the value was changed to",modifiers:[],params:[{name:"date"}],returns:null,description:"Handles user triggered date changes"},{name:"handleChangeRaw",docblock:"Called with a value when the input is edited manually\n\n@param {object} [evt] - the event the triggers the change",modifiers:[],params:[{name:"evt"}],returns:null,description:"Called with a value when the input is edited manually"},{name:"isInRange",docblock:"Check if date is in range\n\n@param {object} [date] - the date to process\n@returns {boolean} `true` if date is in the specified range",modifiers:[],params:[{name:"date"}],returns:null,description:"Check if date is in range"},{name:"getValidationMessages",docblock:"Get the validation messages to display.\nIf field is 'required' and no validation message is provided, it is added\n\n@returns {Array<any>} validation messages",modifiers:[],params:[],returns:{description:"validation messages",type:{name:"Array",elements:[{name:"any"}]}},description:"Get the validation messages to display.\nIf field is 'required' and no validation message is provided, it is added"},{name:"getPlaceholderOrDefault",docblock:"Get the placeholder to display.\nIf no placeholder is provided it returns date format for locale.\n\n@param {intlMessageShape} [placeholder] placeholder provided by props\n@param {object} [translator] instance of translator for placeholder provided by props\n@returns {string} placeholder",modifiers:[],params:[{name:"placeholder"},{name:"translator"}],returns:null,description:"Get the placeholder to display.\nIf no placeholder is provided it returns date format for locale."},{name:"renderPopperContainer",docblock:"Renders wrapped calendar element\n\n@param {string} [labelId] - id of the label element assigned to this field\n@returns {Function} container component for calendar popper",modifiers:[],params:[{name:"labelId"}],returns:null,description:"Renders wrapped calendar element"},{name:"renderCustomHeader",docblock:"Renders custom header.\n\n@param {object} [props] - props for custom header\n\n@returns {React.ReactElement} - the resulting rendered header",modifiers:[],params:[{name:"props"}],returns:null,description:"Renders custom header."},{name:"handleOnBlur",docblock:"Sets focusPristine to false when input loses focus through clicking on datepicker\n\n@param {object} evt - React event wrapper",modifiers:[],params:[{name:"evt",description:"React event wrapper",type:{name:"object"},optional:!1}],returns:null,description:"Sets focusPristine to false when input loses focus through clicking on datepicker"},{name:"setFocus",docblock:"set focus on select to prevent mishandling of focus state when clicking on elements in the custom header",modifiers:[],params:[],returns:null,description:"set focus on select to prevent mishandling of focus state when clicking on elements in the custom header"},{name:"renderControlReadOnly",docblock:"Render readonly control for this component.\n@param {object} breakpointProps - breakpoint-specific props\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render readonly control for this component."},{name:"renderTodayButton",docblock:null,modifiers:[],params:[{name:"todayButtonText",type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"renderControl",docblock:"Render the control\n\n@param {object} breakpointProps - breakpoint-specific props\n@param {object} [options] - some options?\n@returns {React.ReactElement} - The resulting rendered DateField",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1},{name:"options"}],returns:null,description:"Render the control"}],displayName:"DateFieldInternalDEPRECATED"},DateFieldInternalDEPRECATED.__docgenInfo={componentName:"DateFieldInternalDEPRECATED",packageName:"@jutro/components",description:"Allows the user to either type or select a date. Displays them according to locale settings.",displayName:"DateFieldInternalDEPRECATED",methods:[{name:"valueToDate",docblock:"Convert the value which can be either string or object to a date object.\n\n@param {string | object} value - The string or object representation of the date\n@returns {object} - date object",modifiers:[],params:[{name:"value",description:"The string or object representation of the date",type:{name:"union",elements:[{name:"string"},{name:"object"}]},optional:!1}],returns:{description:"date object",type:{name:"object"}},description:"Convert the value which can be either string or object to a date object."},{name:"formatValue",docblock:"Convert the date object returned by the datepicker to\nthe expected format based on dataType and showTime props.\n\n@param {object} [value] - date object\n@returns {object} - string or date object, always a UTC date",modifiers:[],params:[{name:"value"}],returns:null,description:"Convert the date object returned by the datepicker to\nthe expected format based on dataType and showTime props."},{name:"adjustDate",docblock:null,modifiers:[],params:[{name:"date",optional:void 0,type:null},{name:"minDate",optional:void 0,type:null},{name:"maxDate",optional:void 0,type:null},{name:"showTime",optional:void 0,type:null}],returns:null},{name:"getTimeLimits",docblock:null,modifiers:[],params:[{name:"selectedDate",optional:void 0,type:null},{name:"minDate",optional:void 0,type:null},{name:"maxDate",optional:void 0,type:null}],returns:null},{name:"handleChange",docblock:"Handles user triggered date changes\n\n@param {object} [date] the date that the value was changed to",modifiers:[],params:[{name:"date"}],returns:null,description:"Handles user triggered date changes"},{name:"handleChangeRaw",docblock:"Called with a value when the input is edited manually\n\n@param {object} [evt] - the event the triggers the change",modifiers:[],params:[{name:"evt"}],returns:null,description:"Called with a value when the input is edited manually"},{name:"isInRange",docblock:"Check if date is in range\n\n@param {object} [date] - the date to process\n@returns {boolean} `true` if date is in the specified range",modifiers:[],params:[{name:"date"}],returns:null,description:"Check if date is in range"},{name:"getValidationMessages",docblock:"Get the validation messages to display.\nIf field is 'required' and no validation message is provided, it is added\n\n@returns {Array<any>} validation messages",modifiers:[],params:[],returns:{description:"validation messages",type:{name:"Array",elements:[{name:"any"}]}},description:"Get the validation messages to display.\nIf field is 'required' and no validation message is provided, it is added"},{name:"getPlaceholderOrDefault",docblock:"Get the placeholder to display.\nIf no placeholder is provided it returns date format for locale.\n\n@param {intlMessageShape} [placeholder] placeholder provided by props\n@param {object} [translator] instance of translator for placeholder provided by props\n@returns {string} placeholder",modifiers:[],params:[{name:"placeholder"},{name:"translator"}],returns:null,description:"Get the placeholder to display.\nIf no placeholder is provided it returns date format for locale."},{name:"renderPopperContainer",docblock:"Renders wrapped calendar element\n\n@param {string} [labelId] - id of the label element assigned to this field\n@returns {Function} container component for calendar popper",modifiers:[],params:[{name:"labelId"}],returns:null,description:"Renders wrapped calendar element"},{name:"renderCustomHeader",docblock:"Renders custom header.\n\n@param {object} [props] - props for custom header\n\n@returns {React.ReactElement} - the resulting rendered header",modifiers:[],params:[{name:"props"}],returns:null,description:"Renders custom header."},{name:"handleOnBlur",docblock:"Sets focusPristine to false when input loses focus through clicking on datepicker\n\n@param {object} evt - React event wrapper",modifiers:[],params:[{name:"evt",description:"React event wrapper",type:{name:"object"},optional:!1}],returns:null,description:"Sets focusPristine to false when input loses focus through clicking on datepicker"},{name:"setFocus",docblock:"set focus on select to prevent mishandling of focus state when clicking on elements in the custom header",modifiers:[],params:[],returns:null,description:"set focus on select to prevent mishandling of focus state when clicking on elements in the custom header"},{name:"renderControlReadOnly",docblock:"Render readonly control for this component.\n@param {object} breakpointProps - breakpoint-specific props\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render readonly control for this component."},{name:"renderTodayButton",docblock:null,modifiers:[],params:[{name:"todayButtonText",optional:void 0,type:null}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",optional:void 0,type:null}],returns:null},{name:"renderControl",docblock:"Render the control\n\n@param {object} breakpointProps - breakpoint-specific props\n@param {object} [options] - some options?\n@returns {React.ReactElement} - The resulting rendered DateField",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1},{name:"options"}],returns:null,description:"Render the control"}],actualName:"DateFieldInternalDEPRECATED",metadataType:"field"};