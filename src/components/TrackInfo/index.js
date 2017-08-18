import React, {Component} from 'react'
//import {Link} from 'react-router'
//import './style.scss'

class TrackInfo extends Component {
	render() {
		console.log(this.props)
		const {track, smallDescription, smallImage} = this.props
		let image = smallImage ? 2 : 3
		let description = smallDescription ? 'summary' : 'content'
		return (
			<div>
				<img src={track.album.image[image]['#text']} />
				<p>Track name: {track.name}</p>
				<p>Album: {track.album.title}</p>
				<p>Artist: {track.album.artist}</p>
				{track.wiki[description]}
				<button onClick={this.props.onChangeReadMoreMode}>READ MORE</button>
				{track.toptags.tag.map(item =>
					<div className='col-md-3' key={item.name}>
						{item.name}
					</div>
				)}

			</div>
		)
	}
}

export default TrackInfo