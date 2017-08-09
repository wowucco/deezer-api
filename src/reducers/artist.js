import {
	REQUEST_ARTIST,
	RECEIVE_ARTIST,
	SELECT_READ_MORE_ARTIST
} from '../constants'

const initialState = {
	artist: [],
	isFetching: true,
	smallDescription: true,
	smallImage: false
}

export default function artist(state = initialState, action) {
	switch (action.type) {
		case REQUEST_ARTIST:
			return {...state, isFetching: true}
		case RECEIVE_ARTIST:
			return {...state, artist: action.payload.artist, isFetching: false, smallDescription: true, smallImage: false}
		case SELECT_READ_MORE_ARTIST:
			return {...state, smallDescription: !state.smallDescription, smallImage: !state.smallImage}
		default:
			return state
	}
}