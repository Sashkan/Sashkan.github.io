import { Divider, Grid, GridItem, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const About = ({ }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)'>
      <GridItem colSpan='2'>
        <Text fontSize='30px' fontWeight='bold'>
          About me
        </Text>
        <Divider />
        <UnorderedList>
          <ListItem fontSize='2xl'>I'm fluent in English/French</ListItem>
          <ListItem fontSize='2xl'>I play drums.</ListItem>
          <ListItem fontSize='2xl'>I play a lot of video games.</ListItem>
          <ListItem fontSize='2xl'>I usually work at night</ListItem>
        </UnorderedList>
      </GridItem>
      <GridItem>
        <Image
          src="https://source.unsplash.com/eUMf3CaUUho/900x1600"
        />
      </GridItem>
    </Grid>
  )
}

export default About
