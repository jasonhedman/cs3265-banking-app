import React from 'react';

import { singletonHook } from 'react-singleton-hook';

import { createUser, getUserByEmail } from '../services/users';

import { UserData } from '../types/user';

const initialState = {
    isSignedIn: false,
    isSignInError: false,
    user: null,
    signUp: async (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => { },
    signIn: async (email: string) => { }
}

const useAuthImpl = () => {

    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [isSignInError, setIsSignInError] = React.useState(false);
    const [user, setUser] = React.useState<UserData | null>(null);

    const signUp = async (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => {
        await createUser(email, ssn, dateOfBirth, phoneNumber);
        signIn(email);
    }

    const signIn = async (email: string) => {
        let userData = await getUserByEmail(email);
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