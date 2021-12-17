import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";import events from"events";import _ from"lodash";import{log}from"@jutro/logger";function mapTopics(topics,callback){return _.isString(topics)?callback(topics):_.isArray(topics)&&_.every(topics,_.isString)?topics.map(callback):_.isObject(topics)&&_.every(_.values(topics),_.isString)?_.mapValues(_.mapKeys(topics,(val=>val)),callback):void log.error("'subscribe'/'unsubscribeAll' supports only topics defined as:\n    - single string 'topic'\n    - array of strings ['topic1', 'topic2']\n    - object which values are strings {topic1: 'topic1', topic2: 'topic2'}")}export let EventProvider=function EventProvider(){_classCallCheck(this,EventProvider),_defineProperty(this,"publish",((topic,event)=>{this.emitter.emit(topic,event)})),_defineProperty(this,"subscribe",((topics,handler)=>mapTopics(topics,(topic=>{const listener=event=>handler(event,topic);return this.emitter.on(topic,listener),()=>({topic:topic,listener:listener})})))),_defineProperty(this,"unsubscribe",(handle=>{if(!_.isFunction(handle))return void log.error("'unsubscribe' supports handles returned by 'subscribe' function.");const _handle=handle(),listener=_handle.listener,topic=_handle.topic;this.emitter.removeListener(topic,listener)})),_defineProperty(this,"unsubscribeAll",(topics=>{_.isUndefined(topics)?this.emitter.removeAllListeners():mapTopics(topics,(topic=>{this.emitter.removeAllListeners(topic)}))})),this.emitter=new events.EventEmitter,this.emitter.setMaxListeners(1/0)};const EVENT_PROVIDER_KEY=Symbol("jutro.eventProvider");-1===Object.getOwnPropertySymbols(global).indexOf(EVENT_PROVIDER_KEY)&&(global[EVENT_PROVIDER_KEY]=new EventProvider);const eventProvider=global[EVENT_PROVIDER_KEY],subscribe=eventProvider.subscribe;export{subscribe};const unsubscribe=eventProvider.unsubscribe;export{unsubscribe};const unsubscribeAll=eventProvider.unsubscribeAll;export{unsubscribeAll};const publish=eventProvider.publish;export{publish};