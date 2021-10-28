import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
    span?: number
    spanSmall?: number
    spanMedium?: number
    spanLarge?: number
    spanExtraLarge?: number
    spanTooExtraLarge?: number
}


export default class ColumnSpec<P extends ColumnProps, S> extends PFUIReactComponent<P, S> {}