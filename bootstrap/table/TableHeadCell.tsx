import TableHeadCellSpec, {SortDirection, TableHeadCellProps} from "../../spec/table/TableHeadCellSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends TableHeadCellProps {

}

class State implements PFUIState {
    sortDirection?: SortDirection
}

export default class TableHeadCell extends TableHeadCellSpec<Props, State> {

    static defaultProps = {}

    state: State = new State();

    constructor(props: Props) {
        super(props);
        this.state.sortDirection = this.props.sortDirection
    }

    getSortingOrder() {
        const _this = this
        let order = ""
        if (_this.props.isSortAble) {
            switch (_this.state.sortDirection) {
                case "asc":
                    _this.state.sortDirection = "asc"
                    return (<i className="bi bi-arrow-down me-1"></i>)
                case "desc":
                    _this.state.sortDirection = "desc"
                    return (<i className="bi bi-arrow-up me-1"></i>)
                default:
                    return (<i className="bi bi-arrow-down-up me-1"></i>)
            }
        }
        return order
    }

    handleOnClickSort(event: any) {
        let direction: any = this.state.sortDirection
        if (direction === "asc") {
            direction = "desc"
        } else {
            direction = "asc"
        }
        this.setState({sortDirection: direction})
        if (this.props.onClickSort) {
            this.props.onClickSort(event, direction, this.props.fieldName)
        }
    }

    getTHAttributes() {
        let attributes: any = {}
        if (this.props.isSortAble) {
            attributes.style = {cursor: "pointer"}
            attributes.onClick = (event: any) => {
                this.handleOnClickSort(event)
            }
        }
        return attributes
    }

    render() {
        const _props = this.props;
        return (
            <th {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "")} {...this.getTHAttributes()}>
                {this.getSortingOrder()} {_props.children}
            </th>
        );
    }

}