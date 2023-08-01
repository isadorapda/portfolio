import { v4 as uuidv4 } from 'uuid'
import { FaReact as IconReact } from 'react-icons/fa'
import {
  SiTypescript as IconTS,
  SiTailwindcss as IconTailwind,
  SiStyledcomponents as IconStyledComp,
  SiGreensock as IconGSAP,
  SiReactrouter as IconRouter,
  SiWebpack as IconWbpack,
  SiVitest as IconVitest,
  SiNodedotjs as IconNode,
  SiPrisma as IconPrisma,
  SiDocker as IconDocker,
  SiNextdotjs as IconNext,
  SiPrismic as IconPrismic,
  SiSass as IconSass,
  SiStripe as IconStripe,
  SiFauna as IconFauna,
} from 'react-icons/si'
import { TbBrandVite as IconVite } from 'react-icons/tb'
import { IconType } from 'react-icons'
import RecipesProject from '../assets/ProjectsImages/recipesWebApp.webp'
import WeatherForecastProject from '../assets/ProjectsImages/weatherForecast.webp'
import Portfolio from '../assets/ProjectsImages/portfolio.webp'
import ReactNews from '../assets/ProjectsImages/react-news.webp'
import PetAdoption from '../assets/ProjectsImages/adopt-pet.webp'

export const ABOUT_ME = {
  professionHeadline: `Full-stack developer`,
  firstParagraph: {
    heading: 'Who I am now and what I am enthusiast about',
    paragraphContent: `<p class="paragraphs">Over the past year, I have been actively involved in coding using technologies such as <span class="highlight">TypeScript, ReactJS, and more recently Node.js</span>. I am enthusiastic about the potential to leverage these technologies to build innovative applications that positively impact people’s lives and the opportunity to make meaningful impact through code.
    My passion for coding was ignited during my master’s dissertation while searching for ways to improve the statistical analysis. I became deeply interested in the code that powered the tests and calculations of the software that I was using.</p>`,
  },
  secondParagraph: {
    heading: 'Who I was and why I changed',
    paragraphContent: `<p class="paragraphs">I hold a BSc degree in Dietetics and an MSc degree in Public Health. While I enjoyed helping others with their health and wellness goals, I found that the work didn't fully challenge me. I soon realised that pursuing additional courses to supplement the lack of challenges in my career as a dietitian was only a short-term solution. It was time for me to explore new avenues of helping people and making a difference. Whether it involves creating user-friendly applications, contributing to open-source projects, or using technology to address global challenges. I am ready to embark on this journey with enthusiasm and commitment.</p>`,
  },
  skillsTech: [
    'React/ Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Prisma',
    'Zod',
    'Fastify',
    'React Query',
    'TailwindCSS',
    'CSS',
    'Styled-components',
    'Responsive Design',
    'unit/ e2e/ integration testing',
  ],
  currentLearning: ['Next.js', 'Fastify', 'Zod'],
  skillsTransferable: `A great advantage of changing careers is the set of <span class="highlight"> transferable skills</span>. In my context, these include excellent <span class="highlight">interpersonal communication, creativity in problem-solving, analytical thinking, and strong time-management abilities</span>. I believe that these skills will help me to become a more effective and well-rounded developer.I am constantly pushing myself to learn more and expand my digital toolset, and thrive within environments which encourage high standards and quality output.`,
  contacts: {
    mobile: '+44 7306560444',
    emailAddress: 'isadorapda@gmail.com',
    linkedIn: 'isadorapda',
  },
  personalInfos: [
    {
      label: 'Nationality',
      value: 'Brazilian/ Italian',
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
  url?: string
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

  {
    id: uuidv4(),
    title: 'Find a Pet - Still Developing',
    description: `A full-stack web app to connect pet seekers with organisations offereng pets for adoption. Organisations can create an account to register their pets for adoption. Pet seekers can search for pets based on their location, pet type, gender, size, and other filters. Users can also access each pet's detailed information and connect to the organisation via WhatsApp to make enquires about the pet.`,
    skills:
      'Pagination, Node.js, Prisma, Fastify, Zod, Docker, React, React Custom Hooks, React Context, TS, Manipulating data, TailwindCSS, Vite, Vitest, Github Actions, UI/UX, Responsive design',
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
        name: 'Tailwind',
        icon: IconTailwind,
      },

      {
        name: 'Vitest',
        icon: IconVitest,
      },
      {
        name: 'Node.js',
        icon: IconNode,
      },
      {
        name: 'Prisma',
        icon: IconPrisma,
      },
      {
        name: 'Docker',
        icon: IconDocker,
      },
    ],
    image: `${PetAdoption}`,
    linkGithub: 'https://github.com/isadorapda/pet-adoption-api',
  },
  {
    id: uuidv4(),
    title: 'React News',
    description: `A web app with news about React. Users can easily log in using their GitHub accounts and authenticated through Next Auth. The application includes a subscription feature, integrating with Stripe, granting subscribers access to in-depth articles. Non-subscribes can still access content previews. This can improve SEO, since search engines crawl and index content previews. The application utilises Fauna as its database, while Prismic serves as the CMS for the creation and delivery of contents.`,
    skills:
      'Next.js (App folder), TypeScript, Zod, Stripe, FaunaDB, NextAuth, CMS (Prismic), Sass',
    stack: [
      {
        name: 'Next.js',
        icon: IconNext,
      },
      {
        name: 'TypeScript',
        icon: IconTS,
      },
      {
        name: 'Sass',
        icon: IconSass,
      },

      {
        name: 'Prismic',
        icon: IconPrismic,
      },
      {
        name: 'Stripe',
        icon: IconStripe,
      },
      {
        name: 'Fauna',
        icon: IconFauna,
      },
    ],
    image: `${ReactNews}`,
    linkGithub: 'https://github.com/isadorapda/react-news-next-app',
  },
]
