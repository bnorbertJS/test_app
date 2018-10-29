import React, { Component, Fragment } from 'react'
import MovieListItem from './MovieListItem'
import withLoading from '../HOC/LoadingHOC'
import {withRouter} from 'react-router-dom'         
import {LoadingIndicator, Notification} from '../Proxies'
import { connect } from 'react-redux'
import ClickMovie from '../../actions/Movies/ClickMovie'
import getRequestToken from '../../utils/GetRequestToken'

class MovieListContainer extends Component {
    constructor(props) {
        super(props)
        
        this.onClickMovieItem = this.onClickMovieItem.bind(this)
    }

    onClickMovieItem(id){
        this.props.ClickMovie(id)
        this.props.history.push(`/details/${id}`)
    }
    
    render() {
        const {movieItems} = this.props.movies
        /*
        If the result is an empty array, display a notification, else display the component
        */
        const renderedComponent = movieItems.length ? (
            <div className="movie-list-container">
                {
                    movieItems.map( movie => 
                        <MovieListItem key={movie.id}
                            onClick={() => this.onClickMovieItem(movie.id)}
                            {...movie}/>
                    )
                }
            </div>
        ) : (
            <Notification type="error" text="Cannot find what you are looking for. Sorry."/>
        )
        
        return (
            <div>
            {
                renderedComponent
            }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    movies: state.movies
})

export default withRouter(
    connect(mapStateToProps, { ClickMovie })(withLoading(MovieListContainer))
)