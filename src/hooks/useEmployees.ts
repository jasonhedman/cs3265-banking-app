import React from "react"

import { getEmployeesByBranchID } from "../data/employees";

import { Employee } from "../types/employee";

const useEmployees = (branchId: string) => {
    const [employees, setEmployees] = React.useState<Employee[]>([])

    React.useEffect(() => {
        setEmployees(getEmployeesByBranchID(branchId))
    }, [branchId])

    const deleteEmployee = (employeeId: string) => {
        setEmployees(employees.filter(employee => employee.employeeID !== employeeId))
    }

    return {
        employees,
        deleteEmployee
    }
}

export default useEmployees