//import fetch from 'isomorphic-fetch'

import {FILTER_GENRES} from '../constants'

export function filterGenres(filter) {
  return {
    type: FILTER_GENRES,
    payload: filter
  }
}