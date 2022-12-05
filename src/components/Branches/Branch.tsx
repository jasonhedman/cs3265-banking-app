import React from 'react'

import {
    Box, Text
} from '@chakra-ui/react'

import { BranchData } from '../../types/branches'

interface Props {
    branch: BranchData
    openBranchModal: (branch: BranchData) => void
}

const BranchComponent : React.FC<Props> = ({ branch, openBranchModal }) => {
  return (
    <Box
        border='1px'
        borderColor='gray.200'
        borderRadius='md'
        p={4}
        w='100%'
        onClick={() => openBranchModal(branch)}
        _hover={{
            cursor: 'pointer',
            bg: 'gray.100'
        }}
    >
        <Text
            fontWeight='bold'
        >
            {branch.bankName} {branch.branchName}
        </Text>
        <Text>
            {branch.address}
        </Text>
    </Box>
  )
}

export default BranchComponent