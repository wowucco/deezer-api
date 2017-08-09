import fetch from 'isomorphic-fetch'

import {
	FILTER_GENRES,
	REQUEST_GENRES,
	RECEIVE_GENRES,
	REQUEST_GENRE,
	RECEIVE_GENRE,
	REQUEST_GENRE_SIMILAR,
	RECEIVE_GENRE_SIMILAR,
	REQUEST_GENRE_TOP_ARTISTS,
	RECEIVE_GENRE_TOP_ARTISTS,
	HIDE_TOP_SECTION
} from '../constants'

export function hideTopSection() {
	return {
		type: HIDE_TOP_SECTION,
		payload: true
	}
}

export function filterGenres(filter) {
	return {
		type: FILTER_GENRES,
		payload: filter
	}
}

export function getGenresLIst() {
	return (dispatch) => {
		return dispatch(fetchGenres())
	}
}

function fetchGenres() {
	return dispatch => {
		dispatch(requestGenres());
		fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json')
			.then(response => response.json())
			.then(json => dispatch(receiveGenres(json)))
	}
}

function requestGenres() {
	return {
		type: REQUEST_GENRES
	}
}

function receiveGenres(json) {
	return {
		type: RECEIVE_GENRES,
		payload: json
	}
}

export function getGenreInfo(genre) {
	return (dispatch) => {
		return dispatch(fetchGenre(genre))
	}
}

function fetchGenre(genre) {
	return dispatch => {
		dispatch(requestGenre());
		fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${genre}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
			.then(response => response.json())
			.then(json => dispatch(receiveGenre(json)))
	}
}

function requestGenre() {
	return {
		type: REQUEST_GENRE
	}
}

function receiveGenre(json) {
	return {
		type: RECEIVE_GENRE,
		payload: json
	}
}

export function getGenreSimilar(genre) {
	return (dispatch) => {
		return dispatch(fetchGenreSimilar(genre))
	}
}

function fetchGenreSimilar(genre) {
	return dispatch => {
		dispatch(requestGenreSimilar());
		fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=${genre}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
			.then(response => response.json())
			.then(json => dispatch(receiveGenreSimilar(json)))
	}
}

function requestGenreSimilar() {
	return {
		type: REQUEST_GENRE_SIMILAR
	}
}

function receiveGenreSimilar(json) {
	return {
		type: RECEIVE_GENRE_SIMILAR,
		payload: json
	}
}

export function getGenreTopArtists(genre) {
	return (dispatch) => {
		return dispatch(fetchGenreTopArtists(genre))
	}
}

function fetchGenreTopArtists(genre) {
	return dispatch => {
		dispatch(requestGenreTopArtists());
		fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genre}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
			.then(response => response.json())
			.then(json => dispatch(receiveGenreTopArtists(json)))
	}
}

function requestGenreTopArtists() {
	return {
		type: REQUEST_GENRE_TOP_ARTISTS,
		payload: false
	}
}

function receiveGenreTopArtists(json) {
	return {
		type: RECEIVE_GENRE_TOP_ARTISTS,
		payload: json
	}
}