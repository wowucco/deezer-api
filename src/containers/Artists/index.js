import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArtistsTiles from '../../components/ArtistsTiles'
import {getArtistsList} from '../../actions/artistActions'

class Artists extends Component {
	componentDidMount() {
		if (!this.props.artists.didLoaded) {
			this.props.dispatch(getArtistsList())
		}
	}
	render() {
		const {artists, isFetching} = this.props.artists;
		return (
			<div className='row'>
				<div className='col-md-12'>
					<h3>Top 50 Artists</h3>
				</div>
				{(isFetching) ? <h2>Loading...</h2> : <ArtistsTiles items={artists}/>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		artists: state.artists
	}
}
export default connect(mapStateToProps)(Artists)