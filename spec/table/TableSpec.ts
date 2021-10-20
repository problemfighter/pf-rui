import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";
import {Align, Color} from "../common/common-type";

export type Variant = 'striped' | 'bordered' | 'borderless'
export type Size = 'default' | 'small'



export interface TableProps extends React.HTMLAttributes<HTMLTableElement>, CommonAttributes {
    children?: any
    isHoverEffectInRow?: boolean
    color?: Color
    variant?: Variant
    viewSize?: Size
    verticalAlign?: Align
}


export default class TableSpec<P extends TableProps, S> extends PFUIReactComponent<P, S> {}