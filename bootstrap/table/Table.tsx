import TableSpec, {TableProps} from "../../spec/table/TableSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableProps {

}

class State implements PFUIState {
}

export default class Table extends TableSpec<Props, State> {

    static defaultProps = {
        color: 'default'
    }

    private getTableHoverClass() {
        if (this.props.isHoverEffectInRow) {
            return " table-hover"
        }
        return ""
    }

    private getTableVerticalAlignClass() {
        if (this.props.verticalAlign) {
            return " align-" + String(this.props.verticalAlign)
        }
        return ""
    }

    private getTableColorClass() {
        let klass = ""
        let color = String(this.props.color)
        if (color !== "default") {
            klass = " table-" + color
        }
        return klass
    }

    private getTableSizeClass() {
        if (this.props.viewSize && this.props.viewSize == "small") {
            return " table-sm"
        }
        return ""
    }

    private getTableVariantClass() {
        let klass = ""
        if (this.props.variant) {
            klass = " table-" + String(this.props.variant)
        }
        return klass
    }

    private getTableClass() {
        let klass = "table"
        klass += this.getTableColorClass()
        klass += this.getTableVariantClass()
        klass += this.getTableHoverClass()
        klass += this.getTableSizeClass()
        klass += this.getTableVerticalAlignClass()
        return klass
    }

    render() {
        const _props = this.props;
        return (<table {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, this.getTableClass())}>{_props.children}</table>);
    }

}