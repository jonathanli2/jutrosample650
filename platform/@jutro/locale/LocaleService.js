import _classCallCheck from"@babel/runtime-corejs3/helpers/classCallCheck";import _createClass from"@babel/runtime-corejs3/helpers/createClass";import _defineProperty from"@babel/runtime-corejs3/helpers/defineProperty";var _dec,_class;import _URLSearchParams from"@babel/runtime-corejs3/core-js-stable/url-search-params";import{ServiceManager,service}from"@jutro/services";import{log}from"@jutro/logger";import{getConfigValue}from"@jutro/config";import localeCodes from"countries-list";import customLanguagesList from"./customLanguages.json";import LocaleSettingsInterface from"./LocaleSettingsInterface";import{getBrowserLanguage,getCountryCodeFromLocale,getLanguageFromLocale}from"./locale";export const LOCALE_SERVICE_ID="locale";export const LOCALE_URL_PARAM="selectedLocale";export const LANGUAGE_URL_PARAM="selectedLanguage";const countriesList=localeCodes.countries,languagesList=localeCodes.languagesAll,languagesListWithPseudoLocales={...customLanguagesList,...languagesList};let localeSettings,localeConfiguration;const getLocaleSettings=()=>(localeSettings||(localeSettings=ServiceManager.getServiceByContract(LocaleSettingsInterface),localeSettings||log.warning("No implementation of LocaleSettingsInterface found.")),localeSettings),getLocaleConfig=()=>(localeConfiguration||(localeConfiguration=getConfigValue("localeSettings")),localeConfiguration),getUrlParam=paramName=>new _URLSearchParams(window.location.search).get(paramName);export const getNativeLocaleLanguage=locale=>{const languageCode=getLanguageFromLocale(locale),countryCode=getCountryCodeFromLocale(locale),languageMapping=void 0!==languageCode?languagesList[languageCode]:void 0,countryMapping=void 0!==countryCode?countriesList[countryCode]:void 0;return languageMapping&&countryMapping?`${languageMapping.native} (${countryMapping.native})`:void 0!==languageCode&&languagesListWithPseudoLocales[locale]?languagesListWithPseudoLocales[locale].native:void 0};export const getAllCountriesUsingLanguage=locale=>{const language=getLanguageFromLocale(locale),countries=[];return Object.keys(countriesList).forEach((country=>{const countryKeyIndex=country;countriesList[countryKeyIndex].languages.includes(locale)&&countries.push({country:country,native:countriesList[countryKeyIndex].native,locale:`${language}-${country}`,language:language,english:countriesList[countryKeyIndex].name})})),countries};export const getCountryNameFromLocale=locale=>{const languageCode=getLanguageFromLocale(locale);if(languageCode&&languagesListWithPseudoLocales[languageCode])return languagesListWithPseudoLocales[languageCode].native;const countryCode=getCountryCodeFromLocale(locale),languageMapping=void 0!==languageCode?languagesList[languageCode]:void 0,countryMapping=void 0!==countryCode?countriesList[countryCode]:void 0;return languageMapping&&countryMapping?`${countryMapping.native}`:void 0};const _getAvailableLanguages=()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getAvailableLanguages():localeConfig&&localeConfig.availableLanguages?localeConfig.availableLanguages:[]},_getAvailableLocales=()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getAvailableLocales():localeConfig&&localeConfig.availableLocales?localeConfig.availableLocales:(log.warning("No locale configuration or settings provided."),[])},getPreferredLanguage=()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getPreferredLanguage():localeConfig&&localeConfig.preferredLanguage?localeConfig.preferredLanguage:(log.warning("No locale configuration or settings provided."),null)},getPreferredLocale=()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getPreferredLocale():localeConfig&&localeConfig.preferredLocale?localeConfig.preferredLocale:(log.warning("No locale configuration or settings provided."),null)};export const getDefaultCountryCode=()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getDefaultCountryCode():localeConfig&&localeConfig.defaultCountryCode?localeConfig.defaultCountryCode:(log.warning("No locale configuration or settings provided."),null)};export const getDefaultCurrency=()=>{const localeConfig=getLocaleConfig();return localeConfig&&localeConfig.defaultCurrency?localeConfig.defaultCurrency:(log.warning("No locale configuration provided."),"USD")};export let LocaleService=(_dec=service("locale"),_dec(_class=function(){function LocaleService(){_classCallCheck(this,LocaleService),_defineProperty(this,"localeChangeListeners",void 0),_defineProperty(this,"languageChangeListeners",void 0),_defineProperty(this,"currentLocale",void 0),_defineProperty(this,"currentLanguage",void 0),_defineProperty(this,"storedLanguageWasRead",!1),_defineProperty(this,"storedLocaleWasRead",!1),this.localeChangeListeners=[],this.languageChangeListeners=[]}return _createClass(LocaleService,[{key:"settings",get:function(){return getLocaleSettings()}},{key:"locale",get:function(){return this.getCurrentLocale()},set:function(newLocale){this.setCurrentLocale(newLocale)}},{key:"language",get:function(){return this.getCurrentLanguage()},set:function(newLanguage){this.setCurrentLanguage(newLanguage)}},{key:"getAvailableLocales",value:function(){return _getAvailableLocales()}},{key:"getAvailableLanguages",value:function(){return _getAvailableLanguages()}},{key:"getCountry",value:function(){return this.getCurrentCountry()||getDefaultCountryCode()}},{key:"getCurrentCountry",value:function(){return getCountryCodeFromLocale(this.locale)}},{key:"getCurrentLocale",value:function(skipLocalStoragePersistence=!1){var _getUrlParam;return this.storedLocaleWasRead||(this.currentLocale=null!==(_getUrlParam=getUrlParam("selectedLocale"))&&void 0!==_getUrlParam?_getUrlParam:localStorage.getItem("selectedLocale"),this.storedLocaleWasRead=!0),this.currentLocale||this.setCurrentLocale((()=>{const browserLanguage=getBrowserLanguage(),availableLocales=_getAvailableLocales();if(availableLocales&&availableLocales.length&&availableLocales.includes(browserLanguage))return browserLanguage;return getPreferredLocale()||browserLanguage})(),skipLocalStoragePersistence),this.currentLocale}},{key:"getCurrentLanguage",value:function(skipLocalStoragePersistence=!1){var _getUrlParam2;return this.storedLanguageWasRead||(this.currentLanguage=null!==(_getUrlParam2=getUrlParam("selectedLanguage"))&&void 0!==_getUrlParam2?_getUrlParam2:localStorage.getItem("selectedLanguage"),this.storedLanguageWasRead=!0),this.currentLanguage||this.setCurrentLanguage((()=>{const browserLanguage=getBrowserLanguage(),availableLanguages=_getAvailableLanguages();if(availableLanguages&&availableLanguages.length&&availableLanguages.includes(browserLanguage))return browserLanguage;return getPreferredLanguage()||browserLanguage})(),skipLocalStoragePersistence),this.currentLanguage}},{key:"getStoredLocale",value:function(){return localStorage.getItem("selectedLocale")}},{key:"getStoredLanguage",value:function(){return localStorage.getItem("selectedLanguage")}},{key:"setCurrentLocale",value:function(newLocale,skipLocalStoragePersistence=!1){var locale;this.currentLocale=newLocale,skipLocalStoragePersistence||(locale=newLocale,localStorage.setItem("selectedLocale",locale)),this.localeChangeListeners.forEach((listener=>listener(newLocale)))}},{key:"setCurrentLanguage",value:function(newLanguage,skipLocalStoragePersistence=!1){var language;this.currentLanguage=newLanguage,skipLocalStoragePersistence||(language=newLanguage,localStorage.setItem("selectedLanguage",language)),this.languageChangeListeners.forEach((listener=>listener(newLanguage)))}},{key:"onLocaleChange",value:function(callback){this.localeChangeListeners.push(callback)}},{key:"onLanguageChange",value:function(callback){this.languageChangeListeners.push(callback)}},{key:"getConfiguredPhoneRegion",value:function(){return(()=>{const settings=getLocaleSettings(),localeConfig=getLocaleConfig();return settings?settings.getDefaultPhoneCountry():localeConfig&&localeConfig.defaultPhoneCountry?localeConfig.defaultPhoneCountry:(log.warning("No locale configuration or settings provided."),null)})()}}]),LocaleService}())||_class);export default ServiceManager.getService("locale");