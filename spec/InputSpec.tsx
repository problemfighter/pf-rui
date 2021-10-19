import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {Size} from "./common/common-type";

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

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type?: InputType
    viewSize?: Size
    readOnly?: boolean
}


export default class InputSpec<P extends InputProps, S> extends PFUIReactComponent<P, S> {

}