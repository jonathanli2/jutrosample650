import PropTypes from"prop-types";import{intlMessageShape}from"./intlMessageShape";import{intlToShape}from"./toShape";const separatorObject={separator:PropTypes.bool};export const separatorPropType=PropTypes.shape(separatorObject);const appSwitcherRouteObject={title:intlMessageShape.isRequired,to:intlToShape,href:intlMessageShape,imageUrl:PropTypes.string,imageAlt:PropTypes.string,exact:PropTypes.bool,onClick:PropTypes.func,isFocused:PropTypes.bool};export const appSwitcherRoutePropTypes=PropTypes.shape(appSwitcherRouteObject);const appSwitcherRouteGroupObject={title:intlMessageShape.isRequired,items:PropTypes.arrayOf(appSwitcherRoutePropTypes.isRequired).isRequired,isInitiallyCollapsed:PropTypes.bool};export const appSwitcherRouteGroupPropTypes=PropTypes.shape(appSwitcherRouteGroupObject);export const appSwitcherItemsObject=PropTypes.arrayOf(PropTypes.oneOfType([appSwitcherRoutePropTypes,appSwitcherRouteGroupPropTypes,separatorPropType]).isRequired);