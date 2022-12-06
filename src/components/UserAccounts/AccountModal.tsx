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
import DepositWithdraw from './DepositWithdraw'
import DeleteAccount from './DeleteAccount'

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
                        <Tab>Deposit/Withdraw</Tab>
                        <Tab>Take Loan</Tab>
                        <Tab>Delete Account</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <DepositWithdraw 
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
                        <TabPanel>
                            <DeleteAccount 
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