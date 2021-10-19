import ButtonSpec, {ButtonProps} from "../spec/ButtonSpec";
import {PFUIState} from "../system/pfui-common-things";
import CommonTask from "./common/common-task";
import CommonUtil from "../spec/common/common-util";

interface Props extends ButtonProps {
    outline?: boolean
}

class State implements PFUIState {}

export default class Button extends ButtonSpec<Props, State> {

    static defaultProps = {
        type: "button",
        variant: "primary",
        viewSize: "medium",
    }


    render() {
        const _props = this.props;
        let buttonClass = "btn-" + (_props.outline ? "outline-" : "") + _props.variant
        let klasses = ("btn " + buttonClass + " " + CommonTask.getSizeClass(_props.viewSize) + (_props.className ? " " + _props.className : "")).trim();
        return (<button
            {...CommonUtil.removePropsItem(_props, ['viewSize'])}
            className={klasses}
            type={_props.type}
        >{_props.children}</button>);
    }

}