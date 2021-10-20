import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import TextField from "../../bootstrap/TextField";
import Container from "../../bootstrap/Container";


export default class FormComponent extends PFUIReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <Container type={"default"} className={"some-class"}>
                    <TextField
                        type={"text"}
                        label={"First Name"}
                        name={"firstName"}
                        error={false}
                        wasValidated={true}
                        errorText={"Please Enter Name"}
                        helperText={"Please Enter valid name"}
                        successText={"Looks Good"}
                        required={true}
                    />
                    <TextField type={"checkbox"} label={"Yes or not"}/>
                </Container>
            </Bootstrap>
        );
    }

}