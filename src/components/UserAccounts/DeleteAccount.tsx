import React from 'react'

import { VStack, Button } from '@chakra-ui/react'
import useAccount from '../../hooks/useAccount'

interface Props {
    accountID: string,
    closeModal: () => void
}

const DeleteAccount: React.FC<Props> = ({ accountID, closeModal }) => {

    const { deleteAccount } = useAccount(accountID);

    const onClick = () => {
        deleteAccount();
        closeModal();
    }

    return (
        <VStack>
            <Button
                variant='ghost'
                onClick={onClick}
            >
                Delete Account
            </Button>
        </VStack>
    )
}

export default DeleteAccount