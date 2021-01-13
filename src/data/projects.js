import { Box } from "@chakra-ui/react"

const projects = [
  {
    name: 'off we fly',
    tags: ['place'],
    image: 'owf.png',
    flavor: 'planepooling app',
    description: "Time management app with a timer. Create your tasks, focus on productivity."
  },
  {
    name: 'POMO',
    tags: ['blackandwhite'],
    image: 'pomo.png',
    flavor: 'productivity app',
    description: "Time management app with a timer. Create your tasks, focus on productivity."
  },
  {
    name: 'PANOPLI',
    image: 'panopli.png',
    tags: ['clothing'],
    flavor: 'productivity app',
    description: (
      <Box>
      <p>
        Mes couilles
      </p>
      </Box>
    )
  },
  {
    name: 'auth',
    tags: ['blackandwhite'],
    image: 'auth.png',
    flavor: 'Authentication app',
    description: "Time management app with a timer. Create your tasks, focus on productivity."
  },
  {
    image: 'ubisoft.png',
    name: 'ubisoft',
    flavor: 'productivity app',
    tags: ['gaming'],
    description: "Time management app with a timer. Create your tasks, focus on productivity."
  },
]

export default projects
