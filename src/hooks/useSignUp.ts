import React from 'react';

const useSignUp = () => {

    const [email, setEmail] = React.useState('');
    const [ssn, setSsn] = React.useState('');
    const [dateOfBirth, setDateOfBirth] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');

    return {
        email,
        setEmail,
        ssn,
        setSsn,
        dateOfBirth,
        setDateOfBirth,
        phoneNumber,
        setPhoneNumber
    }
}

export default useSignUp