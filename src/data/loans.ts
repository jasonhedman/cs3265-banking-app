import { Loan } from '../types/loan';
import { getAccountDataByUserID } from './accounts';

export let loans: Loan[] = [
    {
        loanID: "1",
        amount: 10000,
        interestRate: 0.05,
        dueBy: "2018-01-01",
        accountID: "1",
    },
    {
        loanID: "2",
        amount: 20000,
        interestRate: 0.05,
        dueBy: "2018-01-02",
        accountID: "1",
    },
    {
        loanID: "3",
        amount: 30000,
        interestRate: 0.05,
        dueBy: "2018-01-03",
        accountID: "2",
    },
    {
        loanID: "4",
        amount: 40000,
        interestRate: 0.05,
        dueBy: "2018-01-04",
        accountID: "3",
    },
    {
        loanID: "5",
        amount: 50000,
        interestRate: 0.05,
        dueBy: "2018-01-05",
        accountID: "4",
    },
    {
        loanID: "6",
        amount: 60000,
        interestRate: 0.05,
        dueBy: "2018-01-06",
        accountID: "5",
    },
    {
        loanID: "7",
        amount: 70000,
        interestRate: 0.05,
        dueBy: "2018-01-07",
        accountID: "6",
    },
    {
        loanID: "8",
        amount: 80000,
        interestRate: 0.05,
        dueBy: "2018-01-08",
        accountID: "7",
    },
    {
        loanID: "9",
        amount: 90000,
        interestRate: 0.05,
        dueBy: "2018-01-09",
        accountID: "8",
    },
]

export const getLoansByAccountID = (accountID: string): Loan[] => {
    return loans.filter(loan => loan.accountID === accountID);
}

export const getLoansByUserID = (userID: string): Loan[] => {
    let userAccounts = getAccountDataByUserID(userID).map(account => account.accountID);
    return userAccounts
        .map(accountID => getLoansByAccountID(accountID))
        .reduce((acc, curr) => acc.concat(curr), []);
}