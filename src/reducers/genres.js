import {FILTER_GENRES, REQUEST_GENRES, RECEIVE_GENRES} from '../constants'

const initialState = {
  genres: [],
  isFetching: false,
  filterText: '',
  didLoaded: false
}

export default function genres(state = initialState, action) {
  switch (action.type) {
    case FILTER_GENRES:
      return {...state, filterText: action.payload, genres: filterGenres(state.genres, action.payload)}
    case REQUEST_GENRES:
      return {...state, isFetching: true}
    case RECEIVE_GENRES:
      return {...state, isFetching: false, didLoaded: true, genres: action.payload}
    default:
      return state
  }
}

function filterGenres(items, filter = '') {
  items.forEach(item => {
    item.hided = (-1 === item.name.indexOf(filter)) ? true : false
  })
  return items
}
