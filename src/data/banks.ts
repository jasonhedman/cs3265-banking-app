import { Bank } from "../types/bank";

export const banks: Bank[] = [
    {
        bankID: '1',
        bankName: 'Bank of America',
    },
    {
        bankID: '2',
        bankName: 'Chase',
    },
    {
        bankID: '3',
        bankName: 'Wells Fargo',
    },
    {
        bankID: '4',
        bankName: 'Citi',
    },
    {
        bankID: '5',
        bankName: 'Capital One',
    },
]

export const getBankByBankID = (bankID: string): Bank | undefined => {
    return banks.find((bank) => bank.bankID === bankID)
}