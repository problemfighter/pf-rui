import {PFUIState} from "../system/pfui-common-things";
import InputSpec, {InputProps} from "../spec/InputSpec";
import CommonTask from "./common/common-task";


interface Props extends InputProps {}

class State implements PFUIState {}

export default class Input extends InputSpec<Props, State> {

    static defaultProps = {
        type: "text",
    }

    render() {
        const _props = this.props;
        let klasses = ("form-control" + CommonTask.getSizeClass(_props.viewSize, "-") + (_props.className ? " " + _props.className : "")).trim();
        return (<input {..._props} className={klasses}/>);
    }

}