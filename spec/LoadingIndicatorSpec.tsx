import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";
import {PrimeColor} from "./common/common-type";

export interface LoadingIndicatorProps {
    viewColor?: PrimeColor
}


export default class LoadingIndicatorSpec<P extends LoadingIndicatorProps, S> extends PFUIReactComponent<P, S> {}