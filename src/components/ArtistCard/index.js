import React, {Component} from 'react'
import {Link} from 'react-router'
//import './style.scss'

class ArtistCard extends Component {
	render() {
		const item = this.props.item
		let linkName = '/artist/'+item.name.replace(' ', '_');
		return (
			<div className='col-md-3'>
				<Link to={linkName}>
					<div className='media'>
						<div className='media-left'>
								<img className='media-object' src={item.image[0]['#text']} alt={item.name} />
						</div>
						<div className='media-body'>
							<h4 className='media-heading'>{item.name}</h4>
						</div>
					</div>
				</Link>
			</div>
		)
	}
}

export default ArtistCard