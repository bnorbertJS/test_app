import React, { Component, Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import LoginContainer from './Login/LoginContainer'
import ProtectedRoute from './HOC/RoutingHOC'
import MovieListView from './MovieList/MovieListView'
import NotFound from './NotFound/NotFound'
import MovieDetailsView from './MovieDetails/MovieDetailsView'

export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    
    render() {
        return (
                <Fragment>
                    <h2 className="title">Accedo Test App</h2>
                    <Switch>
                        <Route exact path="/" component={LoginContainer}/>
                        <ProtectedRoute path="/movies" component={MovieListView} />
                        <ProtectedRoute path="/details/:id" component={MovieDetailsView} />
                        <Route component={NotFound}/>
                    </Switch>
                </Fragment>
        )
    }
}
