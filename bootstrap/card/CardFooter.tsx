import CardFooterSpec, {CardFooterProps} from "../../spec/card/CardFooterSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends CardFooterProps {

}

class State implements PFUIState {
}

export default class CardFooter extends CardFooterSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-footer")}>{_props.children}</div>);
    }

}