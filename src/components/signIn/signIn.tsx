
import * as React from 'react';
import { Link }  from 'react-router-dom';

// components
import TopBar from '../topBar/topBar';
// import TextArea from '../textArea/textArea';

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
		this.handleForgot = this.handleForgot.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	hanglePassword(password: string) {
		// this.setState({ password: password });
	}

	handleEmail(email: string) {
		// this.setState({ email: email });
	}

	handleForgot() {
		/*
		TODO:
		*/
	}

	handleSubmit() {
		// if (!isEmail(this.state.email)) {
		// 	swal('Uppps!', 'The email is not valid!', 'error');
		// } else {
		// 	this.props.dispatch(signin_user(this.state.email, this.state.password));
		// }
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
							<h1>signin</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
