import React from 'react'

import { Text, VStack } from '@chakra-ui/react';

import Card from '../utilities/Card';
import Account from './Account';

import useAccounts from '../../hooks/useAccounts';

const UserAccounts : React.FC = () => {

    const { userAccounts } = useAccounts("1");

    return (
        <Card>
            <VStack
                alignItems='flex-start'
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                >
                    Your Accounts
                </Text>
                {
                    userAccounts.map((account) => (
                        <Account 
                            key={account.accountId}
                            account={account}
                        />
                    ))
                }
            </VStack>
        </Card>
    )
}

export default UserAccounts