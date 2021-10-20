import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import TextField from "../../bootstrap/TextField";
import Container from "../../bootstrap/Container";
import Row from "../../bootstrap/Row";
import Column from "../../bootstrap/Column";


export default class FormComponent extends PFUIReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <Container type={"default"} className={"some-class"}>
                    <Row className={"new-class"} id={"this-is-uniq-id"}>
                        <Column span={6}>
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
                        </Column>
                        <Column span={6}>
                            <TextField
                                label={"Last Name"}
                                name={"lastName"}
                            />
                        </Column>
                        <Column>
                            <TextField type={"checkbox"} label={"Yes or not"}/>
                        </Column>
                    </Row>
                </Container>
            </Bootstrap>
        );
    }

}