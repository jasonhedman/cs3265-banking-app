import React from "react";

import { branches as branchData } from "../data/branches";

import { Bank } from "../types/bank";
import { Branch } from "../types/branches";

const useBranches = (bank: Bank) => {

    const [branches, setBranches] = React.useState<Branch[]>([]);

    React.useEffect(() => {
        setBranches(branchData);
    }, [])

    return {
        branches
    }
}

export default useBranches