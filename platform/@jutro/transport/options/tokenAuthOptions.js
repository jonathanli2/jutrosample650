import{warning}from"@jutro/logger";export function tokenAuthOptions(accessToken){if(warning("tokenAuthOptions is deprecated, please use `authTokenHandler` that support token refresh/timeout"),accessToken)return{headers:{Authorization:`Bearer ${accessToken}`}}}