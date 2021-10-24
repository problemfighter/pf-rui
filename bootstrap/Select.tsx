import {PFUIState} from "../system/pfui-common-things";
import SelectSpec, {SelectProps} from "../spec/SelectSpec";
import ReactSelect from "react-select";
import React from "react";
import {InputViewHelper} from "./common/input-view-helper";

interface Props extends SelectProps {
    wrapperClass?: string
    addWrapperClass?: string
}

class State implements PFUIState {
    value: any = null;
    options: any = [];
}

export default class Select extends SelectSpec<Props, State> {

    state: State = new State();

    static defaultProps = {
        wrapperClass: "mb-3",
    }

    componentDidMount() {
        this.loadOption();
    }

    loadOption(){
        let optionData = this.listToOptionType(this.props);
        if(optionData){
            this.setState({
                value: optionData.selected,
                options: optionData.options,
            })
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.options !== this.props.options || prevProps.value !== this.props.value){
            this.loadOption();
        }
    }


    listToOptionType(props: Props) {
        let optionData: { [key: string]: any } = {};
        return optionData
    }

    onChange(data: any) {
        const _this = this;
        const _props = this.props;
        this.setState(status => {
            return {
                value: data
            }
        }, () => {
            if (_props.onChange) {
                let value;
                if (data instanceof Array) {
                    value = [];
                    data.map(item => {
                        value.push(item.value)
                    });

                } else {
                    value = data.value
                }
                let changeData = {
                    raw: data,
                    target: {
                        name: _this.props.name,
                        value: value
                    }
                };
                _props.onChange(changeData);
            }
        });
    }


    private wrapContent(select: any) {
        const _props = this.props;
        let wrapper = InputViewHelper.getWrapperClass(_props)
        return (
            <div className={wrapper}>
                {InputViewHelper.getLabel(_props)}
                {select}
                {InputViewHelper.getErrorContent(_props)}
                {InputViewHelper.getSuccessContent(_props)}
                {InputViewHelper.getHelperContent(_props)}
            </div>
        )
    }

    render() {
        const _props = this.props;
        const _this = this;

        let klass = InputViewHelper.getClass(_props.className)
        klass = InputViewHelper.addValidationClass(_props, klass)

        let select = (
            <ReactSelect
                value={_this.state.value}
                isMulti={_props.isMulti}
                onChange={(data: any) => {
                    _this.onChange(data)
                }}
                options={_this.state.options}
                className={klass}
                id={_props.id}
                placeholder={_props.placeholder}
                name={_props.name}
            />
        );
        return this.wrapContent(select)
    }

}