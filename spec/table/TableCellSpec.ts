import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
}


export default class TableCellSpec<P extends TableCellProps, S> extends PFUIReactComponent<P, S> {}