import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TbMoon as IconDarkMode, TbSun as IconLightMode } from 'react-icons/tb'
import styled from 'styled-components'
import { useCustomTheme } from '../../hooks/useCustomTheme'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { SupportedThemes } from '../../context/themeContext'
import { RenderMobile } from '../RenderMobile'
import { HamburgerMenu } from './HamburgerMenu'
import { NavigationLinks } from './NavigationLinks'
import { SocialMediaIcons } from './SocialMediaIcons'
import Logo from '../../assets/logo.svg'
import { RenderDesktop } from '../RenderDesktop'

gsap.registerPlugin(ScrollTrigger)

const NavContainer = styled.nav<{ isMenuOpen: boolean }>`
  min-height: 12vh;
  padding: 5vh 6vw;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  z-index: 1000;
  transition: ease 0.4s;
  @media screen and (max-width: 430px) {
    padding: 5vh 8vw;
  }
`

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
`
const ToggleButton = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const BlurBackground = styled.div<{ isMenuOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  filter: blur(6px) opacity(50%);
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  background: rgba(164, 164, 164, 0.782);
  position: fixed;
  top: 0;
  left: 0;
`
const PageLinks = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  gap: 2vw;

  @media screen and (max-width: 1279px) {
    position: fixed;
    right: 0;
    top: 0;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    background: ${({ theme }) => theme.primaryColor};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 5vh;
    height: 100vh;
    width: 30%;
    padding: 15vh 5vw;
    box-shadow: -1px 4px 21px rgba(0, 0, 0, 0.15);
  }
  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 430px) {
    width: 70%;
  }
`
const IconsThemeContainer = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  button {
    transition: all 500ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.contrastPrimaryColor};

    .theme-icon {
      width: 20px;
      height: 20px;
      cursor: pointer;
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
  @media screen and (max-width: 1279px) {
    position: absolute;
    top: 12vh;
    right: 0;
    padding-right: 6vw;
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'flex')};
    height: auto;
  }
  @media screen and (max-width: 430px) {
    padding-right: 8vw;
  }
`

export function NavigationBar() {
  const { changeTheme, currentTheme } = useCustomTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const width = useWindowWidth()
  const navBarRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const responsiveAnimation = gsap.matchMedia()
    responsiveAnimation.add('(min-width:1280px)', () => {
      const showAnim = gsap
        .from('#main-navbar', {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
      })
    })
  }, [])
  return (
    <NavContainer ref={navBarRef} id="main-navbar" isMenuOpen={isMenuOpen}>
      <LogoContainer href="#homepage">
        <Logo />
      </LogoContainer>
      <RenderMobile width={width}>
        <>
          <BlurBackground
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          />
          <ToggleButton
            aria-label={`${
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerMenu isMenuOpen={isMenuOpen} />
          </ToggleButton>
          <PageLinks
            aria-modal="true"
            isMenuOpen={isMenuOpen}
            className="sidebar"
          >
            <NavigationLinks setIsMenuOpen={setIsMenuOpen} />
          </PageLinks>
        </>
      </RenderMobile>
      <RenderDesktop width={width}>
        <PageLinks isMenuOpen={isMenuOpen}>
          <NavigationLinks setIsMenuOpen={setIsMenuOpen} />
        </PageLinks>
      </RenderDesktop>

      <IconsThemeContainer aria-hidden="true" isMenuOpen={isMenuOpen}>
        <button onClick={changeTheme}>
          {currentTheme === SupportedThemes.light ? (
            <IconDarkMode className="theme-icon" title="Switch to dark mode" />
          ) : (
            <IconLightMode
              className="theme-icon"
              title="Switch to light mode"
            />
          )}
        </button>
      </IconsThemeContainer>
      <SocialMediaIcons isMenuOpen={isMenuOpen} />
    </NavContainer>
  )
}
