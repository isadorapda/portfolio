import React, { useState } from 'react'
import styled from 'styled-components'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { NAVIGATION_LINKS } from '../../constants/navigationLinks'
import {
  LeftBracket,
  LeftBracketContainer,
  RightBracket,
  RightBracketContainer,
} from '../../styles/globalStyles'

gsap.registerPlugin(ScrollToPlugin)
interface LinksProps {
  setIsMenuOpen: (state: boolean) => void
}

const Link = styled.a<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 1.5vw;
  text-transform: uppercase;
  color: ${({ isActive, theme }) =>
    isActive ? theme.tertiaryColor : theme.contrastPrimaryColor};
  @media screen and (min-width: 431px) and (max-width: 1024px) {
    gap: 0.5vw;
  }
  @media screen and (max-width: 430px) {
    font-size: 16px;
  }
  .left,
  .right {
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }
  &:hover {
    color: ${({ theme }) => theme.tertiaryColor};
    transition: all 300ms ease-in-out;
    .left {
      opacity: 1;
      transition: all 300ms ease-in-out;
    }
    .right {
      opacity: 1;
      transition: all 700ms ease-in-out;
    }
  }
`

export function NavigationLinks({ setIsMenuOpen }: LinksProps) {
  const [currentNavigationLink, setCurrentNavigationLink] =
    useState<string>('#homepage')
  const scrollPage = (linkId: string) => {
    setCurrentNavigationLink(linkId)
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: linkId },
    })
  }
  return (
    <>
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.id}
          href={link.id}
          onClick={() => {
            setIsMenuOpen(false)
            scrollPage(link.id)
          }}
          isActive={currentNavigationLink === link.id}
        >
          <LeftBracketContainer
            scale={{ scaleDesk: 0.5, scaleLaptopS: 0.6, scaleMobile: 1 }}
            className="left"
          >
            <LeftBracket
              className="brackets"
              scale={{ scaleDesk: 0.7, scaleLaptopS: 0.8, scaleMobile: 0.8 }}
            />
          </LeftBracketContainer>
          {link.title}
          <RightBracketContainer
            scale={{ scaleDesk: 0.5, scaleLaptopS: 0.6, scaleMobile: 1 }}
            className="right"
          >
            <RightBracket
              className="brackets"
              scale={{ scaleDesk: 0.7, scaleLaptopS: 0.8, scaleMobile: 0.8 }}
            />
          </RightBracketContainer>
        </Link>
      ))}
    </>
  )
}
