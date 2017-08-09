import React, {Component} from 'react'
import {Link} from 'react-router'
//import './style.scss'

class ArtistInfo extends Component {
	render() {
		const {artist, smallDescription, smallImage} = this.props
		let image = smallImage ? 2 : 3
		let description = smallDescription ? 'summary' : 'content'
		return (
			<div>
				<img src={artist.image[image]['#text']} />
				{artist.name}
				{artist.bio[description]}
				<button onClick={this.props.onChangeReadMoreMode}>READ MORE</button>
				{artist.tags.tag.map(item =>
					<div className='col-md-3' key={item.name}>
						{item.name}
					</div>
				)}
				{artist.similar.artist.map(item =>
					<div className='col-md-3' key={item.name}>
						<Link to={'/artists/'+item.name.replace(' ', '_')} >
							{item.name}
							<img src={item.image[1]['#text']} />
						</Link>
					</div>
				)}
			</div>
		)
	}
}

export default ArtistInfo