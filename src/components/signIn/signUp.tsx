
import * as React from 'react';
import { Link } from 'react-router-dom';

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
			email: '',
			repeatedpass: '',
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.hanglePassword = this.hanglePassword.bind(this);
		this.hangleRepeatedPassword = this.hangleRepeatedPassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	hanglePassword(password: string) {
		this.setState({ password: password });
	}

	hangleRepeatedPassword(repeatedpass: string) {
		this.setState({ repeatedpass: repeatedpass });
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
							<div className="signinContainerBottomEmail">
								<TextArea placeholder="email" callbackFromParent={this.handleEmail} backgroundColor="rgba(0, 0, 0, 0)"/>
							</div>
							<div className="signinContainerBottomPassword">
								<TextArea placeholder="password" callbackFromParent={this.hanglePassword} backgroundColor="rgba(65, 36, 36, 0)"/>
							</div>
							<div className="signUpContainerBottomRepeatPassword">
								<TextArea placeholder="repeated password" callbackFromParent={this.hangleRepeatedPassword} backgroundColor="rgba(65, 36, 36, 0)"/>
							</div>
							<div className="signinContainerBottomLoginButton" onClick={this.handleSubmit}>
								<span>Sign Up</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
