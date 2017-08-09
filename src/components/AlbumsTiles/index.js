import React, {Component} from 'react'
import AlbumsCard from '../AlbumsCard'

class AlbumsTiles extends Component {
	render() {
		const {items} = this.props;
		return (
			<div className='col-md-12'>
				<div className='row'>
					{items.map(item =>
						<div className='col-md-3' key={item['@attr'].rank}>
							<AlbumsCard item={item} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default AlbumsTiles