import React from "react"

import { loans as loansData } from "../data/loans"

import { Loan } from "../types/loan"

const useLoans = (userId: string) => {
    const [loans, setLoans] = React.useState<Loan[]>([])

    React.useEffect(() => {
        setLoans(loansData.slice(0, 2))
    }, [])

    return {
        loans
    }

}

export default useLoans