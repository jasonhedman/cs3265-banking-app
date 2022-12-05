import React from 'react'

import { BranchData } from '../types/branches'
import useAccounts from './useAccounts';
import useBanks from './useBanks';
import useBranches from './useBranches';

const useCreateAccount = () => {

    const { addAccount } = useAccounts();


    const { banks, selectedBank, selectBank} = useBanks();
    const { branches } = useBranches(selectedBank);

    // const [branches, setBranches] = React.useState<Branch[]>([])
    const [selectedBranch, setSelectedBranch] = React.useState<BranchData>(branches[0])

    const selectBranch = (branch: BranchData) => {
        setSelectedBranch(branch)
    }

    const createAccount = () => {
        addAccount(selectedBranch.branchID)
    }   

    return {
        banks,
        selectedBank,
        selectBank,
        branches,
        selectedBranch,
        selectBranch,
        createAccount
    }

}

export default useCreateAccount