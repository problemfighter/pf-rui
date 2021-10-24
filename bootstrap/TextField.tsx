import {PFUIState} from "../system/pfui-common-things";
import TextFieldSpec, {TextFieldProps} from "../spec/TextFieldSpec";
import React from "react";
import Input from "./Input";
import {InputType} from "../spec/InputSpec";
import {InputViewHelper} from "./common/input-view-helper";


interface Props extends TextFieldProps {
    inputGroupClass?: string
}

class State implements PFUIState {
    isShowPassword: boolean = false
}

export default class TextField extends TextFieldSpec<Props, State> {

    static defaultProps = {
        wrapperClass: "mb-3",
        inputGroupClass: "input-group"
    }

    state: State = new State()

    private getWrapperClass() {
        let wrapperClass = ""
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
                wrapperClass = "form-check"
                break
            case "switch":
                wrapperClass = "form-check form-switch"
                break
        }
        return InputViewHelper.getWrapperClass(this.props, wrapperClass)
    }


    private showHidePassword() {
        this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
    }

    private getPasswordInput(input: any) {
        const _props = this.props;
        let _input = this.setInputAttributes(this.getInputClass("password-modify-input"), _props.defaultValue, _props.type, _props.onChange)
        let beforeInput = (
            <div className="input-group-text password-input-group-text">
                <button type="button" className="border-none bg-white password-icon-button" onClick={()=>{this.showHidePassword()}}>
                    {this.state.isShowPassword ? (<i className="bi bi-eye"></i>) : (<i className="bi bi-eye-slash"></i>)}
                </button>
            </div>
        )
        return this.setBeforeAfter("", _input, beforeInput)
    }

    private wrapContent(firstContent: any, secondContent: any) {
        return (
            <React.Fragment>
                {firstContent}
                {secondContent}
            </React.Fragment>
        )
    }

    private setInputAttributes(className: any = "", defaultValue: any, inputType?: InputType, onChange?: any) {
        const _props = this.props;
        return <Input
            defaultValue={defaultValue}
            type={this.state.isShowPassword && inputType === "password" ? "text" : inputType}
            viewSize={_props.viewSize}
            readOnly={_props.readOnly}
            disabled={_props.disabled}
            placeholder={_props.placeholder}
            required={_props.required}
            value={_props.value}
            name={_props.name}
            autoComplete={_props.autoComplete}
            autoFocus={_props.autoFocus}
            id={_props.id}
            className={className}
            onBlur={_props.onBlur}
            onChange={onChange}
            onFocus={_props.onFocus}
            onKeyDown={_props.onKeyDown}
            onKeyUp={_props.onKeyUp}
        />
    }

    private getInputClass(klass = "") {
        if (this.props.className) {
            klass += this.props.className
        }
        return InputViewHelper.addValidationClass(this.props, klass)
    }

    private setBeforeAfter(input: any, before: any, after: any) {
        const _props = this.props;
        return (
            <div className={_props.inputGroupClass}>
                {before}
                {input}
                {after}
            </div>
        )
    }

    private getInput() {
        const _props = this.props;
        let label = InputViewHelper.getLabel(_props)
        let input = this.setInputAttributes(this.getInputClass(), _props.defaultValue, _props.type, _props.onChange)
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                return this.wrapContent(input, label)
            case "password":
                input = this.getPasswordInput(input)
                return this.wrapContent(label, input)
            default:
                return this.wrapContent(label, input)
        }
    }

    private getWrapper(content: any) {
        let wrapper = this.getWrapperClass()
        if (wrapper !== "") {
            return (
                <div className={wrapper}>
                    {content}
                </div>
            )
        }
        return content;
    }

    render() {
        const _props = this.props;
        let content = (
            <React.Fragment>
                {this.getInput()}
                {InputViewHelper.getErrorContent(_props)}
                {InputViewHelper.getSuccessContent(_props)}
                {InputViewHelper.getHelperContent(_props)}
            </React.Fragment>
        );
        return this.getWrapper(content);
    }

}