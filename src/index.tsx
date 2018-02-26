import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import App from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// css code
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
	<div className="indexMainContainer">
		<Routes/>
	</div>,
	app);

registerServiceWorker();
