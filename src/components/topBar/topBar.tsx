
import * as React from 'react';
import { Link } from 'react-router-dom';

// components
// import BurgerMenu from '../burgerMenu/burgerMenu';

// css files
import './topBar.css';
// svg and images
const logo = require('../../img/videojs.svg');
const login = require('../../img/login.svg');

// class
class TopBar extends React.Component <any, any> {

	render() {
		return (
			<div>
				<div className="App-header noSelect">
					<Link className="App-logo remove_link_style" to="/">
						<img className="" src={logo} alt="logo"/>
					</Link>
					<Link className="App-title remove_link_style" to="/">
						<span className="">React VideoJS</span>
					</Link>
					<Link className="login-button center remove_link_style" to="/signin">
						<img className="" src={login} alt="login" />
					</Link>
				</div>
			</div>			
		);
	}
}

export default TopBar;
