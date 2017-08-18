import React, {Component} from 'react'
import {Link} from 'react-router'
import {Col} from 'react-bootstrap'
import './style.scss'

class ArtistInfo extends Component {
	render() {
		const {artist, smallDescription, smallImage} = this.props
		let image = smallImage ? 2 : 3
		let description = smallDescription ? 'summary' : 'content'
		return (
			<div>
				<div className='info-block'>
					<div className='media'>
						<div className='media-left'>
							<img className='media-object img-thumbnail' src={artist.image[image]['#text']} />
						</div>
						<div className='media-body'>
							<h3 className='media-heading'>{artist.name}</h3>
							<p className='text-justify'>{artist.bio[description]}</p>
							<button onClick={this.props.onChangeReadMoreMode}>READ MORE</button>
						</div>
					</div>
				</div>
				<div className='row' style={{padding: '10px'}}>
					<Col sm={4} md={4} lg={4} style={{borderRight: '1px solid black', height: '100%'}}>
						{artist.tags.tag.map(item =>
							<div className='col-md-3' key={item.name}>
								{item.name}
							</div>
						)}
					</Col>
					<Col sm={4} md={4} lg={4}>
						{artist.similar.artist.map(item =>
							<div className='col-md-3' key={item.name}>
								<Link to={'/artists/'+item.name.replace(' ', '_')} >
									{item.name}
									<img src={item.image[1]['#text']} />
								</Link>
							</div>
						)}
					</Col>
				</div>
			</div>
		)
	}
}

export default ArtistInfo