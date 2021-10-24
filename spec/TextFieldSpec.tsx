import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {FieldWrappingProps, InputCommonProps} from "./InputSpec";
import {CommonEvent} from "./common/common-attrs";

export interface TextFieldProps extends FieldWrappingProps, InputCommonProps, CommonEvent {

}


export default class TextFieldSpec<P extends TextFieldProps, S> extends PFUIReactComponent<P, S> {}