module.exports=function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="./src/index.js")}({"../../node_modules/process/browser.js":function(module,exports){var cachedSetTimeout,cachedClearTimeout,process=module.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(fun){if(cachedSetTimeout===setTimeout)return setTimeout(fun,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(fun,0);try{return cachedSetTimeout(fun,0)}catch(e){try{return cachedSetTimeout.call(null,fun,0)}catch(e){return cachedSetTimeout.call(this,fun,0)}}}!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var currentQueue,queue=[],draining=!1,queueIndex=-1;function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var timeout=runTimeout(cleanUpNextTick);draining=!0;for(var len=queue.length;len;){for(currentQueue=queue,queue=[];++queueIndex<len;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,len=queue.length}currentQueue=null,draining=!1,function(marker){if(cachedClearTimeout===clearTimeout)return clearTimeout(marker);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(marker);try{cachedClearTimeout(marker)}catch(e){try{return cachedClearTimeout.call(null,marker)}catch(e){return cachedClearTimeout.call(this,marker)}}}(timeout)}}function Item(fun,array){this.fun=fun,this.array=array}function noop(){}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)args[i-1]=arguments[i];queue.push(new Item(fun,args)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.prependListener=noop,process.prependOnceListener=noop,process.listeners=function(name){return[]},process.binding=function(name){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(dir){throw new Error("process.chdir is not supported")},process.umask=function(){return 0}},"./src/index.js":function(module,exports,__webpack_require__){"use strict";(function(process){var _interopRequireDefault=__webpack_require__("@babel/runtime-corejs3/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.stateDecoratorFactory=exports.isVisible=exports.mapValuesToOptions=exports.isValueOption=exports.resolveGoogleMapsApiKey=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("@babel/runtime-corejs3/helpers/slicedToArray")),_map=_interopRequireDefault(__webpack_require__("@babel/runtime-corejs3/core-js-stable/instance/map")),_react=__webpack_require__("react"),_isString=_interopRequireDefault(__webpack_require__("lodash/fp/isString"));exports.resolveGoogleMapsApiKey=function(){return process.env.STORYBOOK_GOOGLE_MAPS_API_KEY};var isValueOption=function(value){return!(0,_isString.default)(value)&&((null==value?void 0:value.code)&&(null==value?void 0:value.name)||(null==value?void 0:value.id)&&(null==value?void 0:value.displayName))};exports.isValueOption=isValueOption;exports.mapValuesToOptions=function(values){return values.every(isValueOption)&&values||(0,_map.default)(values).call(values,(function(value){return{code:value.toLowerCase(),name:value}}))};exports.isVisible=function(){var condition=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!condition&&void 0};exports.stateDecoratorFactory=function(valueName,callbackName){return function(story,_ref){var args=_ref.args,argsValue=args[valueName],_useState=(0,_react.useState)(argsValue),_useState2=(0,_slicedToArray2.default)(_useState,2),value=_useState2[0],setValue=_useState2[1],isFirstRun=(0,_react.useRef)(!0);return(0,_react.useEffect)((function(){isFirstRun.current?isFirstRun.current=!1:setValue(argsValue)}),[argsValue]),(0,_react.cloneElement)(story(),{[valueName]:value,[callbackName]:function(newValue){setValue(newValue),args[callbackName](newValue)}})}}}).call(this,__webpack_require__("../../node_modules/process/browser.js"))},"@babel/runtime-corejs3/core-js-stable/instance/map":function(module,exports){module.exports=require("@babel/runtime-corejs3/core-js-stable/instance/map")},"@babel/runtime-corejs3/helpers/interopRequireDefault":function(module,exports){module.exports=require("@babel/runtime-corejs3/helpers/interopRequireDefault")},"@babel/runtime-corejs3/helpers/slicedToArray":function(module,exports){module.exports=require("@babel/runtime-corejs3/helpers/slicedToArray")},"lodash/fp/isString":function(module,exports){module.exports=require("lodash/fp/isString")},react:function(module,exports){module.exports=require("react")}});
//# sourceMappingURL=index.js.map