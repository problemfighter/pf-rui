import React from "react";
import PFUIReactComponent from "../../system/pfui-common-things";

export interface DialogContentProps {
    children?: any
}


export default class DialogContentSpec<P extends DialogContentProps, S> extends PFUIReactComponent<P, S> {}