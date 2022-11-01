import React from 'react'

import { Box, Text } from '@chakra-ui/react'


import { Account } from '../../types/account'

interface Props {
    account: Account
}

const AccountComponent : React.FC<Props> = ({ account }) => {
  return (
    <Box
        border='1px'
        borderColor='gray.200'
        borderRadius='md'
        p={4}
        w='100%'
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
  )
}

export default AccountComponent