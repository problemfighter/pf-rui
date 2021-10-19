import {PFUIState} from "../system/pfui-common-things";
import LabelSpec, {LabelProps} from "../spec/LabelSpec";

interface Props extends LabelProps {}

class State implements PFUIState {}

export default class Label extends LabelSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        let klasses = ("form-label" + (_props.className ? " " + _props.className : "")).trim();
        return (<label {..._props} className={klasses}>{_props.children}</label>);
    }

}