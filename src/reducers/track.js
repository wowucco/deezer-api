import {
	REQUEST_TRACK,
	RECEIVE_TRACK,
	SELECT_READ_MORE_TRACK
} from '../constants'

const initialState = {
	track: [],
	isFetching: true,
	smallDescription: true,
	smallImage: false
}

export default function track(state = initialState, action) {
	switch (action.type) {
		case REQUEST_TRACK:
			return {...state, isFetching: true}
		case RECEIVE_TRACK:
			return {...state, track: action.payload.track, isFetching: false, smallDescription: true, smallImage: false}
		case SELECT_READ_MORE_TRACK:
			return {...state, smallDescription: !state.smallDescription, smallImage: !state.smallImage}
		default:
			return state
	}
}