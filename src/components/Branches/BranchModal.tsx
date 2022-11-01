import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Branch } from '../../types/branches'
import Employees from './Employees'

interface Props {
    isBranchModalOpen: boolean,
    selectedBranch: Branch | null,
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
                        <Employees />
                    </ModalBody>
                </ModalContent>
            )
        }
    </Modal>
  )
}

export default BranchModal