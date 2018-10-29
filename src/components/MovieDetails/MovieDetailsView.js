import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Notification} from '../Proxies'
import ClickMovie from '../../actions/Movies/ClickMovie'
import fetchMovieDetails from '../../actions/Movies/FetchMovieDetails'
import MovieDetailsContainer from './MovieDetailsContainer'

class MovieDetailsView extends Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount(){
        //fetch details if movieDetails is null
       
        this.props.fetchMovieDetails(this.props.match.params.id)
        
    }

    render() {
        const {movieDetails, error} = this.props.movies
        const renderedComponent = !movieDetails && error ? (
            <Notification type="error" text="Something went wrong. Please try again." />
        ) : (
            <MovieDetailsContainer {...this.props}/>
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
    movieClicked: state.movieClicked,
    movies: state.movies
  })

export default  connect(mapStateToProps, { ClickMovie, fetchMovieDetails })(MovieDetailsView)
