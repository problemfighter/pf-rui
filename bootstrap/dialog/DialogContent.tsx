import DialogContentSpec, {DialogContentProps} from "../../spec/dialog/DialogContentSpec";
import {PFUIState} from "../../system/pfui-common-things";

interface Props extends DialogContentProps {

}

class State implements PFUIState {
}

export default class DialogContent extends DialogContentSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }

}