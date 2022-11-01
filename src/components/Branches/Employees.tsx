import React from 'react'

import { Text, VStack } from '@chakra-ui/react';

import Employee from './Employee';

import useEmployees from '../../hooks/useEmployees'

const Employees : React.FC = () => {

    const { employees } = useEmployees();

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
                        key={employee.employeeId}
                        employee={employee}
                    />
                ))
            }
        </VStack>
    )
}

export default Employees