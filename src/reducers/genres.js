import {FILTER_GENRES/*, REQUEST_GENRES, RECEIVE_GENRES*/} from '../constants'

const initialState = {
  genres: [
    {
      'id': '0',
      'name': 'Все',
      'picture': 'https://api.deezer.com/genre/0/image',
      'picture_small': 'https://e-cdns-images.dzcdn.net/images/misc//56x56-000000-80-0-0.jpg',
      'picture_medium': 'https://e-cdns-images.dzcdn.net/images/misc//250x250-000000-80-0-0.jpg',
      'picture_big': 'https://e-cdns-images.dzcdn.net/images/misc//500x500-000000-80-0-0.jpg',
      'picture_xl': 'https://e-cdns-images.dzcdn.net/images/misc//1000x1000-000000-80-0-0.jpg',
      'type': 'genre'
    },
    {
      'id': '132',
      'name': 'Поп',
      'picture': 'https://api.deezer.com/genre/132/image',
      'picture_small': 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/56x56-000000-80-0-0.jpg',
      'picture_medium': 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/250x250-000000-80-0-0.jpg',
      'picture_big': 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/500x500-000000-80-0-0.jpg',
      'picture_xl': 'https://e-cdns-images.dzcdn.net/images/misc/db7a604d9e7634a67d45cfc86b48370a/1000x1000-000000-80-0-0.jpg',
      'type': 'genre'
    }],
  filterText: ''
}

export default function genres(state = initialState, action) {
  switch (action.type) {
    case FILTER_GENRES:
      return {...state, filterText: action.payload, genres: filterGenres(state.genres, action.payload)}
    default:
      return state
  }
}

function filterGenres(items, filter) {
  items.forEach(item => {
    item.hided = (-1 === item.name.indexOf(filter)) ? true : false
  })
  return items
}