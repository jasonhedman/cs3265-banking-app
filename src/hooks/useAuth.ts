import React from 'react';
import { singletonHook } from 'react-singleton-hook';
import { getUserDataByEmail } from '../data/users';
import { UserData } from '../types/user';

const initialState = {
    isSignedIn: false,
    isSignInError: false,
    user: null,
    signUp: (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => { },
    signIn: (email: string) => { }
}

const useAuthImpl = () => {

    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [isSignInError, setIsSignInError] = React.useState(false);
    const [user, setUser] = React.useState<UserData | null>(null);

    const signUp = (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => {
        setUser({
            userID: '123',
            email,
            ssn,
            dateOfBirth,
            phoneNumbers: [phoneNumber]
        })
        setIsSignedIn(true);
    }

    const signIn = (email: string) => {
        let userData = getUserDataByEmail(email);
        if (userData !== undefined) {
            setUser(userData);
            setIsSignedIn(true);
        } else {
            setIsSignInError(true);
        }
    }

    return {
        user,
        isSignedIn,
        isSignInError,
        signUp,
        signIn
    }
}

export default singletonHook(initialState, useAuthImpl);