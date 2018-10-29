import {MovieDetails} from '../../api'

const fetchMovieDetails = (id) => dispatch =>{
    dispatch(fetchStarted())

    MovieDetails(id)
        .then(response => {
            dispatch(fetchFinished(response.data.items[0]))
        })
        .catch(error => {
            dispatch(fetchFailed(error))
        })
}

const fetchStarted = () => ({
    type: "FETCH_MOVIE_DETAILS_STARTED",
    payload: {isLoading: true}
})

const fetchFinished = (movie) => ({
    type: "FETCH_MOVIE_DETAILS_FINISHED",
    payload: {isLoading: false, movieDetails: movie}
})

const fetchFailed = (error) => ({
    type: "FETCH_MOVIE_DETAILS_FAILED",
    payload: {isLoading: false, error}
})

export default fetchMovieDetails