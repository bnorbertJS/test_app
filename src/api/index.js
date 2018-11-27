import axios from 'axios'
import getRequestToken from '../utils/GetRequestToken'

/*
Login Post request
*/ 
const Login = (email, password) => {
    return axios
        .post(`${API_URL}/login`,{
            email,
            password
        })
}

/*
Fetch Movie Details by id
*/
const MovieDetails = (id) => {
    return axios
        .get(`${API_URL}/detail/${id}`,{
            headers: {
                "X-SimpleOvpApi": getRequestToken()
            }
        })
}

/*
Fetch Movies
*/
const MovieList = () => {
    return axios
        .get(`${API_URL}/movie`,{
            headers: {
                "X-SimpleOvpApi": getRequestToken()
            }
        })
}

/*
Search movies
*/
const SearchMovies = (searchValue) => {
    //format for x-www-form-urlencoded
    const data = new URLSearchParams()
    data.append("keyword", searchValue)
    
    return axios
        .post(`${API_URL}/search`, data ,{
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "X-SimpleOvpApi": getRequestToken()
            }
    })
}

export {
    Login,
    MovieDetails,
    MovieList,
    SearchMovies
}