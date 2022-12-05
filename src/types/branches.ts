export interface Branch {
    branchID: string;
    bankID: string;
    branchName: string;
    address: string;
}

export interface BranchData extends Branch {
    bankName: string;
}