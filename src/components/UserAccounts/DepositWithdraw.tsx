import React from 'react'

import { Button, HStack, NumberInput, NumberInputField, VStack } from '@chakra-ui/react'

import useAccount from '../../hooks/useAccount'

interface Props {
    accountID: string,
    closeModal: () => void
}

const DepositWithdraw: React.FC<Props> = ({ accountID, closeModal }) => {

    const { deposit, withdraw } = useAccount(accountID);

    const [amount, setAmount] = React.useState(0);

    const onDeposit = () => {
        deposit(amount);
        closeModal();
    }

    const onWithdraw = () => {
        withdraw(amount);
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
            <HStack>
                <Button
                    onClick={onWithdraw}
                >
                    Withdraw
                </Button>
                <Button
                    onClick={onDeposit}
                >
                    Deposit
                </Button>
            </HStack>
        </VStack>
    )
}

export default DepositWithdraw