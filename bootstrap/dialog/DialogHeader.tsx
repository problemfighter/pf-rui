import DialogHeaderSpec, {DialogHeaderProps} from "../../spec/dialog/DialogHeaderSpec";
import {PFUIState} from "../../system/pfui-common-things";

interface Props extends DialogHeaderProps {

}

class State implements PFUIState {
}

export default class DialogHeader extends DialogHeaderSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (
            <div className="modal-header">
                {this.props.children}
            </div>
        );
    }

}