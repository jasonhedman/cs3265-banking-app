import React from 'react'

import Authentication from './Authentication';

import useAuth from '../hooks/useAuth';
import Home from './Home';

const Router : React.FC = () => {

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
        <Home />
    )
}

export default Router