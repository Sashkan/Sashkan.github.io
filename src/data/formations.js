import { Box } from "@chakra-ui/react"

const formations = [
  {
    name: '42',
    time: '2013 - 2015',
    description: (
      <Box>
        <p>I was part of the very first batch of students in 42.</p>
        <p>Instead of taking an internship at the end of my 1st year, I created a company with 2 other students.</p>
        <p>I stopped after two and a half years of formation, when I took my first job as a CTO at Krawd.</p>
      </Box>
    )
  },
  {
    name: 'HEC Paris',
    time: '2015',
    description: (
      <Box>
        <p>42 offered a partnership with HEC Paris to join the Entrepreneur Master</p>
        <p>I was lucky enough to be part of it, and created another company, Off We Fly</p>
        <p>Out internship took place in London, where we met investors to present our projects.</p>
      </Box>
    )
  },
]

export default formations
