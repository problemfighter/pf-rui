import {PFUIState} from "../system/pfui-common-things";
import ContainerSpec, {ContainerProps} from "../spec/ContainerSpec";
import CommonUtil from "../spec/common/common-util";

interface Props extends ContainerProps {

}

class State implements PFUIState {
}

export default class Container extends ContainerSpec<Props, State> {

    static defaultProps = {}

    private getContainerClass() {
        let klass = "container"
        let type = String(this.props.type)
        switch (type) {
            case "large":
                klass += "-lg"
                break
            case "small":
                klass += "-sm"
                break
            case "medium":
                klass += "-md"
                break
            case "extraLarge":
                klass += "-xl"
                break
            case "tooExtraLarge":
                klass += "-xxl"
                break
            case "fluid":
                klass += "-fluid"
                break
        }
        klass = CommonUtil.addClassName(this.props, klass)
        return klass
    }

    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={this.getContainerClass()}>{_props.children}</div>);
    }

}