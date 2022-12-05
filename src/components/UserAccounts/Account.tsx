import React from 'react'

import { Box, Text, useDisclosure } from '@chakra-ui/react'

import AccountModal from './AccountModal';

import { AccountData } from '../../types/account'

interface Props {
    account: AccountData
}

const AccountComponent : React.FC<Props> = ({ account }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AccountModal 
        isAccountModalOpen={isOpen}
        closeModal={onClose}
        accountID={account.accountID}
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
          {account.bankName} {account.branchName}
        </Text>
        <Text>
          Balance: ${account.balance.toLocaleString()}
        </Text>
      </Box>
    </>
  )
}

export default AccountComponent