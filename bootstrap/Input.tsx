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

    render() {
        const _props = this.props;
        let klasses = ("form-control" + CommonTask.getSizeClass(_props.viewSize, " form-control-") + (_props.className ? " " + _props.className : "")).trim();
        return (<input
            {...CommonUtil.removePropsItem(_props, ['viewSize'])}
            className={klasses}
        />);
    }

}