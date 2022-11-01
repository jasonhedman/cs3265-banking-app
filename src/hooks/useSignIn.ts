import React from 'react';

const useSignIn = () => {
    
    const [email, setEmail] = React.useState('');

    return {
        email,
        setEmail,
    }
}

export default useSignIn