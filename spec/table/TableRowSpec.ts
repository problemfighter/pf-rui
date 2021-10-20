import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement>, CommonAttributes {
    children?: any
}


export default class TableRowSpec<P extends TableRowProps, S> extends PFUIReactComponent<P, S> {}