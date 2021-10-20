import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";
import {Color} from "../common/common-type";


export interface TableHeadProps extends CommonAttributes {
    children?: any
    color?: Color
}


export default class TableHeadSpec<P extends TableHeadProps, S> extends PFUIReactComponent<P, S> {}