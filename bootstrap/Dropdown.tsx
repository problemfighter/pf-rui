import {PFUIState} from "../system/pfui-common-things";
import DropdownSpec, {DropdownProps} from "../spec/DropdownSpec";
import React from "react";
import {InputViewHelper} from "./common/input-view-helper";

interface Props extends DropdownProps {

}

class State implements PFUIState {
}

export default class Dropdown extends DropdownSpec<Props, State> {

    static defaultProps = {
        wrapperTagName: "ul",
        itemTagName: "li",
    }

    private getItemView(item: any, key: any, itemTagName: any, itemLoopCallBack: any) {
        if (itemLoopCallBack) {
            return itemLoopCallBack(item, key)
        }
        let ItemTagName: any = itemTagName
        let className = InputViewHelper.concatClass(InputViewHelper.getClass(this.props.itemClassName), "dropdown-item")
        return (
            <ItemTagName key={key} id={this.props.itemId} className={className}>
                {item}
            </ItemTagName>
        )
    }


    render() {
        const _this = this;
        const _props = this.props;
        const {wrapperPlaceholder, itemList, itemLoopCallBack} = _props
        const WrapperTagName: any = _props.wrapperTagName
        const itemTagName: any = _props.itemTagName
        let className = InputViewHelper.concatClass(InputViewHelper.getClass(this.props.wrapperClassName), "dropdown-menu")
        return (
            <div className="dropdown">
                <span data-bs-toggle="dropdown">
                    {wrapperPlaceholder}
                </span>
                <WrapperTagName className={className} id={this.props.wrapperId}>
                    {itemList.map(
                        (item: any, key: any) => (
                            _this.getItemView(item, key, itemTagName, itemLoopCallBack)
                        ))
                    }
                </WrapperTagName>
            </div>
        );
    }

}