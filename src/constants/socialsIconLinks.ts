import {
  TiSocialLinkedin as IconLinkedIn,
  TiSocialTwitter as IconTwitter,
} from 'react-icons/ti'
import { IoLogoGithub as IconGithub } from 'react-icons/io'
import { IconType } from 'react-icons'

interface IconLinks {
  path: string
  icon: IconType
  title: string
}
export const SOCIALS_ICON_LINKS: Array<IconLinks> = [
  {
    path: 'https://github.com/isadorapda',
    icon: IconGithub,
    title: 'Github',
  },
  {
    path: 'https://twitter.com/home',
    icon: IconTwitter,
    title: 'Twitter',
  },
  {
    path: 'https://www.linkedin.com/in/isadora-pilau-de-almeida-412359b0/',
    icon: IconLinkedIn,
    title: 'LinkedIn',
  },
]
