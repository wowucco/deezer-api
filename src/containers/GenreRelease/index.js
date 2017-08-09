import React, {Component} from 'react'
//import {Link} from 'react-router'
import {connect} from 'react-redux'
import GenreInfo from '../../components/GenreInfo'
import GenreSimilar from '../../components/GenreSimilar'
import {getGenreInfo, getGenreSimilar} from '../../actions/genreActions'

class GenreRelease extends Component {
	componentDidMount() {
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreInfo(genre))
		this.props.dispatch(getGenreSimilar(genre))
	}

	componentWillReceiveProps(nextProps) {
		let newGenre = nextProps.params.release.replace('_', ' ')
		let genre = this.props.params.release.replace('_', ' ')
		if (genre !== newGenre) {
			this.props.dispatch(getGenreInfo(newGenre))
			this.props.dispatch(getGenreSimilar(newGenre))
		}
	}

	render() {
		const {genreInfo, genreSimilar, isFetchingInfo, isFetchingSimilar} = this.props.genre
		return (
			<div>
				{isFetchingInfo ? <h2>Loading...</h2> : <GenreInfo info={genreInfo} />}
				{isFetchingSimilar ? <h2>Loading...</h2> : <GenreSimilar similar={genreSimilar} />}

				<button>Top Artists</button>
				<button>Top Albums</button>
				<button>Top Tracks</button>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		genre: state.genre
	}
}
export default connect(mapStateToProps)(GenreRelease)