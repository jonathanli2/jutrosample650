import React from"react";export const childrenToArray=children=>{const newFirstChildren=[];return React.Children.forEach(children,(child=>{newFirstChildren.push(child)})),newFirstChildren};