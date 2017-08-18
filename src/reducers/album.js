import {
	REQUEST_ALBUM,
	RECEIVE_ALBUM,
	SELECT_READ_MORE_ALBUM
} from '../constants'

const initialState = {
	artist: [],
	isFetching: true,
	smallDescription: true,
	smallImage: false
}

export default function artist(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ALBUM:
			return state
			//return {...state, isFetching: true}
		case RECEIVE_ALBUM:
			return state
			//return {...state, artist: action.payload.artist, isFetching: false, smallDescription: true, smallImage: false}
		case SELECT_READ_MORE_ALBUM:
			return state
			//return {...state, smallDescription: !state.smallDescription, smallImage: !state.smallImage}
		default:
			return state
	}
}