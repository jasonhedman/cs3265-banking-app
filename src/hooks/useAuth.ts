import React from 'react';
import { User } from '../types/user';

const useAuth = () => {

    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const [user, setUser] = React.useState<User | null>(null);

    const signUp = (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => {
        setUser({
            userId: '123',
            email,
            ssn,
            dateOfBirth,
            phoneNumber
        })
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