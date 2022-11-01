import React from 'react';

const useAuth = () => {

    const [isSignedIn, setIsSignedIn] = React.useState(false);

    const signUp = (email: string, ssn: string) => {
        setIsSignedIn(true);
    }

    const signIn = (email: string) => {
        setIsSignedIn(true);
    }

    return {
        isSignedIn,
        signUp,
        signIn
    }
}

export default useAuth