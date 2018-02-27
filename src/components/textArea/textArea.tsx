
import * as React from 'react';

// css
import './textArea.css';

// class
class TextArea extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.props.callbackFromParent(event.target.value);
	}

	componentDidMount() {
		console.log('props-->', this.props); // roberto
	} 

	render() {
		return (
			<form className="formStyle">
				<input
					style={{'backgroundColor': this.props.backgroundColor}}
					className="hide-on-focus"
					placeholder={this.props.placeholder}
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default TextArea;
