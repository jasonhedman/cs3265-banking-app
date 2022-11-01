import React from 'react'

import {
  VStack,
  Text,
  Input,
  Button
} from '@chakra-ui/react'

import useSignUp from '../../hooks/useSignUp';

interface Props {
  signUp: (email: string, ssn: string) => void
}

const SignUp : React.FC<Props> = ({ signUp }) => {

  const {
    email,
    setEmail,
    ssn,
    setSsn,
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
      />
      <Input
        placeholder='Phone Number'
      />
      <Input
        placeholder='SSN'
        type='password'
      />
      <Input
        placeholder='Date of Birth'
      />
      <Button
        colorScheme='blue'
        onClick={() => signUp(email, ssn)}
      >
        Create Account
      </Button>
    </VStack>
  )
}

export default SignUp