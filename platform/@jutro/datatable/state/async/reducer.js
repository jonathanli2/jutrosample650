import{SET_ASYNC_DATA,SET_LOADING}from"./types";export const reducer=(state,{type:type,...payload})=>{switch(type){case SET_ASYNC_DATA:{const asyncData=payload.asyncData,numberOfRows=payload.numberOfRows;return{...state,asyncData:asyncData,numberOfRows:numberOfRows}}case SET_LOADING:{const loading=payload.loading;return{...state,loading:loading}}default:return state}};