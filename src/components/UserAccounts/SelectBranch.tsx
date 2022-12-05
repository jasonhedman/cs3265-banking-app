import React from 'react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import { BranchData } from '../../types/branches'

interface Props {
    branches: BranchData[]
    seletctedBranch: BranchData | null
    selectBranch: (branch: BranchData) => void
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
                            key={branch.branchID}
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