import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { Bank } from '../../types/bank'

interface Props {
    banks: Bank[]
    selectedBank: Bank
    selectBank: (bank: Bank) => void
}

const SelectBank : React.FC<Props> = ({ banks, selectedBank, selectBank }) => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {selectedBank.bankName}
        </MenuButton>
        <MenuList>
            {
                banks.map((bank) => (
                    <MenuItem
                        key={bank.bankId}
                        onClick={() => selectBank(bank)}
                    >
                        {bank.bankName}
                    </MenuItem>
                ))
            }
        </MenuList>
    </Menu>
  )
}

export default SelectBank