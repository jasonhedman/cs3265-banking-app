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
    NumberInput,
    NumberInputField
} from '@chakra-ui/react'

import useLoans from '../../hooks/useLoans';

interface Props {
    isRepayLoanModalOpen: boolean,
    closeModal: () => void,
    loanID: string,
}

const RepayLoanModal : React.FC<Props> = ({ isRepayLoanModalOpen, closeModal, loanID }) => {

    const { repayLoan } = useLoans();

    const [amount, setAmount] = React.useState(0);

    const onRepay = () => {
        repayLoan(loanID, amount);
        closeModal();
    }

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
                    <NumberInput
                        placeholder='Amount'
                        value={amount}
                        onChange={(_, inputAmount) => setAmount(inputAmount)}
                    >
                        <NumberInputField />
                    </NumberInput>
                </ModalBody>
                <ModalFooter
                    justifyContent='center'
                >
                    <Button
                        colorScheme='blue'
                        onClick={onRepay}
                    >
                        Repay
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default RepayLoanModal