import { Divider, Grid, GridItem, Image, Text , Box} from '@chakra-ui/react'
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
        {project.stack && project.stack.length &&
          <Box>
            <Text as='i'>Stack: {project.stack.join(', ')}</Text>
          </Box>
        }
      </GridItem>
      <GridItem colSpan='1'>
        <Image
          src={`https://source.unsplash.com/${project.image}/900x1600`}
        />
      </GridItem>
    </Grid>
  )
}

export default ProjectView
