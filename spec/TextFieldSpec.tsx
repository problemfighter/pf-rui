import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {InputCommonProps} from "./InputSpec";
import {CommonEvent} from "./common/common-attrs";

export interface TextFieldProps extends InputCommonProps, CommonEvent {
    label?: React.ReactNode;
    error?: boolean
    wasValidated?: boolean
    helperText?: React.ReactNode
    errorText?: React.ReactNode
    successText?: React.ReactNode
    defaultValue?: any
    beforeInput?: any
    afterInput?: any
}


export default class TextFieldSpec<P extends TextFieldProps, S> extends PFUIReactComponent<P, S> {}