import { Bank } from "../types/bank";

interface BankRecord {
    BankID: number,
    BankName: string
}

export const getBanks = async () : Promise<Bank[] | undefined> => {
    const response = await fetch('http://localhost:8080/banks')
    const data: BankRecord[] = await response.json()
    return data.map(bankRecord => ({
        bankID: bankRecord.BankID.toString(),
        bankName: bankRecord.BankName
    }))
}