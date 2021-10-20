import CardHeaderSpec, {CardHeaderProps} from "../../spec/card/CardHeaderSpec";
import {PFUIState} from "../../system/pfui-common-things";
import CommonUtil from "../../spec/common/common-util";

interface Props extends CardHeaderProps {

}

class State implements PFUIState {
}

export default class CardHeader extends CardHeaderSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<div {...CommonUtil.addId(_props)} className={CommonUtil.addClassName(_props, "card-header")}>{_props.children}</div>);
    }

}