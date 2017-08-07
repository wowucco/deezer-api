import React, {Component} from 'react'
import ArtistCard from '../ArtistCard'

class ArtistsTiles extends Component {
	render() {
		const {items} = this.props;
		return (
			<div className='col-md-12'>
				<div className='row'>
					{items.map(item =>
						<div className='col-md-3' key={item.name}>
							<ArtistCard item={item} />
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default ArtistsTiles