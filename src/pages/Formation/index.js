import { Divider, Grid, GridItem, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'
import formations from '../../data/formations'

const FormationItem = ({ formation }) => {
  return (
    <Box
      marginBottom='10px'
      p='3'
      shadow='md'
      borderRadius='md'
      border='1px solid #eee'
    >
      <Text fontSize='4xl'>
        {formation.name}
      </Text>
      <Text fontSize='2xl' as='i'>
        {formation.time}
      </Text>
      <Divider />
      {formation.description}
    </Box>
  )
}

const Formation = ({ }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap='4'>
      <GridItem colSpan='2'>
        {
          formations.map(formation => <FormationItem formation={formation}/>)
        }
      </GridItem>
      <GridItem>
        <Image
          src="https://source.unsplash.com/900x1600/?school"
        />
      </GridItem>
    </Grid>
  )
}

export default Formation
