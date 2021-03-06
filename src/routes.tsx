
import * as React from 'react';
// import { Route, BrowserRouter } from 'react-router';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';

// components import 
// import App from './App';
import Home from './components/home/home';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signIn/signUp';

// class
class Routes extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/" component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/signin" component={SignIn}/>
						<Route path="/signup" component={SignUp}/>
					</Switch>
				</BrowserRouter>
			</div >
		);
	}
}

export default Routes;