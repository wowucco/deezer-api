import {
	REQUEST_GENRE,
	RECEIVE_GENRE
} from '../constants'

const initialState = {
	genreInfo: [],
	isFetching: true
}

export default function genre(state = initialState, action) {
	switch (action.type) {
		case REQUEST_GENRE:
			return {...state, isFetching: true}
		case RECEIVE_GENRE:
			return {...state, genreInfo: action.payload.tag, isFetching: false}
		default:
			return state
	}
}