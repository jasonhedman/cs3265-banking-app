import React from 'react'

import {
    VStack,
    Text,
    Input,
    Button
} from '@chakra-ui/react'
import useSignIn from '../../hooks/useSignIn';

interface Props {
    signIn: (email: string) => void
}

const SignIn : React.FC<Props> = ({ signIn }) => {

    const {
        email,
        setEmail,
    } = useSignIn();

    return (
        <VStack
            spacing={4}
            w="100%"
        >
        <Text
            fontWeight='bold'
            fontSize='lg'
        >
            Sign In
        </Text>
        <Input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <Button
            colorScheme='blue'
            onClick={() => signIn(email)}
        >
            Sign In
        </Button>
        </VStack>
    )
}

export default SignIn