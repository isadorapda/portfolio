import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { parallaxSection } from '../utils/animations/parallaxSection'
import { Wrapper } from '../styles/globalStyles'

gsap.registerPlugin(ScrollTrigger)

const SectionWrapper = styled(Wrapper)`
  color: ${({ theme }) => theme.contrastPrimaryColor};
`
const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  position: relative;
  .text {
    width: 90vw;
    height: 11vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.textHeadersLarge};
    opacity: 0.08;
    color: ${({ theme }) => theme.contrastPrimaryColor};
    font-family: 'Michroma', sans-serif;
    font-weight: 600;
    letter-spacing: -0.5vw;
  }
`
const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`
const Header = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 10vw;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontTertiary};
  .intro-content {
    height: 20vw;
    opacity: 1;
    .intro-text {
      opacity: 1;
    }
    .intro-greeting {
      font-size: 5vw;
      font-weight: 300;
    }
    .intro-title {
      font-size: 14vw;
      margin: 0;
      font-weight: 400;
    }
  }
`

export function Home() {
  const homeContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { opacity: 0, duration: 1, ease: 'back' } })
        .from('.text', {
          y: 100,
          stagger: 0.3,
          delay: 3.3,
        })
        .from(
          '.intro-text',
          {
            y: 80,
            duration: 1,
            stagger: 0.3,
          },
          '-=1'
        )
    })
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    parallaxSection('#homepage', '#about-me')
  }, [])
  return (
    <SectionWrapper id="homepage" ref={homeContainer}>
      <Background>
        <div className="text">
          {'front'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
        <div className="text">
          {'-end'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
        <div className="text">
          {'developer'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
      </Background>
      <HeaderWrapper>
        <Header>
          <div className="intro-content">
            <h3 className="intro-greeting intro-text">Hello, I'm </h3>
            <h1 className="intro-title intro-text">Isadora</h1>
          </div>
        </Header>
      </HeaderWrapper>
    </SectionWrapper>
  )
}
