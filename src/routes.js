import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, AdminPage } from './views';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/homepage" component={HomePage} />
                <Route exact path="/dashboard" component={AdminPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
