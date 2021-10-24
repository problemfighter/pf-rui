import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import TextField from "../../bootstrap/TextField";
import Container from "../../bootstrap/Container";
import Row from "../../bootstrap/Row";
import Column from "../../bootstrap/Column";
import Card from "../../bootstrap/card/Card";
import CardContent from "../../bootstrap/card/CardContent";
import CardHeader from "../../bootstrap/card/CardHeader";
import CardFooter from "../../bootstrap/card/CardFooter";
import Select from "../../bootstrap/Select";


export default class FormComponent extends PFUIReactComponent<any, any> {


    render() {
        const options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]

        return (
            <Bootstrap>
                <Container type={"default"} className={"some-class"}>
                    <Card>
                        <CardHeader>Header Section</CardHeader>
                        <CardContent>
                            <Row className={"new-class"} id={"this-is-uniq-id"}>
                                <Column>
                                    <Select
                                        isSearchable={false}
                                        isClearable={true}
                                        options={options}
                                        optionLabel={"label"}
                                        optionValue={"value"}
                                        label={"Select Data"}
                                        required={true}
                                        errorText={"Please Select Something"}
                                        error={true}
                                        id={"id-in-select"}
                                        helperText={"Please select any of one"}
                                    />
                                </Column>
                                <Column span={6}>
                                    <TextField
                                        type={"text"}
                                        label={"First Name"}
                                        name={"firstName"}
                                        error={true}
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
                                <Column span={6}>
                                    <TextField

                                        label={"Password"}
                                        name={"password"}
                                        type={"password"}
                                    />
                                </Column>
                                <Column>
                                    <TextField type={"checkbox"} label={"Yes or not"}/>
                                </Column>
                            </Row>
                        </CardContent>
                        <CardFooter>Footer Section</CardFooter>
                    </Card>

                </Container>
            </Bootstrap>
        );
    }

}