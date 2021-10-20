import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";
import {VariousSize} from "./common/common-type";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
    span?: number
    type?: VariousSize
}


export default class ColumnSpec<P extends ColumnProps, S> extends PFUIReactComponent<P, S> {}