import React from 'react'

import Authentication from './Authentication';

import useAuth from '../hooks/useAuth';

const AuthRouter : React.FC = () => {

    const {
        isSignedIn,
        signUp,
        signIn,
    } = useAuth();

    if(!isSignedIn){
        return (
            <Authentication 
                signUp={signUp}
                signIn={signIn}
            />
        )
    }

    return (
        null
    )
}

export default AuthRouter