import React from 'react'

import Card from '../utilities/Card';

import { VStack, Text, HStack } from '@chakra-ui/react';

import useLoans from '../../hooks/useLoans';
import Loan from './Loan';

const UserLoans : React.FC = () => {

    const { loans } = useLoans();

    console.log(loans);

    const outstandingLoans = loans.filter(loan => loan.totalAmount - loan.amountPaid > 0);

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
                        Owed Amount: ${outstandingLoans.reduce((acc, loan) => acc + loan.totalAmount - loan.amountPaid, 0).toLocaleString()}
                    </Text>
                </HStack>
                {
                    outstandingLoans.map((loan) => (
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