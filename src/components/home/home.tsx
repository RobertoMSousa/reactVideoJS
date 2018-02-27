
import * as React from 'react';

// components
import TopBar from '../topBar/topBar';
import HomeVideo from '../homeVideo/homeVideo';
import JoinUs from '../joinUs/joinUs';

// css files
import './home.css';

// svg and images

// class
class Home extends React.Component <any, any> {

	render() {
		return (
			<div>
				<TopBar/>
				<div className="mainWrapper">
					<HomeVideo className="homeMainVideo"/>
					<JoinUs className="homeMainJoin"/>
				</div>
			</div>
		);
	}
}

export default Home;
