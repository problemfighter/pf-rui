import React from "react";
import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";

export type SortDirection = 'asc' | 'desc'

export interface TableHeadCellProps extends React.HTMLAttributes<HTMLTableCellElement>, CommonAttributes {
    children?: any
    isSortAble?: boolean
    sortDirection?: SortDirection
    onClickSort?: (event: any, sortDirection: SortDirection) => void;
}


export default class TableHeadCellSpec<P extends TableHeadCellProps, S> extends PFUIReactComponent<P, S> {}