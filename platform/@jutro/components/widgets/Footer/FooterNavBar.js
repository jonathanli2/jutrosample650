import React from"react";import cx from"classnames";import PropTypes from"prop-types";import{ComponentPropTypes}from"@jutro/prop-types";import styles from"./FooterNavBar.module.css";import{FooterNavLink}from"./FooterNavLink";const footerNavBarPropTypes={className:PropTypes.string,children:ComponentPropTypes.childOfComponentType(FooterNavLink)};export const FooterNavBar=props=>{const className=props.className,children=props.children,classes=cx(styles.navBar,className);return React.createElement("nav",{className:classes},children)};FooterNavBar.propTypes=footerNavBarPropTypes,FooterNavBar.__docgenInfo={description:"The `FooterNavBar` component is designed as a container for navigation links inside the `Footer` container.\nIt should be used along with `FooterNavLink` as children.\n\n@type {React.FC<PropTypes.InferProps<typeof footerNavBarPropTypes>>}\n\n@metadataType container",methods:[],displayName:"FooterNavBar",props:{className:{type:{name:"string"},required:!1,description:"Additional class names for component."},children:{type:{name:"custom",raw:"ComponentPropTypes.childOfComponentType(FooterNavLink)"},required:!1,description:"Footer links."}}},FooterNavBar.__docgenInfo={componentName:"FooterNavBar",packageName:"@jutro/components",description:"The `FooterNavBar` component is designed as a container for navigation links inside the `Footer` container.\nIt should be used along with `FooterNavLink` as children.",displayName:"FooterNavBar",methods:[],actualName:"FooterNavBar",metadataType:"container",props:{className:{type:{name:"string"},required:!1,description:"Additional class names for component."},children:{type:{name:"custom",raw:"ComponentPropTypes.childOfComponentType(FooterNavLink)"},required:!1,description:"Footer links."}}};