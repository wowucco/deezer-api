import fetch from 'isomorphic-fetch'

import {
	REQUEST_ALBUMS,
	RECEIVE_ALBUMS,
	REQUEST_ALBUM,
	RECEIVE_ALBUM,
	SELECT_READ_MORE_ALBUM
} from '../constants'


export function getAlbumsList() {
	return (dispatch) => {
		return dispatch(fetchAlbums())
	}
}

function fetchAlbums() {
	return dispatch => {
		dispatch(requestAlbums());
		fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopalbums&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json')
			.then(response => response.json())
			.then(json => dispatch(receiveAlbums(json)))
	}
}

function requestAlbums() {
	return {
		type: REQUEST_ALBUMS
	}
}

function receiveAlbums(json) {
	return {
		type: RECEIVE_ALBUMS,
		payload: json
	}
}

export function getAlbumInfo(artist) {
	return (dispatch) => {
		return dispatch(fetchAlbum(artist))
	}
}

function fetchAlbum(artist) {
	return dispatch => {
		dispatch(requestAlbum());
		fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
			.then(response => response.json())
			.then(json => dispatch(receiveAlbum(json)))
	}
}

function requestAlbum() {
	return {
		type: REQUEST_ALBUM
	}
}

function receiveAlbum(json) {
	return {
		type: RECEIVE_ALBUM,
		payload: json
	}
}

export function selectReadMoreMode() {
	return {
		type: SELECT_READ_MORE_ALBUM
	}
}
