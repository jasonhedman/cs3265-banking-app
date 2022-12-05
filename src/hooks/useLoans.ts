import React from "react"
import { singletonHook } from "react-singleton-hook"

import { getLoansByUserID } from "../data/loans"

import { Loan } from "../types/loan"
import useAuth from "./useAuth"

const initValues = {
    loans: [],
    takeLoan: (accountID: string, amount: number) => {},
    repayLoan: (loanID: string, amount: number) => {},
}

const useLoans = () => {

    const { user } = useAuth();

    const [loans, setLoans] = React.useState<Loan[]>([])

    React.useEffect(() => {
        if (user) {
            setLoans(getLoansByUserID(user.userID));
        }
    }, [user])

    const takeLoan = (accountID: string, amount: number) => {
        setLoans([...loans, {
            loanID: (loans.length + 1).toString(),
            accountID,
            amount,
            dueBy: "2023-01-01",
            interestRate: 0.05,
        }])
    }

    const repayLoan = (loanID: string, amount: number) => {
        let newLoans = [...loans];
        const loanIndex = newLoans.findIndex(loan => loan.loanID === loanID);
        if (loanIndex > -1) {
            newLoans[loanIndex].amount -= amount;
        }
        setLoans(newLoans);
    }

    return {
        loans,
        takeLoan,
        repayLoan,
    }

}

export default singletonHook(initValues, useLoans)