export interface Account {
    accountID: string;
    userID: string;
    branchID: string;
    balance: number;
    openDate: string;
}

export interface AccountData extends Account {
    branchName: string;
    bankID: string;
    bankName: string;
}