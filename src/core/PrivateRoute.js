import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'

function PrivateRoute({component: Component, ...rest}) {
    // console.log(' login check ',typeof(auth.checkLogin()));
    return (
        <Route {...rest} render={(props) => {
            if(auth.checkLogin()){
                // console.log("You can open this route");
                return <Component  {...props}/>
            } else {
                // console.log("Ohhh you cant open")
                return <Redirect to='/auth/login' />
            }
        }} />       
    )
}

export default PrivateRoute;