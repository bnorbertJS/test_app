import {SearchMovies} from '../../api'

const searchMovies = (searchValue) => dispatch =>{
    dispatch(fetchStarted())
    
    SearchMovies(searchValue)
        .then(response => {
            dispatch(fetchFinished(response.data.items))
        })
        .catch(error => {
            dispatch(fetchFailed(error))
        })
}

const fetchStarted = () => ({
    type: "SEARCH_MOVIES_STARTED",
    payload: {isLoading: true}
})

const fetchFinished = (movies) => ({
    type: "SEARCH_MOVIES_FINISHED",
    payload: {isLoading: false, movieItems: movies}
})

const fetchFailed = (error) => ({
    type: "SEARCH_MOVIES_FAILED",
    payload: {isLoading: false, error}
})

export default searchMovies
