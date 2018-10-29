import {MovieList} from '../../api'

const fetchMovies = (key) => dispatch =>{
    dispatch(fetchStarted())
    
    MovieList()
        .then(response => {
            dispatch(fetchFinished(response.data.items))
        })
        .catch(error => {
            dispatch(fetchFailed(error))
        })
}

const fetchStarted = () => ({
    type: "FETCH_MOVIES_STARTED",
    payload: {isLoading: true}
})

const fetchFinished = (movies) => ({
    type: "FETCH_MOVIES_FINISHED",
    payload: {isLoading: false, movieItems: movies}
})

const fetchFailed = (error) => ({
    type: "FETCH_MOVIES_FAILED",
    payload: {isLoading: false, error}
})

export default fetchMovies