import{getConfigValue}from"@jutro/config";import{datadogLogs}from"@datadog/browser-logs";import loadDataDog from"../dataDog";import{subscribe}from"../EventProvider";import JUTRO_TOPICS from"../jutroTopics";export default()=>{const clientToken=getConfigValue("JUTRO_DATA_DOG_CLIENT_TOKEN"),dataDogServiceName=getConfigValue("JUTRO_DATA_DOG_SERVICE_NAME"),dataDogEnv=getConfigValue("JUTRO_DATA_DOG_ENV"),dataDogAppVersion=getConfigValue("JUTRO_DATA_DOG_APP_VERSION"),dataDogLogLevel=getConfigValue("JUTRO_DATA_DOG_FULL_LOG");if(!clientToken)return;loadDataDog(clientToken,dataDogServiceName,dataDogEnv,dataDogAppVersion);const UNKNOWN_ERROR=JUTRO_TOPICS.UNKNOWN_ERROR,FETCH_ERROR=JUTRO_TOPICS.FETCH_ERROR,FETCH_REQUEST=JUTRO_TOPICS.FETCH_REQUEST,FETCH_RESPONSE=JUTRO_TOPICS.FETCH_RESPONSE,VALUE_CHANGED=JUTRO_TOPICS.VALUE_CHANGED,FIELD_BLUR=JUTRO_TOPICS.FIELD_BLUR,BUTTON_CLICKED=JUTRO_TOPICS.BUTTON_CLICKED,LINK_CLICKED=JUTRO_TOPICS.LINK_CLICKED;subscribe([UNKNOWN_ERROR,FETCH_ERROR],((event,topic)=>{datadogLogs.logger.error(JSON.stringify(event),{sourceCategory:topic})})),subscribe([FETCH_REQUEST,FETCH_RESPONSE],((event,topic)=>{datadogLogs.logger.info(JSON.stringify(event),{sourceCategory:topic})})),dataDogLogLevel&&(subscribe([VALUE_CHANGED,FIELD_BLUR],((event,topic)=>{datadogLogs.logger.info(JSON.stringify(event),{sourceCategory:topic})})),subscribe([BUTTON_CLICKED,LINK_CLICKED],((event,topic)=>{datadogLogs.logger.info(JSON.stringify(event),{sourceCategory:topic})})))};