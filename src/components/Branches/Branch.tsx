import React from 'react'

import {
    Box, Text
} from '@chakra-ui/react'

import { Branch } from '../../types/branches'

interface Props {
    branch: Branch
    openBranchModal: (branch: Branch) => void
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
            {branch.branchName}
        </Text>
        <Text>
            {branch.branchAddress}
        </Text>
    </Box>
  )
}

export default BranchComponent