import React from 'react'

import { HStack, Text, VStack } from '@chakra-ui/react'

import Card from '../utilities/Card'
import useBanks from '../../hooks/useBanks'
import SelectBank from './SelectBank'
import Branches from '../Branches'

const Banks : React.FC = () => {

    const {
        banks,
        selectedBank,
        selectBank
    } = useBanks();

  return (
    <Card>
        <VStack
            spacing={4}
            alignItems='flex-start'
        >
            <HStack
                justifyContent='space-between'
                w='100%'
            >
                <Text
                    fontSize='xl'
                    fontWeight='bold'
                >
                    Banks
                </Text>
                {
                    selectedBank && (
                        <SelectBank 
                            banks={banks}
                            selectedBank={selectedBank}
                            selectBank={selectBank}
                        />
                    )
                }
            </HStack>
            {
                selectedBank && (
                    <Branches
                        selectedBank={selectedBank}
                    />
                )
            }
        </VStack>
    </Card>
  )
}

export default Banks