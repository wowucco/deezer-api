import React, {Component} from 'react'
import {Link} from 'react-router'
//import './style.scss'

class ArtistInfo extends Component {
	render() {
		const artist = this.props.item
		return (
			<div>
				<img src={artist.image[3]['#text']} />
				{artist.name}
				{artist.bio.content}
				{artist.tags.tag.map(item =>
					<div className='col-md-3' key={item.name}>
						{item.name}
					</div>
				)}
				{artist.similar.artist.map(item =>
					<Link to={this.props.link(item.name)} >
						<div className='col-md-3' key={item.name}>
							{item.name}
							<img src={item.image[1]['#text']} />
						</div>
					</Link>
				)}
			</div>
		)
	}
}

export default ArtistInfo