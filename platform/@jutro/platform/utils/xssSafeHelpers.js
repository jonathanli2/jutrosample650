import mapValues from"lodash/mapValues";import omit from"lodash/omit";import{warning}from"@jutro/logger";const SAFE_PREFIXES=["/","http","https","mailto:","tel:"],DANGEROUS_PROPS=["href","to","action"];export function isSafeUrl(url){return!url||SAFE_PREFIXES.some((prefix=>url.startsWith(prefix)))}export function sanitizeUrl(url,allowNoLeadingSlash=!1){return isSafeUrl(url)||allowNoLeadingSlash?url:(warning(`'${url}' is not a safe url value. The only allowed urls are the ones starting with: ${SAFE_PREFIXES.join(", ")}`),"")}export function sanitizeRouterTo(to){return"string"==typeof to?sanitizeUrl(to):to?{...to,pathname:to.pathname&&sanitizeUrl(to.pathname)}:to}export function sanitizeProps(props){return mapValues(props,sanitizeProp)}function sanitizeProp(value,key){return DANGEROUS_PROPS.includes(key)&&"string"==typeof value?sanitizeUrl(value):value}export function removeDangerousProps(props){return omit(props,"dangerouslySetInnerHTML")}