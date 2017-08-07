import {combineReducers} from 'redux'
import genres from './genres'
import artists from './artists'

const rootReducer = combineReducers({
	genres,
  artists
})

export default rootReducer