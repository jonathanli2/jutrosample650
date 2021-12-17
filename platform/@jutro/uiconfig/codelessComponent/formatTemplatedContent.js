import get from"lodash/get";import isArray from"lodash/isArray";export function formatTemplatedContent(template,path,children){const pathParts=path.split("."),targetKey=pathParts[pathParts.length-1];if(/^\d+$/.test(targetKey)){const targetIndex=parseInt(targetKey,10),contentPath=pathParts.slice(0,pathParts.length-1).join("."),currentContent=get(template,contentPath),preItems=currentContent.slice(0,targetIndex),postItems=currentContent.slice(targetIndex+1);return{contentPath:contentPath,content:isArray(children)?[...preItems,...children,...postItems]:[...preItems,children,...postItems]}}return{contentPath:path,content:children}}