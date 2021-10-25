import PFUIReactComponent from "../../system/pfui-common-things";
import Dialog from "../../bootstrap/dialog/Dialog";
import DialogContent from "../../bootstrap/dialog/DialogContent";
import DialogFooter from "../../bootstrap/dialog/DialogFooter";
import DialogHeader from "../../bootstrap/dialog/DialogHeader";


export default class DialogComponent extends PFUIReactComponent<any, any> {


    render() {
        const options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]

        return (
            <Dialog title={"Confirm Box"}>
                <DialogContent>
                    Kisu dekhan bhai
                </DialogContent>
                <DialogFooter>
                    Footer
                </DialogFooter>
            </Dialog>
        );
    }

}