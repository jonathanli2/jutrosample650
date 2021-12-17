import{VARIABLE_FORMAT_REGEX,_ITEM_CHILDREN_}from"@jutro/uimetadata";import isArray from"lodash/isArray";import isNil from"lodash/isNil";import isString from"lodash/isString";import keys from"lodash/keys";import escapeRegExp from"lodash/escapeRegExp";const DYNAMIC_INDEX_WRAPPER=escapeRegExp("$DYNAMIC$");export const DYNAMIC_INDEX_REGEX=new RegExp(`${DYNAMIC_INDEX_WRAPPER}_(\\d)_${DYNAMIC_INDEX_WRAPPER}`);export const wrapDynamicIndex=index=>DYNAMIC_INDEX_REGEX.toString().replace(/\(\\d\)/g,index).replace(/(\/|\\)/g,"");function insert(map,key,value){if(map[key]){const newValue=isArray(value)?[...map[key],...value]:[...map[key],value];return{...map,[key]:newValue}}const newValue=isArray(value)?value:[value];return{...map,[key]:newValue}}function getMappings(variables,updatePath){return variables.reduce(((mappings,variable)=>insert(mappings,variable.substr(1,variable.length-2),updatePath)),{})}function combineMaps(...maps){return maps.reduce(((result,mapEntry)=>Object.entries(mapEntry).reduce(((mergedMap,[key,value])=>insert(mergedMap,key,value)),result)),{})}function formatBasePath(basePath,index,suffix){let path="";return isNil(suffix)||(path=suffix),isNil(index)||(path=isNil(path)||""===path?index:`${index}.${path}`),isNil(basePath)||(path=isNil(path)||""===path?basePath:`${basePath}.${path}`),path}function resolveString(basePath){return(item,index)=>{if(!item||"string"!=typeof item)return[];const variables=item.match(VARIABLE_FORMAT_REGEX);if(!variables)return[];return[getMappings(variables,formatBasePath(basePath,index))]}}function resolveId(basePath){return(item,index)=>{if(!item||"object"!=typeof item)return[];const id=item.id;if(!id||"string"!=typeof id)return[];const variables=id.match(VARIABLE_FORMAT_REGEX);if(!variables)return[];return[getMappings(variables,formatBasePath(basePath,index,"id"))]}}function resolveContent(basePath){return(item,index)=>{if(!item||"object"!=typeof item)return[];const content=item.content;if(!content)return[];return[resolveContentUpdateMap(formatBasePath(basePath,index,"content"))({content:content})]}}function resolveComponentProps(basePath){return(item,index)=>{if(!item||"object"!=typeof item)return[];const componentProps=item.componentProps;return!componentProps||"object"!=typeof componentProps||isArray(componentProps)?[]:keys(componentProps).map((prop=>{const propValue=componentProps[prop];if(!isString(propValue))return;const variables=propValue.match(VARIABLE_FORMAT_REGEX);if(!variables)return;return getMappings(variables,formatBasePath(basePath,index,`componentProps.${prop}`))})).filter(Boolean)}}function resolveContentUpdateMap(basePath="content"){return({content:codelessContent})=>{if(isString(codelessContent)){const variables=codelessContent.match(VARIABLE_FORMAT_REGEX);return variables?getMappings(variables,basePath):{}}if("object"==typeof codelessContent){const mappers=[resolveId,resolveContent,resolveComponentProps,resolveString].map((fn=>fn(basePath)));let maps=[];if(isArray(codelessContent)){const dynamicPartThreshold=codelessContent.findIndex((el=>isString(el)&&el.includes(_ITEM_CHILDREN_)));maps=codelessContent.reduce(((result,entry,index)=>{const pathIndex=dynamicPartThreshold>0&&index>dynamicPartThreshold?wrapDynamicIndex(index):index;return[...result,...mappers.flatMap((mapper=>mapper(entry,pathIndex)))]}),[])}else maps=mappers.flatMap((mapper=>mapper(codelessContent)));return combineMaps(...maps)}return[]}}export function resolveTemplateUpdateMap(componentTemplate){return combineMaps(...[resolveId(),resolveContentUpdateMap(),resolveComponentProps()].flatMap((mapper=>mapper(componentTemplate))))}