import { Divider, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectView = ({ project }) => {
  return (
    <div>
      <Text fontSize='40px'>
        {project.name}
      </Text>
      <Text fontSize='xl' as='i'>
        {project.flavor}
      </Text>
      <Divider />
      <Text m='10px 0'>
        {project.description}
      </Text>
    </div>
  )
}

export default ProjectView
