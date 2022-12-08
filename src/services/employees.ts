import { Employee, EmployeeType } from "../types/employee";

interface EmployeeRecord {
    EmployeeID: number,
    BranchID: number,
    Name: string,
    Salary: number
    EmployeeType: EmployeeType
}

export const getEmployees = async (branchID: string) : Promise<Employee[] | undefined> => {
    const response = await fetch(`https://hedbot2022.herokuapp.com/employees?branchID=${branchID}`)
    const data: EmployeeRecord[] = await response.json()
    return data.map(employeeRecord => ({
        employeeID: employeeRecord.EmployeeID.toString(),
        branchID: employeeRecord.BranchID.toString(),
        name: employeeRecord.Name,
        salary: employeeRecord.Salary,
        type: employeeRecord.EmployeeType
    }))
}

export const deleteEmployee = async (employeeID: string) : Promise<void> => {
    const response = await fetch(`https://hedbot2022.herokuapp.com/employee/delete`, {
        method: 'POST',
        body: JSON.stringify({
            employeeID
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.status !== 200){
        throw new Error('Failed to delete employee')
    }
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
