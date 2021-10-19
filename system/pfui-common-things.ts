import {Component} from 'react';


export interface PFUIState { }

export default class PFUIReactComponent<P, S extends PFUIState> extends Component<P, S> {}