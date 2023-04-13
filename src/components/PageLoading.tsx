import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'
import {
  LeftBracket,
  LeftBracketContainer,
  RightBracket,
  RightBracketContainer,
} from '../styles/globalStyles'

const Wrapper = styled.section<{ displayLoader: boolean }>`
  height: 100vh;
  width: 100vw;
  display: ${({ displayLoader }) => (displayLoader ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
  background: ${({ theme }) => theme.primaryBackground};
  gap: 0.5vw;
  .brackets {
    opacity: 0;
    scale: 0;
  }
`
const Name = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: 4vw;
  .chars {
    color: ${({ theme }) => theme.contrastPrimaryColor};
    scale: 1.3;
    opacity: 0;
    padding: 0 0.2vw;
  }
  .first-letter {
    color: ${({ theme }) => theme.tertiaryColor};
    opacity: 0;
    scale: 0;
  }
`

interface Props {
  displayLoader: boolean
  setDisplayLoader: (_: boolean) => void
}

const ANIMATION_DURATION_MS = 3200

export function PageLoading({ displayLoader, setDisplayLoader }: Props) {
  setTimeout(() => {
    setDisplayLoader(false)
  }, ANIMATION_DURATION_MS)

  useEffect(() => {
    const tl = gsap
      .timeline({
        defaults: { opacity: 1, scale: 1.3, duration: 0.8 },
      })
      .to(['.brackets', '.first-letter'], {})
      .fromTo(
        '.chars',
        {
          opacity: 0,
          display: 'none',
        },
        {
          display: 'flex',
          stagger: 0.1,
          duration: 0.2,
        },
        '>'
      )
    tl.yoyo(true).repeat(1)
  }, [])
  return displayLoader ? (
    <Wrapper displayLoader={displayLoader}>
      <LeftBracketContainer
        scale={{ scaleDesk: 1, scaleLaptopS: 1, scaleMobile: 1 }}
      >
        <LeftBracket
          className="brackets"
          scale={{ scaleDesk: 1, scaleLaptopS: 1, scaleMobile: 1 }}
        />
      </LeftBracketContainer>
      <Name>
        {'isadora'.split('').map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={char[0] === 'i' ? ' first-letter' : 'chars'}
          >
            {char}
          </span>
        ))}
      </Name>
      <RightBracketContainer
        scale={{ scaleDesk: 1, scaleLaptopS: 1, scaleMobile: 1 }}
      >
        <RightBracket
          className="brackets"
          scale={{ scaleDesk: 1, scaleLaptopS: 1, scaleMobile: 1 }}
        />
      </RightBracketContainer>
    </Wrapper>
  ) : null
}
