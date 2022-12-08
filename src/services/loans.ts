import { Loan } from "../types/loan";

interface LoanRecord {
    LoanID: number,
    AccountID: number,
    TotalAmount: number,
    InterestRate: number,
    DueBy: string,
    AmountPaid: number | null
}

export const getLoansForUserId = async (userID: string): Promise<Loan[] | undefined> => {
    const response = await fetch(`http://localhost:8080/loans?userId=${userID}`)
    if(response.status === 200){
        const data: LoanRecord[] = await response.json()
        if(data.length === 0){
            return undefined
        }
        console.log(data);
        return data
            .map((loanRecord) => ({
                loanID: loanRecord.LoanID.toString(),
                accountID: loanRecord.AccountID.toString(),
                totalAmount: loanRecord.TotalAmount,
                interestRate: loanRecord.InterestRate,
                dueBy: (new Date(loanRecord.DueBy)).toDateString(),
                amountPaid: loanRecord.AmountPaid || 0
            }))

    } else {
        return undefined
    }
}

export const createLoan = async (accountID: string, amount: number): Promise<number | undefined> => {
    const response = await fetch(`http://localhost:8080/loan/create`, {
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
        const data: {loanID: number} = await response.json()
        return data.loanID
    } else {
        return undefined
    }
}

export const payLoan = async (loanID: string, amount: number): Promise<number | undefined> => {
    const response = await fetch(`http://localhost:8080/loan/pay`, {
        method: 'POST',
        body: JSON.stringify({
            loanID,
            amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status === 200){
        const data: {paymentID: number} = await response.json()
        return data.paymentID
    } else {
        return undefined
    }
}


