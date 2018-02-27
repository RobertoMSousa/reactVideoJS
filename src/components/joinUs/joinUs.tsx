
import * as React from 'react';
import { Link } from 'react-router-dom';
// components

// css files
import './joinUs.css';
// svg and images

// class
class JoinUs extends React.Component <any, any> {

	render() {
		return (
			<Link to="/signup" className="center joinUsButton noSelect remove_link_style">
				<span className="joinUsText center">Join us for more!</span>
			</Link>
		);
	}
}

export default JoinUs;
