import React from 'react'

import Card from '../utilities/Card'

import {
    Text
} from '@chakra-ui/react'
import useAuth from '../../hooks/useAuth'

const Header : React.FC = () => {

    const { user } = useAuth();

    return (
        <Card>
            <Text
                fontSize='2xl'
                fontWeight='bold'
            >
                Welcome to our Banking App
            </Text>
            <Text>
                Connected Email: {user?.email}
            </Text>
            <Text>
                Made by Harrison Duval, Harper Messer, and Jason Hedman
            </Text>
        </Card>
    )
}

export default Header