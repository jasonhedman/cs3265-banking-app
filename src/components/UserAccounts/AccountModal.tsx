import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react'

import TakeLoan from './TakeLoan'
import Deposit from './Deposit'
import Withdraw from './Withdraw'

interface Props {
    accountID: string
    isAccountModalOpen: boolean,
    closeModal: () => void,
}

const AccountModal : React.FC<Props> = ({ isAccountModalOpen, closeModal, accountID }) => {
  return (
    <Modal 
        isOpen={isAccountModalOpen} 
        onClose={closeModal}
        size='xl'
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Account</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Tabs>
                    <TabList
                        justifyContent='center'
                    >
                        <Tab>Deposit</Tab>
                        <Tab>Withdraw</Tab>
                        <Tab>Take Loan</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Deposit 
                                accountID={accountID} 
                                closeModal={closeModal}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Withdraw 
                                accountID={accountID} 
                                closeModal={closeModal}
                            />
                        </TabPanel>
                        <TabPanel>
                            <TakeLoan 
                                accountID={accountID} 
                                closeModal={closeModal}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}

export default AccountModal