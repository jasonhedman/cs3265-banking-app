import React from "react"

import { getEmployeesByBranchID } from "../data/employees";

import { Employee } from "../types/employee";

const useEmployees = (branchId: string) => {
    const [employees, setEmployees] = React.useState<Employee[]>([])

    React.useEffect(() => {
        setEmployees(getEmployeesByBranchID(branchId))
    }, [branchId])

    return {
        employees,
    }
}

export default useEmployees