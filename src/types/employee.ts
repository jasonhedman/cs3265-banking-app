export interface Employee {
    employeeID: string;
    branchID: string;
    name: string;
    salary: number;
    type: EmployeeType;
}

export type EmployeeType = 'Teller' | 'LoanOfficer';