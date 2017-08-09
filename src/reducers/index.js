import {combineReducers} from 'redux'
import genres from './genres'
import genre from './genre'
import artists from './artists'
import artist from './artist'

const rootReducer = combineReducers({
	genres,
	genre,
  artists,
	artist
})

export default rootReducer