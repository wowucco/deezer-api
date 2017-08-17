import React, {Component} from 'react'

class GenreInfo extends Component {
	render() {
		const {name, wiki} = this.props.info
		return (
			<div>
				<h3>{name.toUpperCase()}</h3>
				<h4>{wiki.summary}</h4>
			</div>
		)
	}
}

export default GenreInfo