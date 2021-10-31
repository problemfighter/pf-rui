import React from "react";
import PFUIReactComponent from "../system/pfui-common-things";

export interface DropdownProps {
    itemList: Array<any>
    wrapperPlaceholder: any
    itemLoopCallBack?: (item: any, key: any) => any;
    wrapperTagName?: string
    itemTagName?: string
    wrapperClassName?: string
    wrapperId?: string
    itemClassName?: string
    itemId?: string
}


export default class DropdownSpec<P extends DropdownProps, S> extends PFUIReactComponent<P, S> {}