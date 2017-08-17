import React, {Component} from 'react'
import Coverflow from 'react-coverflow';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Coverflow width='100%' height='340'
					displayQuantityOfSide={2}
					navigation={true}
					enableScroll={true}
					clickable={true}
					//active={0}
				>
					<img src='/common/background-image1.jpg' alt='title or description'/>
				</Coverflow>
			</div>
		)
	}
}