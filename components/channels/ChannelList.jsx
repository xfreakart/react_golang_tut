import React, {Component} from 'react';
import Channel from './Channel';

class ChannelList extends Component{
	render(){
		return(
			<ul>{
				this.props.channels.map(chan => {
					<Channel 
					channel = {chan}
					setChannel = {this.props.setChannel}
					/>
				})	
			}
			</ul>			
			)
	}
}


ChannelList.propTypes = {
	channels:React.propTypes.array.isRequired,
	setChannel: React.propTypes.func.isRequired

}

export default ChannelList;