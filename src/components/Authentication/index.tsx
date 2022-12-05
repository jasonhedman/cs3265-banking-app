import React from 'react'

import { Button, VStack } from '@chakra-ui/react';

import Card from '../utilities/Card'

import SignIn from './SignIn';
import SignUp from './SignUp';

interface Props {
  signIn: (email: string) => void
  signUp: (email: string, ssn: string, dateOfBirth: string, phoneNumber: string) => void
}

const Authentication : React.FC<Props> = ({ signIn, signUp }) => {

  const [isSignIn, setIsSignIn] = React.useState(true);

  return (
    <Card>
      <VStack
        spacing={4}
      >
        {
          isSignIn ? (
            <SignIn 
              signIn={signIn}
            />
          ) : (
            <SignUp
              signUp={signUp}
            />
          )
        }
        <Button
          onClick={() => setIsSignIn(!isSignIn)}
          variant='text'
        >
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </Button>
      </VStack>
    </Card>
  )
}

export default Authentication