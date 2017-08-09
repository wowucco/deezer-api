import React, {Component} from 'react'
//import {Link} from 'react-router'
import {connect} from 'react-redux'
import GenreInfo from '../../components/GenreInfo'
import GenreSimilar from '../../components/GenreSimilar'
import ArtistsTiles from '../../components/ArtistsTiles'
import {getGenreInfo, getGenreSimilar, getGenreTopArtists, hideTopSection} from '../../actions/genreActions'

class GenreRelease extends Component {
	constructor(props) {
		super(props)
		this.onBtnGenreTopArtist = this.onBtnGenreTopArtist.bind(this)
	}
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
	componentWillUnmount() {
		this.props.dispatch(hideTopSection())
	}

	onBtnGenreTopArtist() {
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopArtists(genre))
	}

	onBtnGenreTop

	render() {
		const {
			genreInfo,
			genreSimilar,
			genreTopArtists,
			isHideTopSection,
			isFetchingInfo,
			isFetchingSimilar,
			isFetchingTopArtists
		} = this.props.genre
		return (
			<div>
				{isFetchingInfo ? <h2>Loading...</h2> : <GenreInfo info={genreInfo} />}
				{isFetchingSimilar ? <h2>Loading...</h2> : <GenreSimilar similar={genreSimilar} />}

				<button onClick={this.onBtnGenreTopArtist}>Top Artists</button>
				<button>Top Albums</button>
				<button>Top Tracks</button>
				{!isHideTopSection
					?
						<div className='top-artist'>
							{isFetchingTopArtists ? <h2>Loading...</h2> : <ArtistsTiles items={genreTopArtists.topartists.artist} />}
						</div>
					: <div></div>
				}
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