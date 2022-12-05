import React from "react";

import { banks as bankData } from "../data/banks";

import { Bank } from "../types/bank";

const useBanks = () => {

    const [banks, setBanks] = React.useState<Bank[]>([]);
    const [selectedBank, setSelectedBank] = React.useState<Bank>(bankData[0]);
    
    const selectBank = (bank: Bank) => {
        setSelectedBank(bank);
    }

    React.useEffect(() => {
        setBanks(bankData);
        setSelectedBank(bankData[0]);
    }, [])

    return {
        banks,
        selectedBank: selectedBank,
        selectBank
    }
}

export default useBanks
