import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({ project }) => {
  return (
    <GridItem colSpan='1'>
      <Link to={`/project/${project.name}`}>
        <Flex
          h='35em'
          alignItems='flex-end'
          justifyContent='center'
          background={`url('https://source.unsplash.com/800x1000/?${project.tags.join(',')}') no-repeat center center`}
          backgroundSize='cover'
          _hover={{
            opacity: '0.8',
            paddingBottom: '10px',
          }}
          transition='0.2s'
        >
          <Box
            p='3'
            w='100%'
            bg='#fff'
          >
            <Text fontSize='2xl' color='#000' fontWeight='bold'>
              {project.name}
            </Text>
          </Box>
        </Flex>
      </Link>
    </GridItem>
  )
}

const ProjectsList = ({ projects }) => {
  return (
    <Box>
      <Grid
        gap='5'
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
        ]}>
        {
          projects.map((project) => <ProjectListItem project={project} />)
        }
      </Grid>
    </Box>
  )
}

export default ProjectsList
