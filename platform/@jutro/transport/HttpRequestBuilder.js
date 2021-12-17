import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";import{log}from"@jutro/logger";import{HttpRequest}from"./HttpRequest";import{fastOptionsMerge}from"./helper";export let REQUEST_HANDLER_TYPE;!function(REQUEST_HANDLER_TYPE){REQUEST_HANDLER_TYPE.AUTH="onAuth",REQUEST_HANDLER_TYPE.FETCH="onFetch",REQUEST_HANDLER_TYPE.ENCODE="onEncode",REQUEST_HANDLER_TYPE.ERROR="onErrorResponse",REQUEST_HANDLER_TYPE.EXCEPTION="onException",REQUEST_HANDLER_TYPE.RESPONSE="onResponse",REQUEST_HANDLER_TYPE.TRACE="onTrace"}(REQUEST_HANDLER_TYPE||(REQUEST_HANDLER_TYPE={}));const REQUEST_HANDLER_TYPE_VALUES=Object.values(REQUEST_HANDLER_TYPE);export let HttpRequestBuilder=function HttpRequestBuilder(baseUrl=""){_classCallCheck(this,HttpRequestBuilder),_defineProperty(this,"baseUrl",void 0),_defineProperty(this,"options",void 0),_defineProperty(this,"handlers",void 0),_defineProperty(this,"addOptions",(options=>(this.options.push(options),this))),_defineProperty(this,"addHandler",((event,callback)=>("string"==typeof event?REQUEST_HANDLER_TYPE_VALUES.includes(event)&&callback?this.handlers.push({[event]:callback}):log.warning(`Invalid event type "${event}" supplied to "HttpRequestBuilder.addHandler()"`):REQUEST_HANDLER_TYPE_VALUES.some((t=>event[t]))?this.handlers.push(event):log.warning('Invalid event type supplied to "HttpRequestBuilder.addHandler()"'),this))),_defineProperty(this,"build",(()=>{const options=this.options.length?this.options.reduce(((list,values)=>fastOptionsMerge(list,values))):void 0,handlers=this.handlers.length?this.handlers.reduce(((list,values)=>({...list,...values}))):void 0;return new HttpRequest(this.baseUrl,options,handlers)})),this.baseUrl=baseUrl,this.handlers=[],this.options=[]};