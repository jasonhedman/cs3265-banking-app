import { Box, Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({ children }) => {
  return (
    <Box
        minH='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        bg='gray.50'
    >
        <Container
            h='100%'
        >
            {children}
        </Container>
    </Box>
  )
}

export default Layout