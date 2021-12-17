import _toArray from"@babel/runtime-corejs3/helpers/toArray";import React from"react";import flatten from"lodash/flatten";import{GridLayout}from"./GridLayout";import{childrenToArray}from"./childrenToArray";export const mergeColumnsToFirst=(children,newColumnsNumber)=>{const numberOfColumnsToMerge=children.length-newColumnsNumber,_children=_toArray(children),firstColumn=_children[0],restChildren=_children.slice(1),columnsToMerge=restChildren.splice(0,numberOfColumnsToMerge);return[React.cloneElement(firstColumn,void 0,[...childrenToArray(firstColumn.props.children),...flatten(columnsToMerge.map((column=>childrenToArray(column.props.children))))]),...restChildren]};export const mergeColumnsToLast=(children,newColumnsNumber)=>mergeColumnsToFirst([...children].reverse(),newColumnsNumber).reverse();export const stackColumnsToFirst=(children,newColumnsNumber)=>{const numberOfColumnsToStack=children.length-newColumnsNumber,childrenCopy=[...children],columnsToStack=childrenCopy.splice(0,numberOfColumnsToStack+1);return[React.createElement(GridLayout,{id:columnsToStack.map((column=>column.props.id)).join("-")},columnsToStack.map((column=>React.cloneElement(column,{key:column.props.id})))),...childrenCopy]};export const stackColumnsToLast=(children,newColumnsNumber)=>stackColumnsToFirst([...children].reverse(),newColumnsNumber).reverse();