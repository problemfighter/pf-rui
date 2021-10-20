import TableHeadCellSpec, {TableHeadCellProps} from "../../spec/table/TableHeadCellSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableHeadCellProps {

}

class State implements PFUIState {
}

export default class TableHeadCell extends TableHeadCellSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <th {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</th>);
    }

}