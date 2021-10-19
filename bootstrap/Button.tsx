import ButtonSpec, {ButtonProps} from "../spec/ButtonSpec";
import {PFUIState} from "../system/pfui-common-things";

interface Props extends ButtonProps {
    outline?: boolean
}

class State implements PFUIState {
}

export default class Button extends ButtonSpec<Props, State> {

    static defaultProps = {
        type: "button",
        variant: "primary",
        size: "medium",
    }

    private getButtonSize() {
        let buttonSize = ""
        if (this.props.size === "large") {
            buttonSize = "btn-lg"
        } else if (this.props.size === "small") {
            buttonSize = "btn-sm"
        }
        return buttonSize
    }

    render() {
        const _props = this.props;
        let buttonClass = "btn-" + (_props.outline ? "outline-" : "") + _props.variant
        let klasses = ("btn " + buttonClass + " " + this.getButtonSize() + (_props.className ? " " + _props.className : "")).trim();
        return (<button
            {..._props}
            className={klasses}
            type={_props.type}
        >{_props.children}</button>);
    }

}