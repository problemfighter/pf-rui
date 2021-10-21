import {PFUIState} from "../system/pfui-common-things";
import TextFieldSpec, {TextFieldProps} from "../spec/TextFieldSpec";
import React from "react";
import Label, {LabelType} from "./Label";
import Input from "./Input";
import {InputType} from "../spec/InputSpec";


interface Props extends TextFieldProps {
    wrapperClass?: string
    addWrapperClass?: string
    type?: InputType
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
        let wrapperClass = (this.props.wrapperClass ? this.props.wrapperClass : "")
        wrapperClass += " " + (this.props.addWrapperClass ? this.props.addWrapperClass : "")
        let type = String(this.props.type)
        switch (type) {
            case "checkbox":
            case "radio":
                wrapperClass += " form-check"
                break
            case "switch":
                wrapperClass += " form-check form-switch"
                break
        }
        return wrapperClass
    }

    private getLabel() {
        let requiredIndicator: any = ""
        if (this.props.required) {
            requiredIndicator = <span className="text-danger pe-1 fw-bolder">*</span>
        }
        if (this.props.label) {
            let type = this.props.type as LabelType
            return (<Label type={type}>{requiredIndicator}{this.props.label}</Label>)
        }
        return ""
    }

    private getHelperContent() {
        let response: any = ""
        if (this.props.helperText) {
            response = <div className="form-text">{this.props.helperText}</div>
        }
        return response
    }

    private getErrorContent() {
        let response: any = ""
        if (this.props.errorText) {
            response = <div className="invalid-feedback">{this.props.errorText}</div>
        }
        return response
    }

    private getSuccessContent() {
        let response: any = ""
        if (this.props.successText) {
            response = <div className="valid-feedback">{this.props.successText}</div>
        }
        return response
    }

    private showHidePassword() {
        this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
    }

    private getPasswordInput(input: any) {
        const _props = this.props;
        let _input = this.setInputAttributes(this.getInputClass("password-modify-input"), _props.defaultValue, _props.type, _props.onChange)
        let beforeInput = (
            <div className="input-group-text password-input-group-text">
                <button className="border-none bg-white password-icon-button" onClick={()=>{this.showHidePassword()}}>
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
        if (this.props.error) {
            klass += " is-invalid"
        } else if (this.props.wasValidated) {
            klass += " is-valid"
        }
        return klass
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
        let label = this.getLabel()
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
        let content = (
            <React.Fragment>
                {this.getInput()}
                {this.getErrorContent()}
                {this.getSuccessContent()}
                {this.getHelperContent()}
            </React.Fragment>
        );
        return this.getWrapper(content);
    }

}