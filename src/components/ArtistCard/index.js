import React, {Component} from 'react'
import {Link} from 'react-router'
import './style.scss'

class ArtistCard extends Component {
	render() {
		const item = this.props.item
		let linkName = '/artist/'+item.name.replace(' ', '_');
		return (
			<div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
				<Link to={linkName}>
					<div className='thumbnail'>
						<img src={item.image[2]['#text']} alt={item.name} />
						<div className='caption'>
							<h3>{item.name}</h3>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}

export default ArtistCard