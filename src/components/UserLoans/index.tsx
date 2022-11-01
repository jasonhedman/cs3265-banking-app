import React from 'react'

import Card from '../utilities/Card';

import { VStack, Text } from '@chakra-ui/react';

import useLoans from '../../hooks/useLoans';
import Loan from './Loan';

const userId = "1"

const UserLoans : React.FC = () => {

    const { loans } = useLoans(userId);

    return (
        <Card>
            <VStack
                alignItems='flex-start'
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                >
                    Your Loans
                </Text>
                {
                    loans.map((loan) => (
                        <Loan 
                            key={loan.loanId}
                            loan={loan}
                        />
                    ))
                }
            </VStack>
        </Card>
    )
}

export default UserLoans