import {PFUIState} from "../system/pfui-common-things";
import RowSpec, {RowProps} from "../spec/RowSpec";
import CommonUtil from "../spec/common/common-util";

interface Props extends RowProps {

}

class State implements PFUIState {
}

export default class Row extends RowSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "row")}>{_props.children}</div>);
    }

}