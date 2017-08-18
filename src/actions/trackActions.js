import fetch from 'isomorphic-fetch'

import {
	REQUEST_TRACKS,
	RECEIVE_TRACKS,
	REQUEST_TRACK,
	RECEIVE_TRACK,
	SELECT_READ_MORE_TRACK
} from '../constants'


export function getTracksList() {
	return (dispatch) => {
		return dispatch(fetchTracks())
	}
}

function fetchTracks() {
	return dispatch => {
		dispatch(requestTracks());
		fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopalbums&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json')
			.then(response => response.json())
			.then(json => dispatch(receiveTracks(json)))
	}
}

function requestTracks() {
	return {
		type: REQUEST_TRACKS
	}
}

function receiveTracks(json) {
	return {
		type: RECEIVE_TRACKS,
		payload: json
	}
}

export function getTrackInfo(artist, track) {
	return (dispatch) => {
		return dispatch(fetchTrack(artist, track))
	}
}

function fetchTrack(artist, track) {
	return dispatch => {
		dispatch(requestTrack());
		fetch(`http://ws.audioscrobbler.com/2.0/?method=track.getinfo&artist=${artist}&track=${track}&api_key=88a6b7d6efce75b36fc6b2f11bef4267&format=json`)
			.then(response => response.json())
			.then(json => dispatch(receiveTrack(json)))
	}
}

function requestTrack() {
	return {
		type: REQUEST_TRACK
	}
}

function receiveTrack(json) {
	return {
		type: RECEIVE_TRACK,
		payload: json
	}
}

export function selectReadMoreMode() {
	return {
		type: SELECT_READ_MORE_TRACK
	}
}
