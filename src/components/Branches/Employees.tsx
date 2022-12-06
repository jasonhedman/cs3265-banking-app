import React from 'react'

import { Text, VStack } from '@chakra-ui/react';

import Employee from './Employee';

import useEmployees from '../../hooks/useEmployees'

interface Props {
    branchId: string
}

const Employees : React.FC<Props> = ({ branchId }) => {

    const { employees, deleteEmployee } = useEmployees(branchId);

    return (
        <VStack
            alignItems='flex-start'
        >
            <Text
                fontWeight='bold'
            >
                Employees
            </Text>
            {
                employees.map((employee) => (
                    <Employee 
                        key={employee.employeeID}
                        employee={employee}
                        deleteEmployee={deleteEmployee}
                    />
                ))
            }
        </VStack>
    )
}

export default Employees