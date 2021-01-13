import { Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const About = ({ }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)'>
      <GridItem colSpan='2'>
        <Text fontSize='40px'>
          Hi
        </Text>
        <Divider />
        <Text m='10px 0'>
          I'm a web developer working with node.js and React
        </Text>
      </GridItem>
      <GridItem>
        <Image
          src="https://source.unsplash.com/900x1600/?drums"
        />
      </GridItem>
    </Grid>
  )
}

export default About
