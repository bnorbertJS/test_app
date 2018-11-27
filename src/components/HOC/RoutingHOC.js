import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import getRequestToken from '../../utils/GetRequestToken'
/*
Dummy auth check. 
If the userKey exists it renders the component, else, it redirects to login page
*/
const ProtectedRoute = (props) => {
    const { path } = props
    const Component = props.component
    return (
        <Route path={path}
            render={ props => getRequestToken() ? <Component {...props}/> : <Redirect to="/"/>}/>
    )
}
    

export default ProtectedRoute

   


