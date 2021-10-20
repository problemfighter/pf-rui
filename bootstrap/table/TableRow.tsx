import TableRowSpec, {TableRowProps} from "../../spec/table/TableRowSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableRowProps {

}

class State implements PFUIState {
}

export default class TableRow extends TableRowSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<tr {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</tr>);
    }

}