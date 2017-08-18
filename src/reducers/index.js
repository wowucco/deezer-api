import {combineReducers} from 'redux'
import genres from './genres'
import genre from './genre'
import artists from './artists'
import artist from './artist'
import albums from './albums'
import album from './album'

const rootReducer = combineReducers({
	genres,
	genre,
  artists,
	artist,
	albums,
	album
})

export default rootReducer