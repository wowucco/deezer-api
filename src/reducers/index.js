import {combineReducers} from 'redux'
import genres from './genres'
import artists from './artists'
import artist from './artist'

const rootReducer = combineReducers({
	genres,
  artists,
	artist
})

export default rootReducer