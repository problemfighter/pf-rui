import TableBodySpec, {TableBodyProps} from "../../spec/table/TableBodySpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableBodyProps {

}

class State implements PFUIState {
}

export default class TableBody extends TableBodySpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<tbody {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")}>{_props.children}</tbody>);
    }

}