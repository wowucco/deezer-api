import React, {Component} from 'react'
import {connect} from 'react-redux'
import GenreInfo from '../../components/GenreInfo'
import GenreSimilar from '../../components/GenreSimilar'
import ArtistsTiles from '../../components/ArtistsTiles'
import AlbumsTiles from '../../components/AlbumsTiles'
import TracksTiles from '../../components/TracksTiles'
import {
	getGenreInfo,
	getGenreSimilar,
	getGenreTopArtists,
	getGenreTopAlbums,
	getGenreTopTracks,
	hideTopSection
} from '../../actions/genreActions'
import './style.scss'

class GenreRelease extends Component {
	constructor(props) {
		super(props)
		this.state = {
			topArtistClass: 'hide',
			topAlbumClass: 'hide',
			topTracksClass: 'hide'
		}
		this.onBtnGenreTopArtists = this.onBtnGenreTopArtists.bind(this)
		this.onBtnGenreTopAlbums = this.onBtnGenreTopAlbums.bind(this)
		this.onBtnGenreTopTracks = this.onBtnGenreTopTracks.bind(this)
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
			topAlbumClass: 'hide',
			topTracksClass: 'hide'
		})
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopArtists(genre))
	}

	onBtnGenreTopAlbums() {
		this.setState({
			topArtistClass: 'hide',
			topAlbumClass: 'active',
			topTracksClass: 'hide'
		})
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopAlbums(genre))
	}

	onBtnGenreTopTracks() {
		this.setState({
			topArtistClass: 'hide',
			topAlbumClass: 'hide',
			topTracksClass: 'active'
		})
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreTopTracks(genre))
	}

	render() {
		const {
			genreInfo,
			genreSimilar,
			genreTopArtists,
			genreTopAlbums,
			genreTopTracks,
			isHideTopSection,
			isFetchingInfo,
			isFetchingSimilar,
			isFetchingTopArtists,
			isFetchingTopAlbums,
			isFetchingTopTracks
		} = this.props.genre
		console.log(genreTopTracks)
		return (
			<div>
				{isFetchingInfo ? <h2>Loading...</h2> : <GenreInfo info={genreInfo} />}
				{isFetchingSimilar ? <h2>Loading...</h2> : <GenreSimilar similar={genreSimilar} />}

				<button onClick={this.onBtnGenreTopArtists}>Top Artists</button>
				<button onClick={this.onBtnGenreTopAlbums}>Top Albums</button>
				<button onClick={this.onBtnGenreTopTracks}>Top Tracks</button>
				{!isHideTopSection
					?
						<div>
							<div className={this.state.topArtistClass}>
								{isFetchingTopArtists ? <h2>Loading...</h2> : <ArtistsTiles items={genreTopArtists.topartists.artist} />}
							</div>
							<div className={this.state.topAlbumClass}>
								{isFetchingTopAlbums ? <h2>Loading...</h2> : <AlbumsTiles items={genreTopAlbums.albums.album} />}
							</div>
							<div className={this.state.topTracksClass}>
								{isFetchingTopTracks ? <h2>Loading...</h2> : <TracksTiles items={genreTopTracks.tracks} />}
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