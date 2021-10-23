import {PFUIState} from "../system/pfui-common-things";
import ToastSpec, {ToastProps} from "../spec/ToastSpec";


interface Props extends ToastProps {

}

class State implements PFUIState {
    isShowToast?: boolean = true
}

export default class Toast extends ToastSpec<Props, State> {

    state: State = new State();

    static defaultProps = {
        displayPosition: "topCenter",
        closeTimer: 5
    }

    componentDidMount() {
        this.terminateToast(this.props.closeTimer)
    }

    private getDisplayPosition() {
        let klass = "top-center"
        let displayPosition = String(this.props.displayPosition)
        switch (displayPosition) {
            case "topCenter":
                klass = "top-center"
                break
            case "topLeft":
                klass = "top-Left"
                break
            case "topRight":
                klass = "top-right"
                break
            case "bottomCenter":
                klass = "bottom-center"
                break
            case "bottomLeft":
                klass = "bottom-left"
                break
            case "bottomRight":
                klass = "bottom-right"
                break
        }
        return klass
    }

    private getMessageType() {
        let klass = ""
        let messageType = String(this.props.messageType)
        switch (messageType) {
            case "success":
                klass = "bg-success text-white"
                break
            case "error":
                klass = "bg-danger text-white"
                break
            case "warning":
                klass = "bg-warning text-black"
                break
            case "info":
                klass = "bg-info text-black"
                break
        }
        return klass
    }

    public terminateToast(second?: number) {
        second = (second ? second : 1)
        const _this = this;
        return setTimeout(() => {
            _this.setState({isShowToast: false})
        }, 1000 * second);
    }


    render() {
        const _this = this;
        const _props = this.props;
        return (
            (_this.state.isShowToast ? (
                <div className={"toast-container p-2 " + this.getDisplayPosition()}>
                    <div className="toast fade show">
                        <div className={"toast-body " + this.getMessageType() + " text-center"}>
                            <strong className="fs-6">{_props.message}</strong>
                        </div>
                    </div>
                </div>
            ) : "")
        );
    }

}