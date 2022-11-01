import React from 'react';

const useSignUp = () => {

    const [email, setEmail] = React.useState('');
    const [ssn, setSsn] = React.useState('');

    return {
        email,
        setEmail,
        ssn,
        setSsn
    }
}

export default useSignUp