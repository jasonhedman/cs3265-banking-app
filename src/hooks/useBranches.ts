import React from "react";

import { getBranches } from "../services/branches";

import { Bank } from "../types/bank";
import { BranchData } from "../types/branches";

const useBranches = (bank: Bank | null) => {

    const [branches, setBranches] = React.useState<BranchData[]>([]);

    React.useEffect(() => {
        const setBranchesData = async () => {
            const branches = await getBranches(bank?.bankID || '');
            if (branches) {
                setBranches(branches);
            }
        }
        setBranchesData();
    }, [bank])

    return {
        branches
    }
}

export default useBranches