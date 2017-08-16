import React, {Component} from 'react'

class GenreInfo extends Component {
	render() {
		const {name, picture_medium} = this.props.info
		return (
			<div>
				<h3>{name}</h3>
				<img src={picture_medium} alt=''/>
			</div>
		)
	}
}

export default GenreInfo