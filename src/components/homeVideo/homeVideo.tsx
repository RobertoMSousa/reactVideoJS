
import * as React from 'react';
import * as videojs from 'video.js';
import swal from 'sweetalert';

// components

// css files
import './homeVideo.css';
import 'video.js/dist/video-js.css';

const videoJsOptions: videojs.PlayerOptions = {
	autoplay: false,
	controls: true,
	preload: 'auto',
	notSupportedMessage: 'please enable your JS to see the video',
	sources: [{
		src: 'https://vjs.zencdn.net/v/oceans.mp4',
		type: 'video/mp4'
	}]
};

let player: videojs.Player;
let videoObj: any = undefined;

// class
class HomeVideo extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		// start the video player
		player = videojs(videoObj, videoJsOptions,  function onPlayerReady() {
			player.poster('http://vjs.zencdn.net/v/oceans.png');
			player.on('ended', () => {
				swal({
						title: 'Join us today!',
						text: 'Don\'t miss any other videos, join us!',
						content: {
							element: 'input',
							attributes: {
								placeholder: 'Type your email',
								type: 'email',
							},
						},
						buttons: {
							submit: {
								text: 'Submit',
								value: null,
								visible: true,
								className: '',
								closeModal: true,
							}
						}
					});
			});
		});
	}

	// destroy player
	componentWillUnmount() {
		if (player) {
			player.dispose();
		}
	}

	render() {
		return (
			<video ref={node => videoObj = node} className="center homeVideo video-js"/>
		);
	}
}

export default HomeVideo;
