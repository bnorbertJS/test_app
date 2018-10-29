import {Login} from '../../api'

const login = ({ email, password }) => dispatch => {
    dispatch(loginStarted())

    Login(email.value, password.value)
        .then(response =>{
            const userKey = response.headers["x-simpleovpapi"]
            //persist userKey
            localStorage.setItem("userKey", userKey)
            dispatch(loginFinished(userKey))
        })
        .catch(error => dispatch(loginFailed(error)))
}

const loginStarted = () => ({
    type: "LOGIN_STARTED",
    payload: {isLoading: true}
})

const loginFinished = (userKey) => ({
    type: "LOGIN_FINISHED",
    payload: {userKey}
})

const loginFailed = (error) => ({
    type: "LOGIN_FAILED",
    payload: {error}
})

export default login