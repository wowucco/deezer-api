import {REQUEST_ALBUMS, RECEIVE_ALBUMS} from '../constants'

const initialState = {
	artists: [],
	isFetching: false,
	didLoaded: false
}

export default function albums(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ALBUMS:
			return state
			//return {...state, isFetching: true}
		case RECEIVE_ALBUMS:
			return state
			//return {...state, isFetching: false, didLoaded: true, artists: action.payload.artists.artist}
		default:
			return state
	}
}