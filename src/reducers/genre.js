import {
	REQUEST_GENRE,
	RECEIVE_GENRE,
	REQUEST_GENRE_SIMILAR,
	RECEIVE_GENRE_SIMILAR,
	REQUEST_GENRE_TOP_ARTISTS,
	RECEIVE_GENRE_TOP_ARTISTS
} from '../constants'

const initialState = {
	genreInfo: [],
	genreSimilar: [],
	genreTopArtists: [],
	isFetchingInfo: true,
	isFetchingSimilar: true,
	isFetchingTopArtists: true
}

export default function genre(state = initialState, action) {
	switch (action.type) {
		case REQUEST_GENRE:
			return {...state, isFetchingInfo: true}
		case RECEIVE_GENRE:
			return {...state, genreInfo: action.payload.tag, isFetchingInfo: false}
		case REQUEST_GENRE_SIMILAR:
			return {...state, isFetchingSimilar: false}
		case RECEIVE_GENRE_SIMILAR:
			return {...state, genreSimilar: action.payload, isFetchingSimilar: false}
		case REQUEST_GENRE_TOP_ARTISTS:
			return {...state, isFetchingTopArtists: true}
		case RECEIVE_GENRE_TOP_ARTISTS:
			return {...state, genreTopArtists: action.payload, isFetchingTopArtists: false}
		default:
			return state
	}
}