import React from 'react'

import { Box, Text, useDisclosure } from '@chakra-ui/react'


import { Loan } from '../../types/loan'
import RepayLoanModal from './RepayLoanModal'

interface Props {
    loan: Loan
}

const LoanComponent : React.FC<Props> = ({ loan }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <RepayLoanModal 
            isRepayLoanModalOpen={isOpen}
            closeModal={onClose}
            loanID={loan.loanID}
        />
        <Box
            border='1px'
            borderColor='gray.200'
            borderRadius='md'
            p={4}
            w='100%'
            onClick={onOpen}
            _hover={{
                cursor: 'pointer',
                bg: 'gray.100'
            }}
        >
            <Text
                fontWeight='bold'
            >
                Loan Amount: ${loan.totalAmount}
            </Text>
            <Text>
                Amount Paid: ${loan.amountPaid}
            </Text>
            <Text>
                Amount Remaining: ${loan.totalAmount - loan.amountPaid}
            </Text>
            <Text>
                Interest: {loan.interestRate * 100}%
            </Text>
            <Text>
                Due By: {loan.dueBy}
            </Text>
        </Box>
    </>
  )
}

export default LoanComponent