import React, {Component} from 'react'
//import {Link} from 'react-router'
import {connect} from 'react-redux'
import GenreInfo from '../../components/GenreInfo'
import {getGenreInfo} from '../../actions/genreActions'

class GenreRelease extends Component {
	componentDidMount() {
		let genre = this.props.params.release.replace('_', ' ')
		this.props.dispatch(getGenreInfo(genre))
	}
	render() {
		const {genreInfo, isFetching} = this.props.genre
		return (
			<div>
				{isFetching ? <h2>Loading...</h2> : <GenreInfo info={genreInfo}/>}
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