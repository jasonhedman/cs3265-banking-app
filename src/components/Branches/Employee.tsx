import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { getEmployeeTitle } from '../../data/employees'

import { Employee } from '../../types/employee'

interface Props {
    employee: Employee,
    deleteEmployee: (employeeID: string) => void
}

const EmployeeComponent : React.FC<Props> = ({ employee, deleteEmployee }) => {
  return (
    <Flex
        border='1px'
        borderColor='gray.200'
        borderRadius='md'
        p={4}
        w='100%'
        justifyContent='space-between'
    >
        <Box>
            <Text
                fontWeight='bold'
            >
                {employee.name}
            </Text>
            <Text>
                Role: {getEmployeeTitle(employee.type)}
            </Text>
            <Text>
                Salary: ${employee.salary.toLocaleString()}
            </Text>
        </Box>
        <IconButton
            aria-label='Delete Employee'
            icon={<DeleteIcon />}
            onClick={() => deleteEmployee(employee.employeeID)}
        />
    </Flex>
  )
}

export default EmployeeComponent