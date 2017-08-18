import React, {Component} from 'react'
import {connect} from 'react-redux'
import AlbumInfo from '../../components/AlbumInfo'
import {getAlbumInfo, selectReadMoreMode} from '../../actions/albumActions'

class AlbumRelease extends Component {
	constructor(props) {
		super(props)
		this.onChangeReadMoreMode = this.onChangeReadMoreMode.bind(this)
	}
	componentDidMount() {
		let artist = this.props.params.release[0].replace('_', ' ');
		let album = this.props.params.release[1].replace('_', ' ');
		this.props.dispatch(getAlbumInfo(artist, album))
	}

	componentWillReceiveProps(nextProps) {
		let newArtist = nextProps.params.release[0].replace('_', ' ');
		let artist = this.props.params.release[0].replace('_', ' ');
		let newAlbum = nextProps.params.release[1].replace('_', ' ')
		let album = this.props.params.release[1].replace('_', ' ')
		if ((artist !== newArtist) && (album !== newAlbum)) this.props.dispatch(getAlbumInfo(newArtist, newAlbum));
	}

	onChangeReadMoreMode() {
		this.props.dispatch(selectReadMoreMode())
	}

	render() {
		const {album, isFetching, smallDescription, smallImage} = this.props.album;
		return (
			<div>
				{(isFetching) ? <h2>Loading...</h2> :
					<AlbumInfo
						album={album}
						smallDescription={smallDescription}
						smallImage={smallImage}
						onChangeReadMoreMode={this.onChangeReadMoreMode}
					/>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		album: state.album
	}
}

export default connect(mapStateToProps)(AlbumRelease)