import {FILTER_GENRES, REQUEST_GENRES, RECEIVE_GENRES} from '../constants'

const initialState = {
  genres: [
    {
      'name': 'rock',
      'url': 'https://www.last.fm/tag/rock',
      'reach': '390955',
      'taggings': '3900436',
      'streamable': '1',
      'wiki': {}
    },
    {
      'name': 'electronic',
      'url': 'https://www.last.fm/tag/electronic',
      'reach': '249401',
      'taggings': '2305415',
      'streamable': '1',
      'wiki': {}
    }],
  isFetching: false,
  filterText: ''
}

export default function genres(state = initialState, action) {
  switch (action.type) {
    case FILTER_GENRES:
      return {...state, filterText: action.payload, genres: filterGenres(state.genres, action.payload)}
    case REQUEST_GENRES:
      return {...state, isFetching: true}
    case RECEIVE_GENRES:
      console.log(action.payload);
      return {...state, isFetching: false, genres: action.payload.tags.tag}
    default:
      return state
  }
}

/*function answerFromDeezer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_GENRES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.payload
      })
    default:
      return state
  }
}*/

function filterGenres(items, filter = '') {
  items.forEach(item => {
    item.hided = (-1 === item.name.indexOf(filter)) ? true : false
  })
  return items
}
