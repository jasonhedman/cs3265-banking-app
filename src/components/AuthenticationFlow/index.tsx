import React from 'react'

import { Input, Text, VStack } from '@chakra-ui/react'
import Card from '../utilities/Card'

const AuthenticationFlow : React.FC = () => {
  return (
    <Card>
      <VStack
        spacing={4}
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
          placeholder='SSN'
          hidden={true}
        />
      </VStack>
    </Card>
  )
}

export default AuthenticationFlow