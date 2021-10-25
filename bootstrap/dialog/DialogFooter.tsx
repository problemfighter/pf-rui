import DialogFooterSpec, {DialogFooterProps} from "../../spec/dialog/DialogFooterSpec";
import {PFUIState} from "../../system/pfui-common-things";

interface Props extends DialogFooterProps {

}

class State implements PFUIState {
}

export default class DialogFooter extends DialogFooterSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-footer">
                {this.props.children}
            </div>
        );
    }

}