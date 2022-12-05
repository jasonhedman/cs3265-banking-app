import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CreateAccountModal from './CreateAccountModal';

const CreateAccount : React.FC = () => {

    const { onOpen, onClose, isOpen} = useDisclosure();

  return (
    <>
        <CreateAccountModal 
            isCreateAccountModalOpen={isOpen}
            closeModal={onClose}
        />
        <Button
            onClick={onOpen}
            colorScheme='blue'
        >
            Create Account
        </Button>
    </>
  )
}

export default CreateAccount