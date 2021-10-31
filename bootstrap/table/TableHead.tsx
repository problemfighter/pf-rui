import TableHeadSpec, {TableHeadProps} from "../../spec/table/TableHeadSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableHeadProps {

}

class State implements PFUIState {
}

export default class TableHead extends TableHeadSpec<Props, State> {

    static defaultProps = {
        color: "secondary"
    }

    private getColorClass() {
        let klass = ""
        let color = String(this.props.color)
        if (color !== "default") {
            klass = " table-" + color
        }
        return klass
    }

    private getClass() {
        let klass = ""
        klass += this.getColorClass()
        return klass
    }


    render() {
        const _props = this.props;
        return (<thead {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, this.getClass())}>{_props.children}</thead>);
    }

}