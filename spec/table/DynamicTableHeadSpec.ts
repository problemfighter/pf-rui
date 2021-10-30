import PFUIReactComponent from "../../system/pfui-common-things";
import {CommonAttributes} from "../common/common-attrs";
import {Color} from "../common/common-type";

export type SortDirection = 'asc' | 'desc'

export interface DynamicTableHeadColumn extends CommonAttributes {
    displayName?: string
    fieldName?: string
    isSortAble?: boolean
}

export interface DynamicTableHeadProps {
    columns: Array<DynamicTableHeadColumn>
    color?: Color
    onClickSort?: (event: any, sortDirection: SortDirection, fieldName?: string) => void;
}


export default class DynamicTableHeadSpec<P extends DynamicTableHeadProps, S> extends PFUIReactComponent<P, S> {}