import {PFUIState} from "../system/pfui-common-things";
import LoadingIndicatorSpec, {LoadingIndicatorProps} from "../spec/LoadingIndicatorSpec";
import CommonUtil from "../spec/common/common-util";

interface Props extends LoadingIndicatorProps {

}

class State implements PFUIState {
}

export default class LoadingIndicator extends LoadingIndicatorSpec<Props, State> {

    static defaultProps = {
        viewColor: "primary"
    }


    render() {
        const _props = this.props;
        return (
            <div className="loading-indicator-position">
                <div className={"spinner-border text-" + _props.viewColor} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

}