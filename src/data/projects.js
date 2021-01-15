import { Box, Text } from "@chakra-ui/react"

const projects = [
  {
    name: 'off we fly',
    tags: ['place'],
    image: 'KxCJXXGsv9I',
    flavor: 'planepooling app',
    stack: ['Symfony', 'FTP'],
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          Panopli was the very first project I worked on. As CTO and cofounder, I learned everything from scratch: management, product design, deployment.
          The first part of the project was nurtured as our last-year project at HEC Paris.
          We all learned how to pitch, how to iterate, how to convince an audience, but the greatest gift from this project was the self-confidence we earned from creating a project from scratch.
        </Text>
        <Text marginBottom='10px'>
          We wanted to create a planepooling app, so that empty seats could be booked on private planes.
        </Text>
        <Text marginBottom='10px'>
          The product took an end when the French Authorithies decided that planepooling was not authorized. Still, I loved every second of it
        </Text>
      </Box>
    )
  },
  {
    name: 'POMO',
    tags: ['blackandwhite'],
    image: 'KYxXMTpTzek',
    flavor: 'productivity app',
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          Pomo came up from a funny idea: I needed a side project, I was lazy, and I wanted to skill-up on the latest versions of React.
          So, I started with the usual to-do app, and slowly added more and more bricks to create a time management app, based on the
          <a href='https://waitbutwhy.com/2016/10/100-blocks-day.html' target='_blank'>wonderful article by Tim Urban</a>.
        </Text>
        <Text marginBottom='10px'>
          Long story short, you day if made of 100 blocks, each worth 10 minutes. The app helps you make the most of these 100 blocks.
        </Text>
        <Text marginBottom='10px'>
          In the end, what started as the simplest React app came up to be a nice productivity app with a lots of insights about how not to waste your day.
        </Text>
      </Box>
    )
  },
  {
    name: 'Krawd',
    image: 'LPWl2pEVGKc',
    tags: ['design', 'project management'],
    stack: ['Ruby on Rails', 'react.js', 'Heroku'],
    flavor: 'Project Management Dashboard',
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          Krawd was my first "real" job, mostly becase this was the first time I had to go through a recruitment process. The MVP was already there, but was in need of a CTO, and here I came.
        </Text>
        <Text marginBottom='10px'>
          This app helps you manage your creative projects by providing you freelance designers, along with a dashboard where you can manage both your project and your team.
        </Text>
        <Text marginBottom='10px'>
          If this project taught me one thing, it was how dumb I was back then. Yet another victim of the <a target='_blank' href='https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect#:~:text=The%20Dunning%E2%80%93Kruger%20effect%20is,recognize%20their%20lack%20of%20ability.'>Dunning-Kruger effect</a>,
          I thought I was a tech lead, a master developer, but in reality, I was naught but a scared, young dev, eager to learn, but too proud to fail. Fortunately enough, we hired a real CTO, who slowly taught me how to question my code, and myself.
        </Text>
      </Box>
    )
  },
  {
    name: 'Asia',
    image: 'wPMvPMD9KBI',
    tags: ['trip', 'hackaton'],
    stack: ['Ruby on Rails', 'react.js', 'Heroku', 'a good pair of legs'],
    flavor: 'A life-changing moment',
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          WHile working at Krawd, I took part in a Hackaton, set up by a French Bank.
        </Text>
        <Text marginBottom='10px'>
          The app we created in 48 hours was focused on internal mobility within a company: anyone has soft skills, the app was here to help you find a job that would suit yours. Within 48 hours, we had it running on a web application and a dedicated iOs app.
        </Text>
        <Text marginBottom='10px'>
          David, Aleksandr and I won the first prize: a trip though all of Asia, from Japan to Vietnam.
        </Text>
        <Text marginBottom='10px'>
          This is probably the most defining experience in my life. I was lucky enough to travel a lot, both with my family and by myself, but this was the first time I did it for so long, with two people I barely knew.
        </Text>
        <Text marginBottom='10px'>
          I have too many memories about this trip to simply write them down here, but let's just say that I learned more about myself during this trip, than I ever did before. I learned about life, death, about fear and happiness, but mostly, I learned inner peace.
        </Text>
      </Box>
    )
  },
  {
    name: 'PANOPLI',
    image: 'ToLMORRb97Q',
    tags: ['clothing'],
    stack: ['node.js', 'react.js', 'aws'],
    flavor: 'productivity app',
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          Panopli is the 3rd company I worked for, and the very first project where I was not a cofounder.
        </Text>
        <Text marginBottom='10px'>
          This app helps you create customized products. From mugs to t-shirts, we created a canva on which you could design and edit your products.
        </Text>
        <Text marginBottom='10px'>
          Even though the tech was high-end (SVGs are a nightmare...), the greatest lesson I took from this job was humility. As a developer, knowing that you don't know anything is a great, and painful lesson.
          After two and a half years working with this wonderful team, I learned the value of peer-programming, afterworks, and the hell of code legacy.
        </Text>
      </Box>
    )
  },
  {
    name: 'geshido',
    tags: ['blackandwhite'],
    image: 'ZJlfUi5rTDU',
    flavor: 'Coding Lessons',
    stack: ['react.js', 'strapi', 'OBS', 'AWS'],
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          As my latest (and biggest) project, geshido will always have a sspecial place in my heart.
        </Text>
        <Text marginBottom='10px'>
          After 4 years of using React.js and node.js, I thought I knew enough to set up an online course. And I did not.
        </Text>
        <Text marginBottom='10px'>
          The funny thing about teaching something is that it requires more than sheer knowledge: you need a proper setup. I had no camera, no microphone, no board, nothing.
          And yet, I bought all of this, and slowly started to learn how to create a course.
        </Text>
        <Text marginBottom='10px'>
          The best thing about creating a course is that you are racing against yourself. A course can never be perfect, and as you create new courses, you learn new tricks, making your old courses looking miserable. So you start over again,
          And after a while, you start being confidsent about your very first course, the one that people will watch first.
          Even though this is not a technical prowess, I consider this project to be my greatest achievement.
        </Text>
      </Box>
    )
  },
  {
    name: 'auth',
    tags: ['blackandwhite'],
    image: 'PWjA3zA497I',
    flavor: 'Authentication app',
    stack: ['react.js'],
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          Auth is a simple project using JWT tokens to implement basic authentication within any react app
        </Text>
        <Text marginBottom='10px'>
          Authentication is mandatory on most apps nowadays, and I didn't want to implement it every time I started a new project, so instead, I created this simple component, which takes but two props: and endpoint, and an array of providers.
        </Text>
        <Text marginBottom='10px'>
          On submit, form data is sent to your back-end.
        </Text>
      </Box>
    )
  },
  {
    name: 'ubisoft',
    image: 'ITFwHdPEED0',
    flavor: 'productivity app',
    tags: ['gaming'],
    stack: ['react.js', 'contentful', 'node.js'],
    description: (
      <Box textAlign='justify'>
        <Text marginBottom='10px'>
          I'm currently working as the EMEA Lead Developer at Ubisoft.
        </Text>
        <Text marginBottom='10px'>
          I've been playing video games for the past 25 years, needless to say I feel like I bolong in this company, like never before.
        </Text>
        <Text marginBottom='10px'>
          My day-to-day job is all about management and coding: Sure, I can still code and I take part in sprints, but beside that, I'm in charge of a lot of management: defining the roadmap, peer-programing with devs, enhancing our daily tools to automatize as many tasks as possible.
        </Text>
      </Box>
    )
  },
]

export default projects
