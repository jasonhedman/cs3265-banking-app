import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
    Input
} from '@chakra-ui/react'

interface Props {
    isLoanModalOpen: boolean,
    closeModal: () => void,
}

const LoanModal : React.FC<Props> = ({ isLoanModalOpen, closeModal }) => {
  return (
    <Modal 
        isOpen={isLoanModalOpen} 
        onClose={closeModal}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Take Loan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input 
                    placeholder='Amount'
                />
            </ModalBody>
            <ModalFooter
                justifyContent='center'
            >
                <Button 
                    colorScheme='blue'
                >
                    Take Loan
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default LoanModal