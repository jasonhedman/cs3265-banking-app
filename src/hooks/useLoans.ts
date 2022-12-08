import React, { useCallback } from "react"
import { singletonHook } from "react-singleton-hook"

import { createLoan, getLoansForUserId, payLoan } from "../services/loans"

import { Loan } from "../types/loan"
import useAuth from "./useAuth"

const initValues = {
    loans: [],
    takeLoan: async (accountID: string, amount: number) => {},
    repayLoan: async (loanID: string, amount: number) => {},
}

const useLoans = () => {

    const { user } = useAuth();

    const [loans, setLoans] = React.useState<Loan[]>([])

    const getLoans = useCallback(async () => {
        const loans = await getLoansForUserId(user?.userID || '');
        if (loans) {
            setLoans(loans);
        }
    }, [user])

    React.useEffect(() => {
        getLoans();
    }, [getLoans])

    const takeLoan = async (accountID: string, amount: number) => {
        const loanID = await createLoan(accountID, amount);
        if (loanID) {
            getLoans();
        }
    }

    const repayLoan = async (loanID: string, amount: number) => {
        const paymentID = await payLoan(loanID, amount);
        if(paymentID) {
            getLoans();
        }
    }

    return {
        loans,
        takeLoan,
        repayLoan,
    }

}

export default singletonHook(initValues, useLoans)