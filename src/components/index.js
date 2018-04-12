import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Test from './test';


export default class App extends React.Component {
    render = () => (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </HashRouter>
    )
}