import CardSpec, {CardProps} from "../../spec/card/CardSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends CardProps {

}

class State implements PFUIState {
}

export default class Card extends CardSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card")}>{_props.children}</div>);
    }

}