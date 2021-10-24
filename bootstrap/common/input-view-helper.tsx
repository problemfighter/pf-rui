import Label, {LabelType} from "../Label";
import React from "react";


export class InputViewHelper {


    public static getLabel(props: any) {
        let requiredIndicator: any = ""
        if (props.required) {
            requiredIndicator = <span className="text-danger pe-1 fw-bolder">*</span>
        }
        if (props.label) {
            let type = props.type as LabelType
            return (<Label type={type}>{requiredIndicator}{props.label}</Label>)
        }
        return ""
    }

    public static getHelperContent(props: any) {
        let response: any = ""
        if (props.helperText) {
            response = <div className="form-text">{props.helperText}</div>
        }
        return response
    }

    public static getErrorContent(props: any) {
        let response: any = ""
        if (props.errorText) {
            response = <div className="invalid-feedback">{props.errorText}</div>
        }
        return response
    }

    public static getSuccessContent(props: any) {
        let response: any = ""
        if (props.successText) {
            response = <div className="valid-feedback">{props.successText}</div>
        }
        return response
    }

    public static addValidationClass(props: any, klass = "") {
        if (props.error) {
            klass += " is-invalid"
        } else if (props.wasValidated) {
            klass += " is-valid"
        }
        return klass
    }

    public static getClass(klass: any, defaultValue: string = "") {
        return (klass ? klass : defaultValue)
    }

    public static concatClass(klass: string, newKlass: string) {
        return klass.trim() + " " + newKlass.trim()
    }

    public static getWrapperClass(props: any, klass = "") {
        let wrapperClass = this.getClass(props.wrapperClass)
        let addWrapperClass = this.getClass(props.addWrapperClass)
        wrapperClass = this.concatClass(wrapperClass, addWrapperClass)
        return this.concatClass(wrapperClass, klass)
    }

}