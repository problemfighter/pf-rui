import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardFooterSpec<P extends CardFooterProps, S> extends PFUIReactComponent<P, S> {}