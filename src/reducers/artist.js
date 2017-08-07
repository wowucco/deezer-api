import {REQUEST_ARTIST, RECEIVE_ARTIST} from '../constants'

const initialState = {
	artist: [],
	isFetching: true
	//didLoaded: false
}

export default function artists(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ARTIST:
			return {...state, isFetching: true}
		case RECEIVE_ARTIST:
			return {...state, artist: action.payload.artist, isFetching: false}
		default:
			return state
	}
}