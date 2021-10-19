import React, {FormEventHandler} from "react";


export interface CommonEvent {
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onChange?: FormEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export interface CommonAttributes {
    id?: string
    className?: string
}

