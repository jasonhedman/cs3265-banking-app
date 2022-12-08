import { BranchData } from "../types/branches";

interface BranchRecord {
    BranchID: number,
    BankID: number,
    BranchName: string,
    Address: string,
    BankName: string
}

export const getBranches = async (bankId: string) : Promise<BranchData[] | undefined> => {
    const response = await fetch(`http://localhost:8080/bankBranches?bankID=${bankId}`)
    const data: BranchRecord[] = await response.json()
    if(data.length === 0){
        return []
    }
    return data.map(branchRecord => ({
        branchID: branchRecord.BranchID.toString(),
        bankID: branchRecord.BankID.toString(),
        branchName: branchRecord.BranchName,
        address: branchRecord.Address,
        bankName: branchRecord.BankName
    }))
}