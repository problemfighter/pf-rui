import PFUIReactComponent from "../system/pfui-common-things";
import {VariousSize} from "./common/common-type";
import {CommonAttributes} from "./common/common-attrs";

export type ContainerType = VariousSize | "fluid"

export interface ContainerProps extends CommonAttributes {
    type?: ContainerType
    children?: any
}


export default class ContainerSpec<P extends ContainerProps, S> extends PFUIReactComponent<P, S> {}