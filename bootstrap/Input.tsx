import {PFUIState} from "../system/pfui-common-things";
import InputSpec, {InputProps} from "../spec/InputSpec";
import CommonTask from "./common/common-task";
import CommonUtil from "../spec/common/common-util";


interface Props extends InputProps {}

class State implements PFUIState {}

export default class Input extends InputSpec<Props, State> {

    static defaultProps = {
        type: "text",
    }

    private getMainClass() {
        let klass = "form-control"
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                klass = "form-check-input"
                break
        }
        return klass
    }

    render() {
        const _props = this.props;
        let type = this.props.type
        if (type === "switch") {
            type = "checkbox"
        }
        let klasses = (this.getMainClass() + CommonTask.getSizeClass(_props.viewSize, " form-control-") + (_props.className ? " " + _props.className : "")).trim();
        return (<input
            {...CommonUtil.removePropsItem(_props, ['viewSize'])}
            className={klasses}
            type={type}
        />);
    }

}