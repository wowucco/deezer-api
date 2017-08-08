import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArtistInfo from '../../components/ArtistInfo'
import {getArtistInfo} from '../../actions/artistActions'

class ArtistRelease extends Component {
	componentDidMount() {
		let artist = this.props.params.release.replace('_', ' ');
		this.props.dispatch(getArtistInfo(artist))
	}

	componentWillReceiveProps(nextProps) {
		let newArtist = nextProps.params.release.replace('_', ' ')
		let artist = this.props.params.release.replace('_', ' ')
		if (artist !== newArtist) this.props.dispatch(getArtistInfo(newArtist));
	}

	render() {
		const {artist, isFetching, smallDescription, smallImage} = this.props.artist;
		return (
			<div>
				{(isFetching) ? <h2>Loading...</h2> : <ArtistInfo artist={artist} smallDescription={smallDescription} smallImage={smallImage} />}
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