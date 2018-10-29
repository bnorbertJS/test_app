const initState = {
    movieItems: [],
    movieDetails: null,
    clickedMovie: null,
    isLoading: false
}

const moviesReducer = (state = initState, action) => {
    switch(action.type) {
        case "FETCH_MOVIES_STARTED":
            return {
                ...state,
                ...action.payload
            }
        case "FETCH_MOVIES_FINISHED":
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case "FETCH_MOVIES_FAILED":
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case "FETCH_MOVIE_DETAILS_STARTED":
            return {
                ...state,
                ...action.payload
            }
        case "FETCH_MOVIE_DETAILS_FINISHED":
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case "FETCH_MOVIE_DETAILS_FAILED":
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
            case "SEARCH_MOVIES_STARTED":
            return {
                ...state,
                ...action.payload
            }
        case "SEARCH_MOVIES_FINISHED":
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case "SEARCH_MOVIES_FAILED":
            return {
                ...state,
                movieItems: [],
                isLoading: false
            }
        default:
        return state
    }
}

export default moviesReducer