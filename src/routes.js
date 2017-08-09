import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Genres from './containers/Genres'
import GenreRelease from './containers/GenreRelease'
import ArtistRelease from './containers/ArtistRelease'
import Artists from './containers/Artists'
import NotFound from './components/NotFound'

const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/genres' component={Genres}/>
      <Route path='/genres/:release' component={GenreRelease}/>
      <Route path='/artists' component={Artists}/>
      <Route path='/artists/:release' component={ArtistRelease}/>
      <Route path='*' component={NotFound}/>
    </Route>

  </div>
)

export default routes
