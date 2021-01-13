import { Box, Text } from '@chakra-ui/react'
import { motion } from "framer-motion"

import React from 'react'
import ProjectsList from '../../components/ProjectsList'
import projects from '../../data/projects'

const Projects = ({ }) => {
  return (
    <motion.div
      layoutId='projects'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ProjectsList
        projects={projects}
      />
    </motion.div>
  )
}

export default Projects
