import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import NotFound from './components/NotFound'

const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)

export default routes
