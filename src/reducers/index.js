import {combineReducers} from 'redux'
import genres from './genres'
import genre from './genre'
import artists from './artists'
import artist from './artist'
import albums from './albums'
import album from './album'
import track from './track'

const rootReducer = combineReducers({
	genres,
	genre,
  artists,
	artist,
	albums,
	album,
	track
})

export default rootReducer