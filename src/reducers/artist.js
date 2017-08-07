import {REQUEST_ARTIST, RECEIVE_ARTIST} from '../constants'

const initialState = {
	artist: [],
	isFetching: false
	//didLoaded: false
}

export default function artists(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ARTIST:
			return {...state, isFetching: true}
		case RECEIVE_ARTIST:
			console.log(action.payload);
			return {...state, isFetching: false,  artist: action.payload.artist}
		default:
			return state
	}
}