import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    HStack,
    ModalFooter,
    Button
} from '@chakra-ui/react'

import useCreateAccount from '../../hooks/useCreateAccount'
import SelectBank from '../Banks/SelectBank'
import SelectBranch from './SelectBranch'

interface Props {
    isCreateAccountModalOpen: boolean,
    closeModal: () => void
}

const CreateAccountModal : React.FC<Props> = ({ isCreateAccountModalOpen, closeModal }) => {

    const {
        banks,
        selectedBank,
        selectBank,
        branches,
        selectedBranch,
        selectBranch,
        createAccount
    } = useCreateAccount();

    const onCreate = () => {
        createAccount();
        closeModal();
    }

  return (
    <Modal 
        isOpen={isCreateAccountModalOpen} 
        onClose={closeModal}
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Create Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <HStack>
                    <SelectBank 
                        banks={banks}
                        selectedBank={selectedBank}
                        selectBank={selectBank}
                    />
                    <SelectBranch 
                        branches={branches}
                        seletctedBranch={selectedBranch}
                        selectBranch={selectBranch}
                    />
                </HStack>
            </ModalBody>
            <ModalFooter
                justifyContent='center'
            >
                <Button 
                    onClick={onCreate}
                    colorScheme='blue'
                >
                    Create Account
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default CreateAccountModal