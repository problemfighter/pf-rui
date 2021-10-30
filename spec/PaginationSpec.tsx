import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";

export interface PaginationProps extends CommonAttributes {
    totalPage: number
    currentPage: number
    itemPerPage: number
    onChangePagination?: (event: any, pageNumber: number) => void;
    onChangeItemPerPage?: (event: any, itemPerPage: number) => void;
}


export default class PaginationSpec<P extends PaginationProps, S> extends PFUIReactComponent<P, S> {}