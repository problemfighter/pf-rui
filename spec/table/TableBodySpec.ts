import {CommonAttributes} from "../common/common-attrs";
import PFUIReactComponent from "../../system/pfui-common-things";


export interface TableBodyProps extends CommonAttributes {
    children?: any
}


export default class TableBodySpec<P extends TableBodyProps, S> extends PFUIReactComponent<P, S> {}