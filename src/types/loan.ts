export interface Loan {
    loanID: string;
    accountID: string;
    dueBy: string;
    totalAmount: number;
    amountPaid: number;
    interestRate: number;
}