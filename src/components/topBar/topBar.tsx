
import * as React from 'react';

// components
// import BurgerMenu from '../burgerMenu/burgerMenu';

// css files
import './topBar.css';
// svg and images
const logo = require('../../img/videojs.svg');

// class
class TopBar extends React.Component <any, any> {

	render() {
		return (
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2 className="App-title">Not VideoJS</h2>
			</div>
		);
	}
}

export default TopBar;
