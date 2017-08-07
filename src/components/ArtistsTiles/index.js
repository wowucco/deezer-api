import React, {Component} from 'react'
import ArtistsCard from '../ArtistsCard'

class ArtistsTiles extends Component {
	render() {
		const {items} = this.props;
		return (
			<div className='col-md-12'>
				<div className='row'>
					{items.map(item =>
						<div className='col-md-3' key={item.name}>
							<ArtistsCard item={item} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default ArtistsTiles