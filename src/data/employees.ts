import { Employee, EmployeeType } from "../types/employee";

export const employees : Employee[] = [
    {
        employeeID: "1",
        branchID: "1",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "2",
        branchID: "1",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "3",
        branchID: "2",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "4",
        branchID: "2",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "5",
        branchID: "3",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "6",
        branchID: "3",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "7",
        branchID: "4",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "8",
        branchID: "4",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "9",
        branchID: "5",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "10",
        branchID: "5",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "11",
        branchID: "6",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "12",
        branchID: "6",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "13",
        branchID: "7",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "14",
        branchID: "7",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "15",
        branchID: "8",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "16",
        branchID: "8",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "17",
        branchID: "9",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "18",
        branchID: "9",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "19",
        branchID: "10",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "20",
        branchID: "10",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "21",
        branchID: "11",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "22",
        branchID: "11",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "23",
        branchID: "12",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "24",
        branchID: "12",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "25",
        branchID: "13",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "26",
        branchID: "13",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "27",
        branchID: "14",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "28",
        branchID: "14",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    },
    {
        employeeID: "29",
        branchID: "15",
        name: "John Steward",
        salary: 50000,
        type: "Teller",
    },
    {
        employeeID: "30",
        branchID: "15",
        name: "Mary Smith",
        salary: 60000,
        type: "LoanOfficer",
    }
]

export const getEmployeesByBranchID = (branchID: string) => {
    return employees.filter((employee) => employee.branchID === branchID);
}

type Titles = {
    [key in EmployeeType]: string;
}

const titles : Titles = {
    'Teller': 'Teller',
    'LoanOfficer': 'Loan Officer',
}

export const getEmployeeTitle = (type : EmployeeType) => {
    return titles[type];
}
