import React, { Component, Fragment } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import MovieListContainer from './MovieListContainer'
import searchMovies from '../../actions/Movies/SearchMovies'
import fetchMovies from '../../actions/Movies/FetchMovies'
import {InputField} from '../Proxies'

class MovieListView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: ""
        }

        this.onKeyDownSearchField = this.onKeyDownSearchField.bind(this)
        this.onChangeSearch = this.onChangeSearch.bind(this)
    }

    componentDidMount(){
        this.props.fetchMovies()

        //setting initial focus on the search field.
        const searchField = document.getElementById("searchField")
        searchField.focus()
    }

    onKeyDownSearchField(e){
        const searchValue = e.target.value
        let target = e.target.nextSibling || e.target.parentElement.nextSibling.children[0].firstElementChild

        if(e.which === 40 || e.which === 39) target.focus()
        if(e.which === 38 || e.which === 37) e.target.focus()
        if(e.which === 13) this.props.searchMovies(searchValue)
    }
    
    onChangeSearch(e){
        const searchValue = e.target.value
        this.setState({searchValue})
        
        //query all the elements if the search field is empty
        if(searchValue === ""){
            this.props.fetchMovies()
        }
        
        //live search.
        //send a search request on every character
        this.props.searchMovies(searchValue)
        
    }

    render() {
        return (
            <Fragment>
                <div className="search-input-container">
                    <InputField
                        id="searchField"
                        onKeyDown={this.onKeyDownSearchField}
                        onChange={this.onChangeSearch}
                        value={this.state.searchValue}
                        className="search-input"
                        type="search" 
                        placeholder="Search movies ..."/>
            </div>
            <MovieListContainer />
         </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user,
    movies: state.movies
})

export default withRouter(connect(mapStateToProps, { searchMovies, fetchMovies })(MovieListView))
