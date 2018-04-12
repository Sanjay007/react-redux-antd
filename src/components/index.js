import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Test from './test';


export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Test} />
                </Switch>
            </HashRouter>
        )
    }
}