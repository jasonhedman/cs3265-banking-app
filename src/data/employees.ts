import { Employee, EmployeeType } from "../types/employee";

export const employees : Employee[] = [
    {
        employeeId: "1",
        employeeName: "John Doe",
        employeeSalary: 10000,
        type: "teller"
    },
    {
        employeeId: "2",
        employeeName: "Jane Doe",
        employeeSalary: 15000,
        type: "teller"
    },
    {
        employeeId: "3",
        employeeName: "John Smith",
        employeeSalary: 20000,
        type: "loanOfficer"
    },
    {
        employeeId: "4",
        employeeName: "Jane Smith",
        employeeSalary: 25000,
        type: "loanOfficer"
    }
]

type Titles = {
    [key in EmployeeType]: string;
}

const titles : Titles = {
    'teller': 'Teller',
    'loanOfficer': 'Loan Officer',
}

export const getEmployeeTitle = (type : EmployeeType) => {
    return titles[type];
}
