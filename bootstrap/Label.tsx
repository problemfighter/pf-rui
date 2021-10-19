import {PFUIState} from "../system/pfui-common-things";
import LabelSpec, {LabelProps} from "../spec/LabelSpec";
import CommonUtil from "../spec/common/common-util";


export type LabelType =
    'text'
    | 'checkbox'
    | 'radio'
    | 'switch'

interface Props extends LabelProps {
    type?: LabelType
}

class State implements PFUIState {
}

export default class Label extends LabelSpec<Props, State> {

    static defaultProps = {
        type: "text"
    }

    private getMainClass() {
        let klass = "form-label"
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                klass = "form-check-label"
                break
        }
        return klass
    }

    render() {
        const _props = this.props;
        let klasses = (this.getMainClass() + (_props.className ? " " + _props.className : "")).trim();
        return (<label
            {...CommonUtil.removePropsItem(_props, ['type'])}
            className={klasses}
        >{_props.children}</label>);
    }

}