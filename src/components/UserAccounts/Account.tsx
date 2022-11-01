import React from 'react'

import { Box, Text, useDisclosure } from '@chakra-ui/react'


import { Account } from '../../types/account'
import LoanModal from './LoanModal'

interface Props {
    account: Account
}

const AccountComponent : React.FC<Props> = ({ account }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <LoanModal 
        isLoanModalOpen={isOpen}
        closeModal={onClose}
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
          {account.branchName}
        </Text>
        <Text>
          Balance: ${account.balance.toLocaleString()}
        </Text>
      </Box>
    </>
  )
}

export default AccountComponent