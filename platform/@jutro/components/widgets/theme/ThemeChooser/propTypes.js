import PropTypes from"prop-types";import omit from"lodash/omit";import{themeConfigShape}from"@jutro/prop-types";import{DropdownSelectField}from"../../inputs/DropdownSelectField/DropdownSelectField";export const omittedDropdownProps=["value","defaultValue","availableValues","dataType","autoTrim","onValueChange","model","path","validationMessages","dataPath","validator","inputType"];export const themeChooserPropTypes={...omit((null==DropdownSelectField?void 0:DropdownSelectField.propTypes)||{},omittedDropdownProps),availableThemes:PropTypes.arrayOf(themeConfigShape.isRequired).isRequired,onThemeChange:PropTypes.func,theme:themeConfigShape,defaultTheme:themeConfigShape,skipPropagation:PropTypes.bool};export const themeChooserDefaultProps={...omit((null==DropdownSelectField?void 0:DropdownSelectField.defaultProps)||{},omittedDropdownProps),availableThemes:[],storybookMode:!1,skipPropagation:!1,label:"",id:"ThemeChooser"};export const themeChooserStorybookPropNames=["id","availableThemes","onThemeChange","className","label","theme","skipPropagation"];