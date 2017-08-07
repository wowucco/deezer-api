import fetch from 'isomorphic-fetch'

import {REQUEST_ARTISTS, RECEIVE_ARTISTS, REQUEST_ARTIST, RECEIVE_ARTIST} from '../constants'


export function getArtistsList() {
	return (dispatch) => {
		return dispatch(fetchArtists())
	}
}

function fetchArtists() {
	return dispatch => {
		dispatch(requestArtists());
		setTimeout(() => {
			return fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json')
				.then(response => response.json())
				.then(json => dispatch(receiveArtists(json)))
		}, 1000)
	}
}

function requestArtists() {
	return {
		type: REQUEST_ARTISTS
	}
}

function receiveArtists(json) {
	return {
		type: RECEIVE_ARTISTS,
		payload: json
	}
}

export function getArtistInfo(artist) {
	return (dispatch) => {
		return dispatch(fetchArtist(artist))
	}
}

function fetchArtist(artist) {
	return dispatch => {
		dispatch(requestArtist());
		setTimeout(() => {
			return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
				.then(response => response.json())
				.then(json => dispatch(receiveArtist(json)))
		}, 1000)
	}
}

function requestArtist() {
	return {
		type: REQUEST_ARTIST
	}
}

function receiveArtist(json) {
	return {
		type: RECEIVE_ARTIST,
		payload: json
	}
}
