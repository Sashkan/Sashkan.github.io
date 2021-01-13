import { Box, Text } from '@chakra-ui/react'
import { motion } from "framer-motion"

import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectView from '../../components/ProjectView'
import projects from '../../data/projects'

const Project = ({ }) => {
  const {
    name
  } = useParams()

  const project = projects.find(p => p.name.toLowerCase() === name.toLowerCase())

  return (
    <motion.div
      layoutId='project'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ProjectView
        project={project}
      />
    </motion.div>
  )
}

export default Project
