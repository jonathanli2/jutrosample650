import{Contract,types}from"@jutro/contract";import{ServiceManager}from"@jutro/services";export const MessageInterface=Contract.specify({getMessage:types.func});export function getMessageService(){const messageService=ServiceManager.getServiceByContract(MessageInterface);if(!messageService)throw new Error("No implementation of MessageInterface provided.");return messageService}export function getMessageProp(messageKey,messageProps,messages){return(null==messageProps?void 0:messageProps[messageKey])||messages[messageKey]}