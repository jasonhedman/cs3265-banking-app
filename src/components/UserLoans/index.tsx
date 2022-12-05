import React from 'react'

import Card from '../utilities/Card';

import { VStack, Text, HStack } from '@chakra-ui/react';

import useLoans from '../../hooks/useLoans';
import Loan from './Loan';

const UserLoans : React.FC = () => {

    const { loans } = useLoans();

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
                        Your Loans
                    </Text>
                    <Text>
                        Owed Amount: ${loans.reduce((acc, loan) => acc + loan.amount, 0)}
                    </Text>
                </HStack>
                {
                    loans.filter(loan => loan.amount > 0).map((loan) => (
                        <Loan 
                            key={loan.loanID}
                            loan={loan}
                        />
                    ))
                }
            </VStack>
        </Card>
    )
}

export default UserLoans