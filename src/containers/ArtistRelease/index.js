import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArtistInfo from '../../components/ArtistInfo'
import {getArtistInfo} from '../../actions/artistActions'

class ArtistRelease extends Component {
	constructor(props) {
		super(props)
		this.getLinkToArtist = this.getLinkToArtist.bind(this)
	}
	componentDidMount() {
			let artist = this.props.params.release.replace('_', ' ');
			this.props.dispatch(getArtistInfo(artist))
	}
	getLinkToArtist(name) {
		return `/artists/${name.replace(' ', '_')}`
	}
	render() {
		const {artist, isFetching} = this.props.artist;
		return (
			<div>
				{(isFetching) ? <h2>Loading...</h2> : <ArtistInfo item={artist} link={this.getLinkToArtist} />}
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		artist: state.artist
	}
}

export default connect(mapStateToProps)(ArtistRelease)