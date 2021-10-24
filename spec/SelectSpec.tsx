import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";
import {CommonAttributes} from "./common/common-attrs";
import {FieldCommonProps, FieldWrappingProps} from "./InputSpec";

export interface SelectProps extends FieldWrappingProps, CommonAttributes, FieldCommonProps {
    isMulti?: boolean
    options: Array<any>;
    optionLabel: string;
    optionValue: string;
    onChange?: (event: any) => void;
}


export default class SelectSpec<P extends SelectProps, S> extends PFUIReactComponent<P, S> {}