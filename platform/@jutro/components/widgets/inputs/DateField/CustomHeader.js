import _slicedToArray from"@babel/runtime-corejs3/helpers/slicedToArray";import React,{useState,useEffect,useContext}from"react";import cx from"classnames";import range from"lodash/range";import{getFormattedMonthsForLocale,TranslatorContext}from"@jutro/locale";import{addMonths,subMonths,setMonth,setYear}from"date-fns";import{DropdownSelectField}from"../DropdownSelectField/DropdownSelectField";import{IconButton}from"../../IconButton/IconButton";import datePickerStyles from"./DatePickerField.module.css";import{messages}from"./DateField.messages";export const CustomHeader=React.memo((({date:date,changeYear:changeYear,changeMonth:changeMonth,decreaseMonth:decreaseMonth,increaseMonth:increaseMonth,locale:locale,prevMonthButtonDisabled:prevMonthButtonDisabled,nextMonthButtonDisabled:nextMonthButtonDisabled,minYear:minYear,maxYear:maxYear})=>{const _useState=useState(date),_useState2=_slicedToArray(_useState,2),displayedMonth=_useState2[0],setDisplayedMonth=_useState2[1],translator=useContext(TranslatorContext);useEffect((()=>{setDisplayedMonth(date)}),[date]);const listOfMonths=getFormattedMonthsForLocale(locale),navigationIconPrevClassName=cx(datePickerStyles.navigationPrevious,{[datePickerStyles.navigationPreviousDisabled]:prevMonthButtonDisabled}),navigationIconNextClassName=cx(datePickerStyles.navigationNext,{[datePickerStyles.navigationNextDisabled]:nextMonthButtonDisabled}),dropdownClassNames={control:datePickerStyles.control,controlFocused:datePickerStyles.controlFocused,menuList:datePickerStyles.menu,option:datePickerStyles.option,selectIcon:datePickerStyles.selectIcon};return React.createElement("div",{className:datePickerStyles.dateHeader},React.createElement(IconButton,{icon:"gw-chevron-left",className:navigationIconPrevClassName,onClick:()=>{decreaseMonth(),setDisplayedMonth(subMonths(displayedMonth,1))},disabled:prevMonthButtonDisabled,ariaLabel:translator(messages.previous)}),React.createElement(DropdownSelectField,{className:datePickerStyles.monthDropdownSelect,id:"month-dropdown",value:displayedMonth.getMonth(),availableValues:(listOfValues=listOfMonths,listOfValues.map(((item,index)=>({name:item,code:index})))),internalClassNames:dropdownClassNames,showOptional:!1,onValueChange:value=>{setDisplayedMonth(setMonth(displayedMonth,value)),changeMonth(value)},usePortal:!1}),React.createElement(DropdownSelectField,{className:datePickerStyles.yearDropdownSelect,id:"year-dropdown",value:displayedMonth.getFullYear(),availableValues:range(minYear,maxYear+1).map((item=>({name:item,code:item}))),internalClassNames:dropdownClassNames,showOptional:!1,onValueChange:value=>{setDisplayedMonth(setYear(displayedMonth,value)),changeYear(value)},usePortal:!1,searchable:!0}),React.createElement(IconButton,{icon:"gw-chevron-right",className:navigationIconNextClassName,onClick:()=>{increaseMonth(),setDisplayedMonth(addMonths(displayedMonth,1))},disabled:nextMonthButtonDisabled,ariaLabel:translator(messages.next)}));var listOfValues}));