import { Box, Flex, Grid, GridItem, StackDivider, Text, VStack } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <Grid templateColumns='repeat(4, 1fr)'>
      <GridItem colSpan='1'>
        <Flex flexDirection='column' p='5'>
          <Link to='/'>
            <Box>
              <Text
                fontSize='3xl'
                fontWeight='bold'
                color='teal.500'
              >
                POTRAN
            </Text>
            </Box>
          </Link>
          <VStack
            margin='30px 0'
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: 'teal',
              }}
              to='/projects'>
              <Flex
                alignItems='center'
                _hover={{
                  bg: '#eee',
                  paddingLeft: '10px',
                }}
                transition='0.2s'
                p='5px 0'
              >
                PROJECTS
              </Flex>
            </NavLink>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: 'teal',
              }}
              to='/formation'>
              <Flex
                alignItems='center'
                _hover={{
                  bg: '#eee',
                  paddingLeft: '10px',
                }}
                transition='0.2s'
                p='5px 0'
              >
                FORMATION
              </Flex>
            </NavLink>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: 'teal',
              }}
              to='/about'>
              <Flex
                alignItems='center'
                _hover={{
                  bg: '#eee',
                  paddingLeft: '10px',
                }}
                transition='0.2s'
                p='5px 0'
              >
                MISC.
              </Flex>
            </NavLink>
          </VStack>
          <Box>
            <Text fontSize='xl' fontWeight='bold'>
              CONTACT
            </Text>
            <Text m='10px 0'>
              pierreoliviertran@gmail.com
            </Text>
            <Text m='10px 0'>
              06.79.63.36.78
            </Text>
            <a
              target='_blank'
              href='https://potran.medium.com/'
            >
              <Text m='10px 0' fontWeight='bold' color='teal.500'>
                medium
              </Text>
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/potran/'
            >
              <Text m='10px 0' fontWeight='bold' color='teal.500'>
                linkedin
              </Text>
            </a>
          </Box>
        </Flex>
      </GridItem>
      <GridItem colSpan='3'>
        <Box p='5' maxHeight='calc(100vh - 0px)' overflowY='auto'>
          <AnimateSharedLayout>
            {children}
          </AnimateSharedLayout>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Layout
