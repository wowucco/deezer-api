import {REQUEST_ARTISTS, RECEIVE_ARTISTS} from '../constants'

const initialState = {
	artists: [],
	isFetching: false,
	didLoaded: false
}

export default function artists(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ARTISTS:
			return {...state, isFetching: true}
		case RECEIVE_ARTISTS:
			console.log(action.payload);
			return {...state, isFetching: false, didLoaded: true, artists: action.payload.artists.artist}
		default:
			return state
	}
}