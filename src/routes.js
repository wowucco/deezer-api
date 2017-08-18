import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Genres from './containers/Genres'
import GenreRelease from './containers/GenreRelease'
import ArtistRelease from './containers/ArtistRelease'
import Artists from './containers/Artists'
import Albums from './containers/Albums'
import AlbumRelease from './containers/AlbumRelease'
import TrackRelease from './containers/TrackRelease'
import NotFound from './components/NotFound'

const routes = (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='/genres' component={Genres}/>
			<Route path='/genres/:release' component={GenreRelease}/>
			<Route path='/artists' component={Artists}/>
			<Route path='/artists/:release' component={ArtistRelease}/>
			<Route path='/albums' component={Albums}/>
			<Route path='/albums/:release/:release' component={AlbumRelease}/>
			<Route path='/tracks/:release/:release' component={TrackRelease}/>
			<Route path='*' component={NotFound}/>
		</Route>

	</div>
)

export default routes
