const loginReducer = (state = {}, action) => {
    switch(action.type) {
        case "LOGIN_STARTED":
            return {
                ...action.payload
            }
        case "LOGIN_FINISHED":
            return {
                ...action.payload
            }
        case "LOGIN_FAILED":
            return {
                ...action.payload
            }
        default:
        return state
    }
}

export default loginReducer