import { Divider, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectView = ({ project }) => {
  return (
    <Grid templateColumns='repeat(6, 1fr)' gap='5'>
      <GridItem colSpan='5'>
        <Text fontSize='40px'>
          {project.name}
        </Text>
        <Divider />
        <Text fontSize='xl' as='i'>
          {project.flavor}
        </Text>
        <Text m='10px 0'>
          {project.description}
        </Text>
      </GridItem>
      <GridItem colSpan='1'>
        <Image
          src={`/${project.image}`}
        />
      </GridItem>
    </Grid>
  )
}

export default ProjectView
