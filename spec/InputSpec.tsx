import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {Size} from "./common/common-type";
import {CommonAttributes} from "./common/common-event";

export type InputType =
    'text'
    | 'email'
    | 'checkbox'
    | 'color'
    | 'file'
    | 'date'
    | 'datetime-local'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'tel'
    | 'time'
    | 'url'
    | 'week'
    | 'switch'

export interface InputCommonProps extends CommonAttributes {
    type?: InputType
    viewSize?: Size
    readOnly?: boolean
    disabled?: boolean
    placeholder?: string
    required?: boolean
    value?: unknown
    name?: string
    autoComplete?: string
    autoFocus?: boolean
}

export interface InputProps extends InputCommonProps, React.HTMLAttributes<HTMLInputElement> {}


export default class InputSpec<P extends InputProps, S> extends PFUIReactComponent<P, S> {

}