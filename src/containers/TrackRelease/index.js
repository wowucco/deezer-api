import React, {Component} from 'react'
import {connect} from 'react-redux'
import TrackInfo from '../../components/TrackInfo'
import {getTrackInfo, selectReadMoreMode} from '../../actions/trackActions'

class TrackRelease extends Component {
	constructor(props) {
		super(props)
		this.onChangeReadMoreMode = this.onChangeReadMoreMode.bind(this)
	}
	componentDidMount() {
		let artist = this.props.params.release[0].replace('_', ' ');
		let track = this.props.params.release[1].replace('_', ' ');
		this.props.dispatch(getTrackInfo(artist, track))
	}

	componentWillReceiveProps(nextProps) {
		let newArtist = nextProps.params.release[0].replace('_', ' ');
		let artist = this.props.params.release[0].replace('_', ' ');
		let newTrack = nextProps.params.release[1].replace('_', ' ')
		let track = this.props.params.release[1].replace('_', ' ')
		if ((artist !== newArtist) && (track !== newTrack)) this.props.dispatch(getTrackInfo(newArtist, newTrack));
	}

	onChangeReadMoreMode() {
		this.props.dispatch(selectReadMoreMode())
	}

	render() {
		const {track, isFetching, smallDescription, smallImage} = this.props.track;
		return (
			<div>
				{(isFetching) ? <h2>Loading...</h2> :
					<TrackInfo
						track={track}
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
		track: state.track
	}
}

export default connect(mapStateToProps)(TrackRelease)