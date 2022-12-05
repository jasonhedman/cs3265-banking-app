import React from 'react'

import { 
    VStack,
    Text
} from '@chakra-ui/react'

import Branch from './Branch';

import useBranches from '../../hooks/useBranches'

import { Bank } from '../../types/bank'
import useBranchModal from '../../hooks/useBranchModal';
import BranchModal from './BranchModal';

interface Props {
    selectedBank: Bank
}

const Branches : React.FC<Props> = ({ selectedBank }) => {

    const { branches } = useBranches(selectedBank);
    const { 
        isBranchModalOpen,
        selectedBranch,
        openBranchModal,
        closeBranchModal
    } = useBranchModal();

    return (
        <>
            <BranchModal 
                selectedBranch={selectedBranch}
                isBranchModalOpen={isBranchModalOpen}
                closeModal={closeBranchModal}
            />
            <VStack
                alignItems='flex-start'
                w='100%'
            >
                <Text
                    fontWeight='bold'
                >
                    Branches
                </Text>
                {
                    branches.map((branch) => (
                        <Branch 
                            key={branch.branchID}
                            branch={branch}
                            openBranchModal={openBranchModal}
                        />
                    ))
                }
            </VStack>
        </>
    )
}

export default Branches