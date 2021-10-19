import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {}


export default class LabelSpec<P extends LabelProps, S> extends PFUIReactComponent<P, S> {}