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
            case "switch":
                wrapperClass = "d-inline-flex align-items-center"
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
        let extraWrapperClass = InputViewHelper.addValidationClass(this.props, "password-modify-input-wrapper")
        return this.setBeforeAfter(_input, "", beforeInput, extraWrapperClass)
    }

    private wrapContent(firstContent: any, secondContent: any) {
        return (
            <React.Fragment>
                {firstContent}
                {secondContent}
            </React.Fragment>
        )
    }

    private isToggleInputChecked() {
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
            case "switch":
                if (this.props.value) {
                    return true
                }
                break
            default:
                return false
        }
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
            checked={this.isToggleInputChecked()}
        />
    }

    private getInputClass(klass = "") {
        if (this.props.className) {
            klass += this.props.className
        }
        return InputViewHelper.addValidationClass(this.props, klass)
    }

    private setBeforeAfter(input: any, before: any, after: any, wrapperExtraClass: string = "") {
        const _props = this.props;
        wrapperExtraClass = InputViewHelper.concatClass(InputViewHelper.getClass(_props.inputGroupClass), wrapperExtraClass)
        return (
            <div className={wrapperExtraClass}>
                {before}
                {input}
                {after}
            </div>
        )
    }

    private getToggleInput(input: any) {
        let klass = ""
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
                klass = "form-check"
                break
            case "switch":
                klass = "form-check form-switch"
                break
        }
        return (
            <div className={klass}>
                {input}
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
                input = this.wrapContent(input, label)
                return this.getToggleInput(input)
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