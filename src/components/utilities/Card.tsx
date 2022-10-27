import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Card : React.FC<Props> = ({ children }) => {
  return (
    <Box
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent='center'
        width="100%"
        position="relative"
        minWidth="0px"
        bg="#ffffff"
        backgroundClip="border-box"
        rounded='lg'
        shadow='xl'
    >
        {children}
    </Box>
  )
}

export default Card