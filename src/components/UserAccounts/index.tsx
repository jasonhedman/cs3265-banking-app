import React from 'react'

import { HStack, Text, VStack } from '@chakra-ui/react';

import Card from '../utilities/Card';
import Account from './Account';
import CreateAccount from './CreateAccount';

import useAccounts from '../../hooks/useAccounts';


const UserAccounts : React.FC = () => {

    const { userAccounts } = useAccounts();

    return (
        <Card>
            <VStack
                alignItems='flex-start'
            >
                <HStack
                    justifyContent='space-between'
                    w='100%'
                >
                    <Text
                        fontSize='xl'
                        fontWeight='bold'
                    >
                        Your Accounts
                    </Text>
                    <Text
                        fontWeight='bold'
                        fontSize='lg'
                        color='green.500'
                    >
                        Total Balance: ${userAccounts.reduce((acc, account) => acc + account.balance, 0).toLocaleString()}
                    </Text>
                </HStack>
                {
                    userAccounts.length > 0 ? (
                        userAccounts.map((account) => (
                            <Account 
                                key={account.accountID}
                                account={account}
                            />
                        ))
                    ) : (
                        <Text>
                            You don't have any accounts yet.
                        </Text>
                    )
                }
                <HStack
                    w='100%'
                    justifyContent='center'
                >
                    <CreateAccount />
                </HStack>
            </VStack>
        </Card>
    )
}

export default UserAccounts