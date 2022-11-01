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
    isRepayLoanModalOpen: boolean,
    closeModal: () => void,
}

const RepayLoanModal : React.FC<Props> = ({ isRepayLoanModalOpen, closeModal }) => {
  return (
    <Modal 
        isOpen={isRepayLoanModalOpen} 
        onClose={closeModal}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Repay Loan</ModalHeader>
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
                    Repay
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default RepayLoanModal