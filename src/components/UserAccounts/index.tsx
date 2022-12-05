import React from 'react'

import { HStack, Text, VStack } from '@chakra-ui/react';

import Card from '../utilities/Card';
import Account from './Account';
import CreateAccount from './CreateAccount';

import useAccounts from '../../hooks/useAccounts';


const userId = "1"

const UserAccounts : React.FC = () => {

    const { userAccounts } = useAccounts(userId);

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
                    userAccounts.length > 0 ? (
                        userAccounts.map((account) => (
                            <Account 
                                key={account.accountId}
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
                    <CreateAccount 
                        userId={userId}
                    />
                </HStack>
            </VStack>
        </Card>
    )
}

export default UserAccounts