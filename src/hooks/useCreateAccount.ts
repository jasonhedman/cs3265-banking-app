import React from 'react'

import { branches as branchesData } from '../data/branches'

import { Branch } from '../types/branches'

const useCreateAccount = (userId: string) => {

    const [branches, setBranches] = React.useState<Branch[]>([])
    const [selectedBranch, setSelectedBranch] = React.useState<Branch | null>(null)

    React.useEffect(() => {
        setBranches(branchesData);
    }, [])

    const selectBranch = (branch: Branch) => {
        setSelectedBranch(branch)
    }

    const createAccount = () => {

    }

    return {
        branches,
        selectedBranch,
        selectBranch,
        createAccount
    }

}

export default useCreateAccount