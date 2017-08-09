import React, {Component} from 'react'
import {connect} from 'react-redux'
import GenreInfo from '../../components/GenreInfo'
import GenreSimilar from '../../components/GenreSimilar'
import ArtistsTiles from '../../components/ArtistsTiles'
import AlbumsTiles from '../../components/AlbumsTiles'
import {getGenreInfo, getGenreSimilar, getGenreTopArtists,getGenreTopAlbums, hideTopSection} from '../../actions/genreActions'
import './style.scss'

class GenreRelease extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topArtistClass: 'hide',
			topAlbumClass: 'hide'
		}
		this.onBtnGenreTopArtists = this.onBtnGenreTopArtists.bind(this)
		this.onBtnGenreTopAlbums = this.onBtnGenreTopAlbums.bind(this)
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

	onBtnGenreTopArtists() {
		this.setState({
			topArtistClass: 'active',
			topAlbumClass: 'hide'
		})
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopArtists(genre))
	}

	onBtnGenreTopAlbums() {
		this.setState({
			topArtistClass: 'hide',
			topAlbumClass: 'active'
		})
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopAlbums(genre))
	}

	render() {
		const {
			genreInfo,
			genreSimilar,
			genreTopArtists,
			genreTopAlbums,
			isHideTopSection,
			isFetchingInfo,
			isFetchingSimilar,
			isFetchingTopArtists,
			isFetchingTopAlbums
		} = this.props.genre
		return (
			<div>
				{isFetchingInfo ? <h2>Loading...</h2> : <GenreInfo info={genreInfo} />}
				{isFetchingSimilar ? <h2>Loading...</h2> : <GenreSimilar similar={genreSimilar} />}

				<button onClick={this.onBtnGenreTopArtists}>Top Artists</button>
				<button onClick={this.onBtnGenreTopAlbums}>Top Albums</button>
				<button>Top Tracks</button>
				{!isHideTopSection
					?
						<div>
							<div className={this.state.topArtistClass}>
								{isFetchingTopArtists ? <h2>Loading...</h2> : <ArtistsTiles items={genreTopArtists.topartists.artist} />}
							</div>
							<div className={this.state.topAlbumClass}>
								{isFetchingTopAlbums ? <h2>Loading...</h2> : <AlbumsTiles items={genreTopAlbums.albums.album} />}
							</div>
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