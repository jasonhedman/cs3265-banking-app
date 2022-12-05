import React from "react";

import { getBranchesDataByBankID } from "../data/branches";

import { Bank } from "../types/bank";
import { BranchData } from "../types/branches";

const useBranches = (bank: Bank) => {

    const [branches, setBranches] = React.useState<BranchData[]>([]);

    React.useEffect(() => {
        setBranches(getBranchesDataByBankID(bank.bankID));
    }, [bank])

    return {
        branches
    }
}

export default useBranches