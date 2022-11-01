import React from 'react'

import Header from './Header'

import {
  VStack
} from '@chakra-ui/react'

import Banks from '../Banks'
import UserAccounts from '../UserAccounts'
import UserLoans from '../UserLoans'

const Home : React.FC = () => {
  return (
    <VStack>
        <Header />
        <UserAccounts />
        <UserLoans />
        <Banks />
    </VStack>
    
  )
}

export default Home