import React from "react";
import PFUIReactComponent from "../../system/pfui-common-things";

export interface DialogProps {
    title?: string
    children?: any
    onClose?: () => void;
    onLoad?: () => void;
    header?: any
}


export default class DialogSpec<P extends DialogProps, S> extends PFUIReactComponent<P, S> {}