import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { BranchData } from '../../types/branches'
import Employees from './Employees'

interface Props {
    isBranchModalOpen: boolean,
    selectedBranch: BranchData | null,
    closeModal: () => void
}

const BranchModal : React.FC<Props> = ({ isBranchModalOpen, selectedBranch, closeModal}) => {
  return (
    <Modal 
        isOpen={isBranchModalOpen} 
        onClose={closeModal}
    >
        <ModalOverlay />
        {
            selectedBranch && (
                <ModalContent>
                    <ModalHeader>{selectedBranch.branchName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Employees 
                            branchId={selectedBranch.branchID}
                        />
                    </ModalBody>
                </ModalContent>
            )
        }
    </Modal>
  )
}

export default BranchModal