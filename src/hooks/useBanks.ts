import React from "react";

import { getBanks } from "../services/banks";

import { Bank } from "../types/bank";

const useBanks = () => {

    const [banks, setBanks] = React.useState<Bank[]>([]);
    const [selectedBank, setSelectedBank] = React.useState<Bank | null>(null);
    
    const selectBank = (bank: Bank) => {
        setSelectedBank(bank);
    }

    React.useEffect(() => {
        const updateBanksState = async () => {
            const banks = await getBanks();
            if (banks) {
                setBanks(banks);
                setSelectedBank(banks[0]);
            }
        }
        updateBanksState();
    }, [])

    return {
        banks,
        selectedBank: selectedBank,
        selectBank
    }
}

export default useBanks
