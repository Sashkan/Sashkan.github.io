import { Divider, Grid, GridItem, Image, Text, Box, UnorderedList, ListItem, List } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"
import formations from '../../data/formations'

const FormationItem = ({ formation }) => {
  return (
    <Box
      marginBottom='10px'
    >
      <Text fontSize='4xl' color='red.500'>
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
    <motion.div
      layoutId='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Grid templateColumns='repeat(3, 1fr)' gap='4'>
        <GridItem colSpan='2'>
          <Box>
            <Text fontSize='4xl'>
              Formation
        </Text>
            <Divider />
            {
              formations.map(formation => <FormationItem formation={formation} />)
            }
          </Box>

          <Text fontSize='4xl'>
            Stack
        </Text>
          <Divider />
          <UnorderedList>
            <ListItem fontSize='2xl'>node.js</ListItem>
            <ListItem fontSize='2xl'>React</ListItem>
            <ListItem fontSize='2xl'>Redux + Sagas</ListItem>
            <ListItem fontSize='2xl'>Chakra.ui</ListItem>
            <ListItem fontSize='2xl'>Mocha + Chai</ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Image
            src="https://source.unsplash.com/900x1600/?school"
          />
        </GridItem>
      </Grid>
    </motion.div>
  )
}

export default Formation
