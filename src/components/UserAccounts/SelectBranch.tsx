import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { Branch } from '../../types/branches'

interface Props {
    branches: Branch[]
    seletctedBranch: Branch | null
    selectBranch: (branch: Branch) => void
}

const SelectBranch : React.FC<Props> = ({ branches, seletctedBranch, selectBranch}) => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {seletctedBranch?.branchName || 'Select Branch'}
            </MenuButton>
            <MenuList>
                {
                    branches.map((branch) => (
                        <MenuItem
                            key={branch.branchId}
                            onClick={() => selectBranch(branch)}
                        >
                            {branch.branchName}
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
      )
}

export default SelectBranch