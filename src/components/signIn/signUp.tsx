
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
import TopBar from '../topBar/topBar';

// css files
import './auth.css';

// svg and images

// class
class Home extends React.Component <any, any> {

	render() {
		return (
			<div>
				<TopBar/>
				<div className="mainWrapper">
					<div className="signinContainer">
						<div className="signInNavigation">
							<div className="signinContainerTopNavigationLeft">
								<Link className="remove_link_style" to="/signin">
									<span id="signin">Sign In</span>
								</Link>
							</div>
							<div className="signinContainerTopNavigationRight selected">
								<span id="signup">Sign Up</span>
							</div>
						</div>
						<div className="signUpForm">
							<h1>SignUp</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
