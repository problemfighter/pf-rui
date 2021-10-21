import React from "react";
import "./assets/css/bootstrap.min.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/password-field.css"

function Bootstrap(props: any) {
    return (<React.Fragment>{props.children}</React.Fragment>)
}

export default Bootstrap;