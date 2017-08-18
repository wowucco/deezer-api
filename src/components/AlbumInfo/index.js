import React, {Component} from 'react'
//import {Link} from 'react-router'
//import './style.scss'

class ArtistInfo extends Component {
	render() {
		const {album, smallDescription, smallImage} = this.props
		let image = smallImage ? 2 : 3
		let description = smallDescription ? 'summary' : 'content'
		return (
			<div>
				<img src={album.image[image]['#text']} />
				{album.name}
				{album.wiki[description]}
				<button onClick={this.props.onChangeReadMoreMode}>READ MORE</button>
				{album.tags.tag.map(item =>
					<div className='col-md-3' key={item.name}>
						{item.name}
					</div>
				)}
				<ul>
					{album.tracks.track.map(item =>
						<li>
							<div className='col-md-3' key={item.name}>
								{item.name}
							</div>
						</li>
					)}
				</ul>
			</div>
		)
	}
}

export default ArtistInfo