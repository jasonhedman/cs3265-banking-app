import { Account, AccountData } from "../types/account";
import { getBranchDataByBranchID } from "./branches";

export let accounts : Account[] = [
    {
        accountID: "1",
        userID: "1",
        branchID: "1",
        openDate: "2018-01-01",
        balance: 1000,
    },
    {
        accountID: "2",
        userID: "1",
        branchID: "1",
        openDate: "2018-01-02",
        balance: 2000,
    },
    {
        accountID: "3",
        userID: "2",
        branchID: "1",
        openDate: "2018-01-03",
        balance: 3000,
    },
    {
        accountID: "4",
        userID: "3",
        branchID: "2",
        openDate: "2018-01-04",
        balance: 4000,
    },
    {
        accountID: "5",
        userID: "4",
        branchID: "2",
        openDate: "2018-01-05",
        balance: 5000,
    },
    {
        accountID: "6",
        userID: "5",
        branchID: "3",
        openDate: "2018-01-06",
        balance: 6000,
    },
    {
        accountID: "7",
        userID: "6",
        branchID: "3",
        openDate: "2018-01-07",
        balance: 7000,
    },
    {
        accountID: "8",
        userID: "7",
        branchID: "4",
        openDate: "2018-01-08",
        balance: 8000,
    }
]

export const getAccountDataByUserID = (userID: string): AccountData[] => {
    return accounts
        .filter(account => account.userID === userID)
        .map(account => {
            let branchData = getBranchDataByBranchID(account.branchID);
            if(branchData) {
                return {
                    ...account,
                    branchName: branchData.branchName,
                    bankName: branchData.bankName,
                    bankID: branchData.bankID,
                }
            } else {
                return undefined
            }
        })
        .filter((account): account is AccountData => account !== undefined)
}