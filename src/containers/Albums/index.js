import React, {Component} from 'react'
import {connect} from 'react-redux'
import AlbumsTiles from '../../components/AlbumsTiles'
import {getAlbumsList} from '../../actions/albumActions'

class Albums extends Component {
	componentDidMount() {
		if (!this.props.artists.didLoaded) {
			this.props.dispatch(getAlbumsList())
		}
	}
	render() {
		const {artists, isFetching} = this.props.artists;
		return (
			<div className='row'>
				<div className='col-md-12'>
					<h3>Top 50 Albums</h3>
				</div>
				{(isFetching) ? <h2>Loading...</h2> : <AlbumsTiles items={artists}/>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		artists: state.artists
	}
}
export default connect(mapStateToProps)(Albums)