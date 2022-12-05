import React from 'react'

import {
  VStack,
  Text,
  Input,
  Button
} from '@chakra-ui/react'

import useSignUp from '../../hooks/useSignUp';

interface Props {
  signUp: (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => void
}

const SignUp : React.FC<Props> = ({ signUp }) => {

  const {
    email,
    setEmail,
    ssn,
    setSsn,
    dateOfBirth,
    setDateOfBirth,
    phoneNumber,
    setPhoneNumber,
  } = useSignUp();

  return (
    <VStack
      spacing={4}
      w="100%"
    >
      <Text
        fontWeight='bold'
        fontSize='lg'
      >
          Create an Account
      </Text>
      <Input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        placeholder='SSN'
        type='password'
        value={ssn}
        onChange={(e) => setSsn(e.target.value)}
      />
      <Input
        placeholder='Date of Birth'
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <Button
        colorScheme='blue'
        onClick={() => signUp(email, ssn, dateOfBirth, phoneNumber)}
      >
        Create Account
      </Button>
    </VStack>
  )
}

export default SignUp