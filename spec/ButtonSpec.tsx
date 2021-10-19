import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {Size} from "./common/common-type";

export type ButtonType = 'button' | 'reset' | 'submit'
export type Variant = 'primary' | 'secondary' | 'danger'  | 'warning' | 'info' | 'light' | 'dark' | 'link'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType
    variant?: Variant
    viewSize?: Size
    className?: string
    disabled?: boolean
}


export default class ButtonSpec<P extends ButtonProps, S> extends PFUIReactComponent<P, S> {

}