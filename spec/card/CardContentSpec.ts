import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class CardContentSpec<P extends CardContentProps, S> extends PFUIReactComponent<P, S> {}