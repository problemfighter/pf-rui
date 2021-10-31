import {PFUIState} from "../system/pfui-common-things";
import PaginationSpec, {PaginationProps} from "../spec/PaginationSpec";
import Select from "./Select";
import React from "react";

interface Props extends PaginationProps {

}

class State implements PFUIState {
    currentPage: number = 0
    itemPerPage: number = 0
}

const style = {
    handCursor: {cursor: 'pointer'}
}

const options = [
    {value: 20, label: '20'},
    {value: 50, label: '50'},
    {value: 100, label: '100'},
    {value: 500, label: '500'},
]

export default class Pagination extends PaginationSpec<Props, State> {

    static defaultProps = {}

    state: State = new State();

    constructor(props: Props) {
        super(props);
        this.state.currentPage = this.props.currentPage
        this.state.itemPerPage = this.props.itemPerPage
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.itemPerPage !== this.props.itemPerPage || prevProps.currentPage !== this.props.currentPage) {
            this.setState({
                currentPage: this.props.currentPage,
                itemPerPage: this.props.itemPerPage,
            })
        }
    }

    private getPaginationMatrix(currentPage: number, totalPage: number) {
        let delta = 2
        let left = currentPage - delta
        let right = currentPage + delta + 1
        let range = []
        let rangeWithDots = []
        let temp

        for (let i = 1; i <= totalPage; i++) {
            if (i === 1 || i === totalPage || (i >= left && i < right)) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (temp) {
                if (i - temp === 2) {
                    rangeWithDots.push(temp + 1);
                } else if (i - temp !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            temp = i;
        }
        return rangeWithDots
    }

    private getTotalPage() {
        return this.props.totalPage
    }

    private onChangePagination(event: any, pageNumber: number) {
        this.setState({currentPage: pageNumber})
        if (this.props.onChangePagination) {
            this.props.onChangePagination(event, pageNumber)
        }
    }

    private onChangeItemPerPage(event: any, itemPerPage: number) {
        this.setState({itemPerPage: itemPerPage})
        if (this.props.onChangeItemPerPage) {
            this.props.onChangeItemPerPage(event, itemPerPage)
        }
    }

    private getNextButton(currentPage: number, totalPage: number) {
        let item = 0
        if (!(currentPage < totalPage)) {
            return ""
        }
        item = currentPage + 1
        return (
            <li
                style={style.handCursor}
                className={"page-item"}
                onClick={(event: any) => {
                    this.onChangePagination(event, item)
                }}
            >
                <span className="page-link"><i className="bi bi-chevron-bar-right"></i></span>
            </li>
        )
    }

    private getPrevButton(currentPage: number) {
        let item = 0
        if (!(currentPage > 1)) {
            return ""
        }
        item = currentPage - 1
        return (
            <li
                style={style.handCursor}
                className={"page-item"}
                onClick={(event: any) => {
                    this.onChangePagination(event, item)
                }}
            >
                <span className="page-link"><i className="bi bi-chevron-bar-left"></i></span>
            </li>
        )
    }

    private getPageNumber(paginationItems: Array<any>, currentPage: number) {
        let active = ""
        let disabled = ""
        return paginationItems.map(
            (item: any, key: any) => {
                active = (item === currentPage ? " active" : "")
                disabled = (item === "..." ? " disabled" : "")
                return (
                    <li key={key}
                        style={style.handCursor}
                        className={"page-item" + active + disabled}
                        onClick={(event: any) => {
                            if (item !== "..."){
                                this.onChangePagination(event, item)
                            }
                        }}
                    >
                        <span className="page-link">{item}</span>
                    </li>
                )
            })
    }

    private getPaginationView(currentPage: number, totalPage: number, itemPerPage: number) {
        if (totalPage <= 1) {
            return ""
        }
        let paginationItems = this.getPaginationMatrix(currentPage, totalPage)
        const _this = this
        return (
            <React.Fragment>
                <div className="col-auto">
                    <Select
                        options={options}
                        optionValue={"value"}
                        optionLabel={"label"}
                        value={this.state.itemPerPage}
                        isSearchable={false}
                        onChange={(event: any) => {
                            _this.onChangeItemPerPage(event, event.target.value)
                        }}
                    />
                </div>
                <div className="col-auto">
                    <nav>
                        <ul className="pagination">
                            {this.getPrevButton(currentPage)}
                            {this.getPageNumber(paginationItems, currentPage)}
                            {this.getNextButton(currentPage, totalPage)}
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        )
    }

    render() {
        const _props = this.props;
        return (
            <div className="table-pagination">
                <div className="row justify-content-end">
                    {this.getPaginationView(this.state.currentPage, this.getTotalPage(), _props.itemPerPage)}
                </div>
            </div>
        );
    }

}