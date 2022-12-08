import { useState, useEffect, useCallback} from "react"

import { getEmployees, deleteEmployee as deleteEmployeeFetch } from "../services/employees";

import { Employee } from "../types/employee";

const useEmployees = (branchId: string) => {
    const [employees, setEmployees] = useState<Employee[]>([])

    const setEmployeesData = useCallback(async () => {
        const employees = await getEmployees(branchId)
        if (employees) {
            setEmployees(employees)
        }
    }, [branchId])

    useEffect(() => {
        setEmployeesData()
    }, [setEmployeesData])

    const deleteEmployee = async (employeeId: string) => {
        await deleteEmployeeFetch(employeeId);
        setEmployeesData();
    }

    return {
        employees,
        deleteEmployee
    }
}

export default useEmployees