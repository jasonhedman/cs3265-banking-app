import { Branch, BranchData } from "../types/branches";
import { getBankByBankID } from "./banks";

export const branches: Branch[] = [
    {
        branchID: "1",
        bankID: "1",
        address: "123 Main Street",
        branchName: "NYC",
    },
    {
        branchID: "2",
        bankID: "1",
        address: "456 Main Street",
        branchName: "LA",
    },
    {
        branchID: "3",
        bankID: "1",
        address: "789 Main Street",
        branchName: "Chicago",
    },
    {
        branchID: "4",
        bankID: "2",
        address: "123 Main Street",
        branchName: "NYC",
    },
    {
        branchID: "5",
        bankID: "2",
        address: "456 Main Street",
        branchName: "LA",
    },
    {
        branchID: "6",
        bankID: "2",
        address: "789 Main Street",
        branchName: "Chicago",
    },
    {
        branchID: "7",
        bankID: "3",
        address: "123 Main Street",
        branchName: "NYC",
    },
    {
        branchID: "8",
        bankID: "3",
        address: "456 Main Street",
        branchName: "LA",
    },
    {
        branchID: "9",
        bankID: "3",
        address: "789 Main Street",
        branchName: "Chicago",
    },
    {
        branchID: "10",
        bankID: "4",
        address: "123 Main Street",
        branchName: "NYC",
    },
    {
        branchID: "11",
        bankID: "4",
        address: "456 Main Street",
        branchName: "LA",
    },
    {
        branchID: "12",
        bankID: "4",
        address: "789 Main Street",
        branchName: "Chicago",
    },
    {
        branchID: "13",
        bankID: "5",
        address: "123 Main Street",
        branchName: "NYC",
    },
    {
        branchID: "14",
        bankID: "5",
        address: "456 Main Street",
        branchName: "LA",
    },
    {
        branchID: "15",
        bankID: "5",
        address: "789 Main Street",
        branchName: "Chicago",
    }
];

export const getBranchesDataByBankID = (bankID: string): BranchData[] => {
    return branches
        .filter((branch) => branch.bankID === bankID)
        .map((branch) => {
            const bank = getBankByBankID(branch.bankID);
            if(bank) {
                return {
                    ...branch,
                    bankName: bank?.bankName,
                    bankID
                };
            } else {
                return undefined;
            }
        })
        .filter((branch) => branch !== undefined) as BranchData[];
};

export const getBranchDataByBranchID = (branchID: string): BranchData | undefined => {
    let branch = branches.find((branch) => branch.branchID === branchID);
    if (branch) {
        let bankName = getBankByBankID(branch.bankID)?.bankName;
        if (bankName) {
            return {
                ...branch,
                bankName
            }
        }
    } else {
        return undefined;
    }
}