import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _assertThisInitialized from"@babel/runtime-corejs3/helpers/assertThisInitialized";import _get from"@babel/runtime-corejs3/helpers/get";import _inherits from"@babel/runtime-corejs3/helpers/inherits";import _possibleConstructorReturn from"@babel/runtime-corejs3/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime-corejs3/helpers/getPrototypeOf";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";function _createSuper(Derived){var hasNativeReflectConstruct=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}import React from"react";import PropTypes from"prop-types";import cx from"classnames";import _ from"lodash";import{Map as GoogleMap,Marker}from"google-maps-react";import{log}from"@jutro/logger";import{getConfigValue}from"@jutro/config";import{DATA_TYPE_OBJECT,dataTypeShape,intlMessageShape,deprecated}from"@jutro/prop-types";import{createHOC}from"@jutro/platform";import{FieldComponent}from"../FieldComponent/FieldComponent";import*as utils from"../../../googleUtils.js";import styles from"./MapArea.module.css";import{GoogleMapsApiWrapper}from"../../../hoc/GoogleMapsApiWrapper";import{messages}from"./MapArea.messages";const envGoogleMapsApiKey=getConfigValue("GOOGLE_MAPS_API_KEY");export let MapAreaInternal=function(_FieldComponent){_inherits(MapAreaInternal,FieldComponent);var _super=_createSuper(MapAreaInternal);function MapAreaInternal(props){var _this;return _classCallCheck(this,MapAreaInternal),_this=_super.call(this,props),_defineProperty(_assertThisInitialized(_this),"convertObjectValueIntoString",(valObj=>{const result=[];for(const i of _this.props.orderOfAddress)void 0!==valObj[i]&&result.push(valObj[i]);return result.join(", ")})),_defineProperty(_assertThisInitialized(_this),"navigateToDefaultPosition",(()=>{const defaultValue=_this.props.defaultValue;if(defaultValue)if(_this.setState({isMarkerShown:!1}),"object"==typeof defaultValue){const address=_this.convertObjectValueIntoString(defaultValue);_this.geocoder.geocode({address:address},((results,status)=>_this.handleGeocodingResult(results,status,!0)))}else _this.geocoder.geocode({address:defaultValue},((results,status)=>_this.handleGeocodingResult(results,status,!0)))})),_defineProperty(_assertThisInitialized(_this),"handleGeocodingResult",((results,status,isCurrentlyDecodingDefault,position)=>{if(results){const result=results[0];if(status===_this.props.google.maps.GeocoderStatus.OK){let _this$state$geocoding=_this.state.geocodingResult,bounds=_this$state$geocoding.bounds,center=_this$state$geocoding.center;const isMarkerShown=_this.state.isMarkerShown,isMapClicked=!!position;isMapClicked||(bounds=result.geometry.bounds||result.geometry.viewport,center={lat:result.geometry.location.lat(),lng:result.geometry.location.lng()}),position=position||{lat:result.geometry.location.lat(),lng:result.geometry.location.lng()};const translatedAddress=utils.mapGooglePlacesAddressToDTO(result.address_components);_this.setState({geocodingResult:{formattedAddress:result.formatted_address,translatedAddress:translatedAddress,position:position,bounds:bounds,center:center},shouldMarkerBeRendered:isMarkerShown}),isMapClicked&&(_this.props.dataType===DATA_TYPE_OBJECT?_this.notifyChange(translatedAddress):_this.notifyChange(result.formatted_address))}else isCurrentlyDecodingDefault?log.error(`Geocoding address ${JSON.stringify(_this.props.defaultValue)} failed for the following reason: ${status}`):log.error(`Geocoding address ${JSON.stringify(_this.props.value)} failed for the following reason: ${status}`),isCurrentlyDecodingDefault||_this.navigateToDefaultPosition()}})),_defineProperty(_assertThisInitialized(_this),"onMapClick",((mapProps,map,clickEvent)=>{const latLng={lat:clickEvent.latLng.lat(),lng:clickEvent.latLng.lng()};_this.setState({isMarkerShown:!0}),_this.geocoder.geocode({location:latLng},((results,status)=>_this.handleGeocodingResult(results,status,!1,latLng)))})),_defineProperty(_assertThisInitialized(_this),"renderMarker",(()=>{const _this$state=_this.state,shouldMarkerBeRendered=_this$state.shouldMarkerBeRendered,geocodingResult=_this$state.geocodingResult;if(!shouldMarkerBeRendered)return null;const formattedAddress=geocodingResult.formattedAddress,position=geocodingResult.position;return React.createElement(Marker,{name:formattedAddress,position:position})})),_defineProperty(_assertThisInitialized(_this),"geocodeAddress",(()=>{const _this$props=_this.props,value=_this$props.value;if(_this$props.dataType===DATA_TYPE_OBJECT)if("object"==typeof value){const address=_this.convertObjectValueIntoString(value);_this.setState({isMarkerShown:!0}),_this.geocoder.geocode({address:address},((results,status)=>_this.handleGeocodingResult(results,status,!1)))}else _this.navigateToDefaultPosition(),log.error("Value must be an object");else"string"==typeof value?value?(_this.setState({isMarkerShown:!0}),_this.geocoder.geocode({address:value},((results,status)=>_this.handleGeocodingResult(results,status,!1)))):_this.navigateToDefaultPosition():(_this.navigateToDefaultPosition(),log.error("Value must be a string"))})),_defineProperty(_assertThisInitialized(_this),"a11y",(map=>{const _this$props2=_this.props,google=_this$props2.google,iframeTitle=_this$props2.title;google.maps.event.addListenerOnce(map,"idle",(()=>{document.getElementsByTagName("iframe")[0].title=_this.translator(iframeTitle),document.getElementsByTagName("iframe")[0].removeAttribute("aria-hidden")}))})),_defineProperty(_assertThisInitialized(_this),"markerA11y",(()=>{Array.from(document.querySelectorAll('div[role="button"]')).filter((element=>!element.hasAttribute("aria-label"))).forEach((element=>{element.setAttribute("aria-label",_this.translator(messages.mapMarker))}))})),_this.state={geocodingResult:{},isMarkerShown:!1},_this.geocoder=new props.google.maps.Geocoder,_this}return _createClass(MapAreaInternal,[{key:"renderMap",value:function(){const geocodingResult=this.state.geocodingResult;if(0===Object.keys(geocodingResult).length)return null;const _this$props3=this.props,mapStyles=_this$props3.mapStyles,google=_this$props3.google,bounds=geocodingResult.bounds,center=geocodingResult.center;return React.createElement(GoogleMap,{google:google,streetViewControl:!1,mapTypeControl:!1,style:mapStyles,center:center,bounds:bounds,animatedZoom:!1,onReady:(props,map)=>{map.fitBounds(bounds),this.a11y(map)},onTilesloaded:(props,map)=>{this.markerA11y(map)},onClick:this.onMapClick},this.renderMarker())}},{key:"componentDidMount",value:function(){this.geocodeAddress()}},{key:"componentDidUpdate",value:function(prevProps){const _this$props4=this.props,value=_this$props4.value;(_this$props4.dataType===DATA_TYPE_OBJECT?_.isEqual(value,this.state.geocodingResult.translatedAddress):value===this.state.geocodingResult.formattedAddress)||_.isEqual(value,prevProps.value)||this.geocodeAddress()}},{key:"render",value:function(){return _get(_getPrototypeOf(MapAreaInternal.prototype),"render",this).call(this)}},{key:"renderControl",value:function(breakpointProps){const className=breakpointProps.className;return React.createElement("div",{className:cx(styles.mapArea,className)},this.renderMap())}}]),MapAreaInternal}();_defineProperty(MapAreaInternal,"propTypes",{...FieldComponent.propTypes,value:PropTypes.oneOfType([PropTypes.shape({country:PropTypes.string,countryCode:PropTypes.string,postalCode:PropTypes.string,state:PropTypes.string,city:PropTypes.string,addressLine1:PropTypes.string,addressLine2:PropTypes.string,addressLine3:PropTypes.string}),PropTypes.string]),dataType:dataTypeShape,defaultValue:PropTypes.oneOfType([PropTypes.shape({country:PropTypes.string,countryCode:PropTypes.string,postalCode:PropTypes.string,state:PropTypes.string,city:PropTypes.string,addressLine1:PropTypes.string,addressLine2:PropTypes.string,addressLine3:PropTypes.string}),PropTypes.string]),mapStyles:PropTypes.object,googleMapsApiKey:deprecated(PropTypes.oneOfType([PropTypes.string,PropTypes.func]),"7.0.0","Use onGoogleMapsApiKey"),onGoogleMapsApiKey:PropTypes.oneOfType([PropTypes.string,PropTypes.func]),orderOfAddress:PropTypes.arrayOf(PropTypes.string),title:intlMessageShape}),_defineProperty(MapAreaInternal,"defaultProps",{...FieldComponent.defaultProps,mapStyles:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",borderRadius:"4px"},dataType:DATA_TYPE_OBJECT,defaultValue:"2850 S Delaware St #400, San Mateo, CA 94403, USA",orderOfAddress:["addressLine1","addressLine2","addressLine3","city","state","postalCode","country","countryCode"],title:messages.googleMaps,onGoogleMapsApiKey:envGoogleMapsApiKey}),_defineProperty(MapAreaInternal,"displayName","MapArea");export const MapArea=createHOC({component:MapAreaInternal,wrapper:GoogleMapsApiWrapper,displayName:"MapArea"});MapAreaInternal.__docgenInfo={description:"Renders an map element. It allows the user to pick a place in the map. Allows you to display address on the map and choose the format of the address.\n@typedef {typeof MapAreaInternal.propTypes} MapAreaInternalPropTypes\n@extends FieldComponent<PropTypes.InferProps<MapAreaInternalPropTypes>>\n\n@metadataType field",methods:[{name:"convertObjectValueIntoString",docblock:"Helper function to convert address stored in an object to string in a good order.\n@param {object} valObj object to convert\n@returns {string} converted address",modifiers:[],params:[{name:"valObj",description:"object to convert",type:{name:"object"},optional:!1}],returns:{description:"converted address",type:{name:"string"}},description:"Helper function to convert address stored in an object to string in a good order."},{name:"navigateToDefaultPosition",docblock:null,modifiers:[],params:[],returns:null},{name:"handleGeocodingResult",docblock:null,modifiers:[],params:[{name:"results",type:null},{name:"status",type:null},{name:"isCurrentlyDecodingDefault",type:null},{name:"position",type:null}],returns:null},{name:"onMapClick",docblock:"Function invoked on the map click. It invokes the geocoding based on the click coordinates.\n\n@param {object} mapProps\n@param {object} map\n@param {object} clickEvent props of the clickEvent f.eg. latitude and longitude",modifiers:[],params:[{name:"mapProps",description:null,type:{name:"object"},optional:!1},{name:"map",description:null,type:{name:"object"},optional:!1},{name:"clickEvent",description:"props of the clickEvent f.eg. latitude and longitude",type:{name:"object"},optional:!1}],returns:null,description:"Function invoked on the map click. It invokes the geocoding based on the click coordinates."},{name:"renderMarker",docblock:"Render marker on the map\n\n@returns {React.ReactElement} JSX for the marker",modifiers:[],params:[],returns:{description:"JSX for the marker",type:{name:"React.ReactElement"}},description:"Render marker on the map"},{name:"renderMap",docblock:"Render the map element\n\n@returns {React.ReactElement} JSX for the map",modifiers:[],params:[],returns:{description:"JSX for the map",type:{name:"React.ReactElement"}},description:"Render the map element"},{name:"geocodeAddress",docblock:null,modifiers:[],params:[],returns:null},{name:"a11y",docblock:null,modifiers:[],params:[{name:"map",type:null}],returns:null},{name:"markerA11y",docblock:null,modifiers:[],params:[],returns:null},{name:"renderControl",docblock:"Render control for this component.\n\n@param {object} breakpointProps - breakpoint-specific props\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render control for this component."}],displayName:"MapArea",props:{mapStyles:{defaultValue:{value:"{\n    position: 'absolute',\n    top: '0',\n    bottom: '0',\n    left: '0',\n    right: '0',\n    borderRadius: '4px',\n}",computed:!1},type:{name:"object"},required:!1,description:"Styles to apply to the map component"},dataType:{defaultValue:{value:"DATA_TYPE_OBJECT",computed:!0},type:{name:"custom",raw:"dataTypeShape"},required:!1,description:"Format of the value"},defaultValue:{defaultValue:{value:"'2850 S Delaware St #400, San Mateo, CA 94403, USA'",computed:!1},type:{name:"union",value:[{name:"shape",value:{country:{name:"string",required:!1},countryCode:{name:"string",required:!1},postalCode:{name:"string",required:!1},state:{name:"string",required:!1},city:{name:"string",required:!1},addressLine1:{name:"string",required:!1},addressLine2:{name:"string",required:!1},addressLine3:{name:"string",required:!1}}},{name:"string"}]},required:!1,description:"Default address to display on the map"},orderOfAddress:{defaultValue:{value:"[\n    'addressLine1',\n    'addressLine2',\n    'addressLine3',\n    'city',\n    'state',\n    'postalCode',\n    'country',\n    'countryCode',\n]",computed:!1},type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"Defines the order of address items"},title:{defaultValue:{value:"messages.googleMaps",computed:!0},type:{name:"custom",raw:"intlMessageShape"},required:!1,description:"Title attribute which will be added to the Google Maps iframe for the accessibility"},onGoogleMapsApiKey:{defaultValue:{value:"getConfigValue('GOOGLE_MAPS_API_KEY')",computed:!0},type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"The key required by the Google Maps API"},value:{type:{name:"union",value:[{name:"shape",value:{country:{name:"string",required:!1},countryCode:{name:"string",required:!1},postalCode:{name:"string",required:!1},state:{name:"string",required:!1},city:{name:"string",required:!1},addressLine1:{name:"string",required:!1},addressLine2:{name:"string",required:!1},addressLine3:{name:"string",required:!1}}},{name:"string"}]},required:!1,description:"Address to display on the map"},googleMapsApiKey:{type:{name:"custom",raw:"deprecated(\n    PropTypes.oneOfType([PropTypes.string, PropTypes.func]),\n    '7.0.0',\n    'Use onGoogleMapsApiKey'\n)"},required:!1,description:"The key required by the Google Maps API\n@deprecated"}},composes:["../FieldComponent/FieldComponent"]},MapAreaInternal.__docgenInfo={componentName:"MapArea",packageName:"@jutro/components",description:"Renders an map element. It allows the user to pick a place in the map. Allows you to display address on the map and choose the format of the address.",displayName:"MapArea",methods:[{name:"convertObjectValueIntoString",docblock:"Helper function to convert address stored in an object to string in a good order.\n@param {object} valObj object to convert\n@returns {string} converted address",modifiers:[],params:[{name:"valObj",description:"object to convert",type:{name:"object"},optional:!1}],returns:{description:"converted address",type:{name:"string"}},description:"Helper function to convert address stored in an object to string in a good order."},{name:"navigateToDefaultPosition",docblock:null,modifiers:[],params:[],returns:null},{name:"handleGeocodingResult",docblock:null,modifiers:[],params:[{name:"results",optional:void 0,type:null},{name:"status",optional:void 0,type:null},{name:"isCurrentlyDecodingDefault",optional:void 0,type:null},{name:"position",optional:void 0,type:null}],returns:null},{name:"onMapClick",docblock:"Function invoked on the map click. It invokes the geocoding based on the click coordinates.\n\n@param {object} mapProps\n@param {object} map\n@param {object} clickEvent props of the clickEvent f.eg. latitude and longitude",modifiers:[],params:[{name:"mapProps",description:null,type:{name:"object"},optional:!1},{name:"map",description:null,type:{name:"object"},optional:!1},{name:"clickEvent",description:"props of the clickEvent f.eg. latitude and longitude",type:{name:"object"},optional:!1}],returns:null,description:"Function invoked on the map click. It invokes the geocoding based on the click coordinates."},{name:"renderMarker",docblock:"Render marker on the map\n\n@returns {React.ReactElement} JSX for the marker",modifiers:[],params:[],returns:{description:"JSX for the marker",type:{name:"React.ReactElement"}},description:"Render marker on the map"},{name:"renderMap",docblock:"Render the map element\n\n@returns {React.ReactElement} JSX for the map",modifiers:[],params:[],returns:{description:"JSX for the map",type:{name:"React.ReactElement"}},description:"Render the map element"},{name:"geocodeAddress",docblock:null,modifiers:[],params:[],returns:null},{name:"a11y",docblock:null,modifiers:[],params:[{name:"map",optional:void 0,type:null}],returns:null},{name:"markerA11y",docblock:null,modifiers:[],params:[],returns:null},{name:"renderControl",docblock:"Render control for this component.\n\n@param {object} breakpointProps - breakpoint-specific props\n@returns {React.ReactElement} JSX for the control",modifiers:[],params:[{name:"breakpointProps",description:"breakpoint-specific props",type:{name:"object"},optional:!1}],returns:{description:"JSX for the control",type:{name:"React.ReactElement"}},description:"Render control for this component."}],actualName:"MapAreaInternal",metadataType:"field",props:{value:{type:{name:"union",value:[{name:"shape",value:{country:{name:"string",required:!1},countryCode:{name:"string",required:!1},postalCode:{name:"string",required:!1},state:{name:"string",required:!1},city:{name:"string",required:!1},addressLine1:{name:"string",required:!1},addressLine2:{name:"string",required:!1},addressLine3:{name:"string",required:!1}}},{name:"string"}]},required:!1,description:"Address to display on the map"},dataType:{type:{name:"enum",value:[{value:"'object'",computed:!1},{value:"'string'",computed:!1}]},required:!1,description:"Format of the value",defaultValue:{value:"'object'",computed:!1}},defaultValue:{type:{name:"union",value:[{name:"shape",value:{country:{name:"string",required:!1},countryCode:{name:"string",required:!1},postalCode:{name:"string",required:!1},state:{name:"string",required:!1},city:{name:"string",required:!1},addressLine1:{name:"string",required:!1},addressLine2:{name:"string",required:!1},addressLine3:{name:"string",required:!1}}},{name:"string"}]},required:!1,description:"Default address to display on the map",defaultValue:{value:"'2850 S Delaware St #400, San Mateo, CA 94403, USA'",computed:!1}},mapStyles:{type:{name:"object"},required:!1,description:"Styles to apply to the map component",defaultValue:{value:"{\n    position: 'absolute',\n    top: '0',\n    bottom: '0',\n    left: '0',\n    right: '0',\n    borderRadius: '4px',\n}",computed:!1}},googleMapsApiKey:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"The key required by the Google Maps API\n@deprecated",deprecationInfo:{version:"7.0.0",mapTo:null}},onGoogleMapsApiKey:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:"The key required by the Google Maps API",defaultValue:{value:"getConfigValue('GOOGLE_MAPS_API_KEY')",computed:!0}},orderOfAddress:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:"Defines the order of address items",defaultValue:{value:"[\n    'addressLine1',\n    'addressLine2',\n    'addressLine3',\n    'city',\n    'state',\n    'postalCode',\n    'country',\n    'countryCode',\n]",computed:!1}},title:{type:{name:"union",value:[{name:"string"},{name:"shape",value:{id:{name:"string",required:!1},defaultMessage:{name:"string",required:!1},args:{name:"shape",value:{},required:!1}}}]},required:!1,description:"Title attribute which will be added to the Google Maps iframe for the accessibility",defaultValue:{value:"messages.googleMaps",computed:!0}}},composes:["../FieldComponent/FieldComponent"]};