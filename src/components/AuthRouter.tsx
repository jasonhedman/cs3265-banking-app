import React from 'react'
import Register from './AuthenticationFlow'

const AuthRouter : React.FC = () => {

    const isAuthenticated = false

    if(!isAuthenticated){
        return (
            <Register />
        )
    }

    return (
        null
    )
}

export default AuthRouter