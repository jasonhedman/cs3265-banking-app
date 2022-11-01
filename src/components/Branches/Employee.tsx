import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { getEmployeeTitle } from '../../data/employees'

import { Employee } from '../../types/employee'

interface Props {
    employee: Employee
}

const EmployeeComponent : React.FC<Props> = ({ employee }) => {
  return (
    <Box
        border='1px'
        borderColor='gray.200'
        borderRadius='md'
        p={4}
        w='100%'
    >
        <Text
            fontWeight='bold'
        >
            {employee.employeeName}
        </Text>
        <Text>
            Role: {getEmployeeTitle(employee.type)}
        </Text>
        <Text>
            Salary: ${employee.employeeSalary.toLocaleString()}
        </Text>
    </Box>
  )
}

export default EmployeeComponent