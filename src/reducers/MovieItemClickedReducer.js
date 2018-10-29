const MovieItemClickedReducer = (state = {}, action) => {
    if(action.type === "MOVIE_ITEM_CLICKED"){
        return {
            id: action.payload
        }
    }

    return state
}

export default MovieItemClickedReducer