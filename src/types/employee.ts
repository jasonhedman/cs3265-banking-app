export interface Employee {
    employeeId: string;
    employeeName: string;
    employeeSalary: number;
    type: EmployeeType;
}

export type EmployeeType = 'teller' | 'loanOfficer';