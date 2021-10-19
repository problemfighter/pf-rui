import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {InputCommonProps} from "./InputSpec";
import {CommonEvent} from "./common/common-event";

export interface TextFieldProps extends InputCommonProps, CommonEvent {
    label?: React.ReactNode;
    error?: boolean
    wasValidated?: boolean
    helperText?: React.ReactNode
    errorText?: React.ReactNode
    successText?: React.ReactNode
    defaultValue?: any
}


export default class TextFieldSpec<P extends TextFieldProps, S> extends PFUIReactComponent<P, S> {}