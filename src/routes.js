import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage } from './views';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/homepage" component={HomePage} />
            </Switch>
        </Router>
    );
};

export default Routes;
