import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardSpec<P extends CardProps, S> extends PFUIReactComponent<P, S> {}