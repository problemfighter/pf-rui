import {PFUIState} from "../system/pfui-common-things";

interface Props extends SpecificationNameProps {

}

class State implements PFUIState {
}

export default class SpecificationName extends SpecificationNameSpec<Props, State> {

    static defaultProps = {}


    render() {
        const _props = this.props;
        return (<React.Fragment/>);
    }

}