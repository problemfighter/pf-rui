import React from "react";
import PFUIReactComponent from "../../system/pfui-common-things";

export interface DialogHeaderProps {
    children?: any
}


export default class DialogHeaderSpec<P extends DialogHeaderProps, S> extends PFUIReactComponent<P, S> {}