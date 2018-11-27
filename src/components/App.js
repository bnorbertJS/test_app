import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginContainer from './Login/LoginContainer'
import ProtectedRoute from './HOC/RoutingHOC'
import MovieListView from './MovieList/MovieListView'
import NotFound from './NotFound/NotFound'
import MovieDetailsView from './MovieDetails/MovieDetailsView'
import getRequestToken from '../utils/GetRequestToken'

class App extends Component {
    constructor(props) {
        super(props)
        this.onClickLogout = this.onClickLogout.bind(this)
    }

    onClickLogout(){
        localStorage.removeItem("userKey")
        this.props.history.push("/")
    }
    
    render() {
        return (
                <Fragment>
                    <div className="head">
                        <span className="title">Accedo Test App</span>
                        {getRequestToken() &&
                            <span className="logout-btn"onClick={this.onClickLogout}>Logout</span>   
                        }
                    </div>
                    
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

export default App