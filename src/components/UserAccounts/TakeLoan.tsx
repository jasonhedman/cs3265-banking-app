import React from 'react'

import { Button, NumberInput, NumberInputField, VStack } from '@chakra-ui/react'

import useLoans from '../../hooks/useLoans'

interface Props {
    accountID: string,
    closeModal: () => void
}

const TakeLoan: React.FC<Props> = ({ accountID, closeModal }) => {

    const { takeLoan } = useLoans();

    const [amount, setAmount] = React.useState(0);

    const onClick = () => {
        takeLoan(accountID, amount);
        closeModal();
    }

    return (
        <VStack>
            <NumberInput 
                placeholder='Amount'
                value={amount}
                onChange={(_, inputAmount) => setAmount(inputAmount)}
                w='100%'
            >
                <NumberInputField />
            </NumberInput>
            <Button
                onClick={onClick}
            >
                Take Loan
            </Button>
        </VStack>
    )
}

export default TakeLoan