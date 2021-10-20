import {PFUIState} from "../system/pfui-common-things";
import CommonUtil from "../spec/common/common-util";
import ColumnSpec, {ColumnProps} from "../spec/ColumnSpec";
import CommonTask from "./common/common-task";

interface Props extends ColumnProps {

}

class State implements PFUIState {
}

export default class Column extends ColumnSpec<Props, State> {

    static defaultProps = {}

    private getSpan() {
        let klass = "col"
        if (this.props.span) {
            klass += " " + CommonTask.getSizeTypeClass(this.props.type, "col")
            klass += "-" + this.props.span
        }
        return klass
    }

    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, this.getSpan())}>{_props.children}</div>);
    }

}