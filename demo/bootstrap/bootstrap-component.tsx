import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import Button from "../../bootstrap/Button";


export default class BootstrapComponent extends PFUIReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <h1>Bootstrap Bismillah</h1>
                <Button >Button Example</Button>
            </Bootstrap>
        );
    }

}