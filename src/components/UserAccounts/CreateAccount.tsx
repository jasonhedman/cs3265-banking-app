import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CreateAccountModal from './CreateAccountModal';

interface Props {
    userId: string
}

const CreateAccount : React.FC<Props> = ({ userId}) => {

    const { onOpen, onClose, isOpen} = useDisclosure();

  return (
    <>
        <CreateAccountModal 
            isCreateAccountModalOpen={isOpen}
            userId={userId}
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