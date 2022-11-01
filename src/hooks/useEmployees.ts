import React from "react"

import { employees as employeeData } from "../data/employees";

import { Employee } from "../types/employee";

const useEmployees = () => {
    const [employees, setEmployees] = React.useState<Employee[]>([])

    React.useEffect(() => {
        setEmployees(employeeData);
    }, [])

    return {
        employees,
    }
}

export default useEmployees