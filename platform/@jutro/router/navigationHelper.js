import _ from"lodash";export function navigateTo(instance,path,result){if(instance&&path&&!function(instance,path){const loc=instance.props.location;if("object"==typeof path){const pathname=path.pathname,_path$search=path.search,search=void 0===_path$search?"":_path$search,_path$hash=path.hash,hash=void 0===_path$hash?"":_path$hash;return pathname===loc.pathname&&search===loc.search&&hash===loc.hash}return path===loc.pathname}(instance,path)){let location=path;_.isString(location)?location={pathname:path,state:{action:"redirect",result:result}}:result&&_.set(location,"state.result",result);const _instance$props=instance.props,history=_instance$props.history;_instance$props.replace?history.replace(location):history.push(location)}}