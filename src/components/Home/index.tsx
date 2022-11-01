import React from 'react'

import Header from './Header'

import {
  VStack
} from '@chakra-ui/react'

import Banks from '../Banks'
import UserAccounts from '../UserAccounts'

const Home : React.FC = () => {
  return (
    <VStack>
        <Header />
        <UserAccounts />
        <Banks />
    </VStack>
    
  )
}

export default Home