import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, CommonAttributes {
    children?: any
}


export default class RowSpec<P extends RowProps, S> extends PFUIReactComponent<P, S> {}