import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface TableHeadCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
}


export default class TableHeadCellSpec<P extends TableHeadCellProps, S> extends PFUIReactComponent<P, S> {}