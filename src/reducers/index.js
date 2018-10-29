import { combineReducers } from 'redux'
import loginReducer from './LoginReducer'
import moviesReducer from './MoviesReducer'
import MovieItemClickedReducer from './MovieItemClickedReducer'

export default combineReducers({
    user: loginReducer,
    movies: moviesReducer,
    movieClicked: MovieItemClickedReducer
})