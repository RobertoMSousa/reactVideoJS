
import * as React from 'react';
import { Link }  from 'react-router-dom';

// components
import TopBar from '../topBar/topBar';
import TextArea from '../textArea/textArea';

// css files
import './auth.css';

// svg and images

// class
class Home extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			password: '',
			email: ''
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.hanglePassword = this.hanglePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	hanglePassword(password: string) {
		this.setState({ password: password });
	}

	handleEmail(email: string) {
		this.setState({ email: email });
	}

	handleSubmit() {
		/*
		TODO:
		*/
	}

	render() {
		return (
			<div>
				<TopBar/>
				<div className="mainWrapper">
					<div className="signinContainer">
						<div className="signInNavigation">
							<div className="signinContainerTopNavigationLeft selected">
								<span id="signin">Sign In</span>
							</div>
							<div className="signinContainerTopNavigationRight">
								<Link className="remove_link_style" to="/signup">
									<span id="signup">Sign Up</span>
								</Link>
							</div>
						</div>
						<div className="signInForm">
							<div className="signinContainerBottomEmail">
								<TextArea placeholder="email" callbackFromParent={this.handleEmail} backgroundColor="rgba(0, 0, 0, 0)"/>
							</div>
							<div className="signinContainerBottomPassword">
								<TextArea placeholder="password" callbackFromParent={this.hanglePassword} backgroundColor="rgba(65, 36, 36, 0)"/>
							</div>
							<div className="signinContainerBottomLoginButton" onClick={this.handleSubmit}>
								<span>Sign In</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
