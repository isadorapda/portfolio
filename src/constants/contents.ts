import { v4 as uuidv4 } from 'uuid'
import { FaReact as IconReact } from 'react-icons/fa'
import {
  SiTypescript as IconTS,
  SiTailwindcss as IconTailwind,
  SiStyledcomponents as IconStyledComp,
  SiGreensock as IconGSAP,
  SiReactrouter as IconRouter,
  SiWebpack as IconWbpack,
} from 'react-icons/si'
import { TbBrandVite as IconVite } from 'react-icons/tb'
import { IconType } from 'react-icons'
import RecipesProject from '../assets/ProjectsImages/recipesWebApp.webp'
import WeatherForecastProject from '../assets/ProjectsImages/weatherForecast.webp'
import Portfolio from '../assets/ProjectsImages/portfolio.webp'

export const ABOUT_ME = {
  professionHeadline: `Front-end developer`,
  mainFirstPart: `<p class="paragraphs">Hi there! My name is Isadora, and I am a front-end developer based in London. I started studying JavaScript on my own in July 2022, and I am now working hard to build my skills and knowledge through self-teaching and mentorship.</p><p class="paragraphs">
  I have a BSc and an MSc degree in Dietetics and in Public Health, respectively. While I enjoyed helping others with their health and wellness goals, I found that the work didn't fully challenge me. It was time to rethink what I should be doing.</p>`,
  mainSecondPart: `<span class="highlight">Changing careers is scary. </span> However, I have always trusted that anything can be learned and improved with <span class="highlight">practice, persistence, and willingness.</span> <p class="paragraphs">
  I was introduced to the software development world by a software engineer, who was willing to guide me through the process.</p>
  <p class="paragraphs">Coding has been a game changer in my life. It keeps me motivated and focused.</p>`,
  skillsTech: [
    'React',
    'TailwindCSS',
    'TypeScript',
    'HTML',
    'JavaScript',
    'CSS',
    'Styled-components',
    'Responsive Design',
  ],
  skillsTransferable: `A great advantage of changing careers is the set of <span class="highlight"> transferable skills</span>. In my context, these include excellent <span class="highlight">interpersonal communication, creativity in problem-solving, analytical thinking, and strong time-management abilities</span>. I believe that these skills will help me to become a more effective and well-rounded developer, and I am always looking for ways to leverage them in my work.`,
  contacts: {
    mobile: '+44 7306560444',
    emailAddress: 'isadorapda@gmail.com',
    linkedIn: 'isadorapda',
  },
  personalInfos: [
    {
      label: 'Nationality',
      value: 'Brazilian',
    },
    { label: 'Location', value: 'London' },
    { label: 'Pronouns', value: 'she/her' },
    { label: 'Interests', value: 'reading, yoga, board games' },
  ],
}
interface Stack {
  name: string
  icon: IconType
}
export interface Project {
  id: string
  title: string
  description: string
  skills: string
  stack: Array<Stack>
  image: string
  linkGithub: string
  url: string
}

export const PROJECTS_DESCRIPTION: Array<Project> = [
  {
    id: uuidv4(),
    title: 'Food Recipes',
    description: `Allows users to search for, view, and save recipes. The application includes a database of recipes that can be searched by ingredients, meal type, dietary restrictions, and other parameters. Users can add missing ingredients to a grocery lists. `,
    skills:
      'React, TS, Tailwind, Vercel, Handling asynchronous requests from public API, Manipulating data, React Custom Hooks, Reusable functions, Responsive design, React Context, React Router, UX',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },
      {
        name: 'React Router',
        icon: IconRouter,
      },
      {
        name: 'Tailwind',
        icon: IconTailwind,
      },
    ],

    image: `${RecipesProject}`,
    linkGithub: 'https://github.com/isadorapda/recipes-web-project',
    url: 'https://recipes-web-project.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Weather Forecast',
    description: `A responsive web application which allows users to access current and future weather information for a selected location. User-friendly interface with image elements to make it easy to understand the weather forecast. Built using Vite, TypeScript, ReactJS, Styled-Components, and React Select.  `,
    skills:
      'React, TS, Github, Vercel, Vitejs, Handling asynchronous requests from public API, Manipulating data, React Context, Responsive design, UX',
    stack: [
      {
        name: 'Vite',
        icon: IconVite,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },

      {
        name: 'Styled-components',
        icon: IconStyledComp,
      },
    ],

    image: `${WeatherForecastProject}`,
    linkGithub: 'https://github.com/isadorapda/weather-forecast-react-app',
    url: 'https://weather-forecast-react-app.vercel.app/',
  },
  {
    id: uuidv4(),
    title: 'Portfolio',
    description: `This web application is a modern, responsive and visually appealing website to showcase my front-end skills. The website is built using a range of powerful tools and technologies, including Webpack, React, TypeScript, Styled-Components, and GSAP.`,
    skills:
      'React, React Custom Hooks, React Context, TS, Vercel, Styled-components, GreenSock, Webpack, UI/UX, Responsive design, Figma, Time management/ project planning',
    stack: [
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'React',
        icon: IconReact,
      },

      {
        name: 'Styled-components',
        icon: IconStyledComp,
      },
      {
        name: 'GreenSock',
        icon: IconGSAP,
      },
      {
        name: 'Webpack',
        icon: IconWbpack,
      },
    ],

    image: `${Portfolio}`,
    linkGithub: 'https://github.com/isadorapda/',
    url: '#homepage',
  },
]
