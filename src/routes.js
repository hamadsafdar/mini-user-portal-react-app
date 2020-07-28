import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, LoginPage, SignUpScreen } from './views';


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/homepage" component={HomePage} />
				<Route exact path="/register" component={SignUpScreen} />
			</Switch>
		</Router>
	);
};

export default Routes;
