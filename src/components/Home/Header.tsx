import React from 'react'

import Card from '../utilities/Card'

import {
    Text, VStack
} from '@chakra-ui/react'
import useAuth from '../../hooks/useAuth'

const Header : React.FC = () => {

    const { user } = useAuth();

    return (
        <Card>
            <VStack
                alignItems='flex-start'
            >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    CS 3265 Banking App
                </Text>
                <Text
                    fontSize='lg'
                    fontWeight='bold'
                    color='gray.700'
                >
                    Connected Email: {user?.email}
                </Text>
                <Text
                    color='blackAlpha.600'
                >
                    Made by Harrison Duval, Harper Messer, and Jason Hedman
                </Text>
            </VStack>
        </Card>
    )
}

export default Header