import React from 'react'
import styled from 'styled-components'
import { SOCIALS_ICON_LINKS } from '../../constants/socialsIconLinks'

interface MediaProps {
  isMenuOpen?: boolean
}

const IconsContainer = styled.div<{ isMenuOpen: boolean }>`
  position: fixed;
  right: 6vw;
  top: 50vh;
  transform: translateY(-50%);
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'flex')};

  flex-direction: column;
  gap: 6vh;
  a {
    color: ${({ theme }) => theme.contrastPrimaryColor};
    &:hover {
      transform: scale(1.2);
      color: ${({ theme }) => theme.tertiaryColor};
      transition: all 300ms;
    }
    .icon-socials {
      width: 20px;
      height: 20px;
      @media screen and (min-width: 431px) and (max-width: 1024px) {
        width: 18px;
        height: 18px;
      }
      @media screen and (max-width: 430px) {
        width: 16px;
        height: 16px;
      }
    }
  }
  @media screen and (max-width: 1023px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: row;
    top: 70vh;
    right: 0;
    justify-content: center;
    width: 40vw;
  }
  @media screen and (max-width: 430px) {
    width: 70vw;
  }
`

export function SocialMediaIcons({ isMenuOpen }: MediaProps) {
  return (
    <IconsContainer isMenuOpen={isMenuOpen}>
      {SOCIALS_ICON_LINKS.map((icon) => {
        return (
          <a
            aria-label={`Go to my ${icon.title} page.`}
            key={icon.path}
            href={icon.path}
            title={icon.title}
            target="_blank"
          >
            {
              <icon.icon
                className="icon-socials"
                style={{ cursor: 'pointer' }}
              />
            }
          </a>
        )
      })}
    </IconsContainer>
  )
}
