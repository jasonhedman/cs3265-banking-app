import { AccountData } from "../types/account";

interface AccountRecord {
    AccountID: number,
    UserID: number,
    BranchID: number,
    Balance: number,
    OpenDate: string,
    BranchName: string,
    BankID: number,
    BankName: string
}
export const getAccountsForUserId = async (userID: string): Promise<AccountData[] | undefined> => {
    const response = await fetch(`http://localhost:8080/accounts?userId=${userID}`)
    if(response.status === 200){
        const data: AccountRecord[] = await response.json()
        if(data.length === 0){
            return undefined
        }
        return data.map((accountRecord) => ({
            accountID: accountRecord.AccountID.toString(),
            userID: accountRecord.UserID.toString(),
            branchID: accountRecord.BranchID.toString(),
            balance: accountRecord.Balance,
            openDate: accountRecord.OpenDate,
            branchName: accountRecord.BranchName,
            bankID: accountRecord.BankID.toString(),
            bankName: accountRecord.BankName
        }))
    } else {
        return undefined
    }
}

export const createAccount = async (userID: string, branchID: string): Promise<AccountData[] | undefined> => {
    const response = await fetch(`http://localhost:8080/account/create`, {
        method: 'POST',
        body: JSON.stringify({
            userID,
            branchID
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status === 200){
       const accounts = await getAccountsForUserId(userID)
        if(accounts){
            return accounts
        } else {
            return undefined
        }
    } else {
        return undefined
    }
}

export const deposit = async (accountID: string, amount: number): Promise<number | undefined> => {
    const response = await fetch(`http://localhost:8080/deposit`, {
        method: 'POST',
        body: JSON.stringify({
            accountID,
            amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status === 200){
        const data: [{Balance: number}] = await response.json()
        return data[0].Balance
    } else {
        return undefined
    }
}

export const withdraw = async (accountID: string, amount: number): Promise<number | undefined> => {
    const response = await fetch(`http://localhost:8080/withdraw`, {
        method: 'POST',
        body: JSON.stringify({
            accountID,
            amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status === 200){
        const data: [{Balance: number}] = await response.json()
        return data[0].Balance
    } else {
        return undefined
    }
}