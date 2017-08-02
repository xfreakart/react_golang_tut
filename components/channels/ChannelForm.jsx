import React, {Component} from 'react;

class ChannelForm extends Component{
	render(){
		return (
			<form>
			<input
				type='text'
			/>

			</form>
			)
	}

}

ChannelForm.propTypes = {
	addCghannel: React.PropTypes.func.isRequired
}