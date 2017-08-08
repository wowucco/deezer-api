import React, {Component} from 'react'
import {Link} from 'react-router'

class GenreRelease extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Link to='/genre/rock'>
					<div>
						{this.props.params.release.replace('_', ' ')}
					</div>
				</Link>
			</div>
		)
	}
}

export default GenreRelease