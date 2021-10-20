import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import Button from "../../bootstrap/Button";
import Input from "../../bootstrap/Input";
import Label from "../../bootstrap/Label";
import FormComponent from "./form-component";
import TableComponent from "./table-component";


export default class BootstrapComponent extends PFUIReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <h1>Bootstrap Bismillah</h1>
                <Button disabled={true} >Button Example</Button>
                <br/>
                <Label>Time</Label>
                <Input readOnly={true} type={"time"}/>
                <br/> <br/>
                <TableComponent/>
                <FormComponent/>
            </Bootstrap>
        );
    }

}