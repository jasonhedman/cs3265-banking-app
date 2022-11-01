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
import useBanks from '../../hooks/useBanks'

interface Props {
    isCreateAccountModalOpen: boolean,
    userId: string,
    closeModal: () => void
}

const CreateAccountModal : React.FC<Props> = ({ isCreateAccountModalOpen, userId, closeModal }) => {

    const { banks, selectedBank, selectBank} = useBanks();

    const {
        branches,
        selectedBranch,
        selectBranch,
        createAccount
    } = useCreateAccount(userId);

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
                    onClick={createAccount}
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