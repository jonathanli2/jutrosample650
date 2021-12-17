import PropTypes from"prop-types";export const vshortDateFormat={year:"numeric",month:"numeric",day:"numeric"};export const shortDateFormat={year:"numeric",month:"short",day:"numeric"};export const longDateFormat={year:"numeric",month:"long",day:"numeric"};export const abbreviatedDateFormat={year:"numeric",month:"short",day:"numeric",weekday:"short"};export const fullDateFormat={year:"numeric",month:"long",day:"numeric",weekday:"long"};export const dateFormatMap={vshort:vshortDateFormat,short:shortDateFormat,long:longDateFormat,abbreviated:abbreviatedDateFormat,full:fullDateFormat};export const timeFormat={hour:"numeric",minute:"numeric"};export const dateFormats=["vshort","short","long","abbreviated","full"];export const dateFormatShape=PropTypes.oneOf(dateFormats);