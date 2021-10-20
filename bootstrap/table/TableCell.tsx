import TableCellSpec, {TableCellProps} from "../../spec/table/TableCellSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableCellProps {

}

class State implements PFUIState {
}

export default class TableCell extends TableCellSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<td {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</td>);
    }

}