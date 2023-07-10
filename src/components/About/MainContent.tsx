import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Markup } from 'interweave'
import styled from 'styled-components'
import { ABOUT_ME } from '../../constants/contents'

gsap.registerPlugin(ScrollTrigger)

const MainContent = styled.div`
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.contrastPrimaryColor};
  font-size: ${({ theme }) => theme.textBody};
  line-height: ${({ theme }) => theme.lineHightBody};
  padding: 20vh 3vw 5vh 0;
  width: 50vw;
  h3 {
    margin: 5vh 0;
    @media screen and (max-width: 430px) {
      margin: 8vh 0;
      font-size: ${({ theme }) => theme.textBodyMobile};
    }
  }
  .stagger-group {
    opacity: 0;
  }

  .paragraph-block {
    display: flex;
    flex-direction: column;

    .paragraph-heading {
      color: ${({ theme }) => theme.tertiaryColor};
      font-size: 1.5vw;
      font-family: ${({ theme }) => theme.fontTertiary};
      @media screen and (max-width: 1023px) {
        font-size: ${({ theme }) => theme.textHeaderSmall};
      }
      @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.textHeaderSmall};
        padding: 3vh 0;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 0 0 0;
    font-size: ${({ theme }) => theme.textBodyMobile};
    line-height: ${({ theme }) => theme.lineHightBodyMobile};
  }
  .paragraphs {
    margin-bottom: 12px;
  }
  .highlight {
    color: ${({ theme }) => theme.tertiaryColor};
    font-size: 18px;
    @media screen and (max-width: 430px) {
      font-size: ${({ theme }) => theme.textBody};
    }
  }
`

export function MainContentAboutSection() {
  const contentRef = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.stagger-group', {
        stagger: 0.6,
        yPercent: -10,
        opacity: 1,
        duration: 2,
        ease: 'back',
        scrollTrigger: {
          trigger: '#about-content-section',
          start: 'top center-=20%',
          end: () => `bottom center+=30%`,
          scrub: 1,
          invalidateOnRefresh: true,
          toggleActions: 'play pause resume reset',
        },
      })
      ScrollTrigger.refresh(true)
    }, contentRef)
    return () => ctx.revert()
  }, [])
  return (
    <MainContent ref={contentRef}>
      <h3 className="stagger-group">
        Hi there! My name is Isadora, I am a software developer based in London.
      </h3>
      <div className="paragraph-block stagger-group">
        <h1 className="paragraph-heading">{ABOUT_ME.firstParagraph.heading}</h1>
        <Markup
          tagName="div"
          content={ABOUT_ME.firstParagraph.paragraphContent}
        />
      </div>
      <div className="paragraph-block stagger-group">
        <h1 className="paragraph-heading">
          {ABOUT_ME.secondParagraph.heading}
        </h1>
        <Markup
          tagName="div"
          content={ABOUT_ME.secondParagraph.paragraphContent}
        />
      </div>
    </MainContent>
  )
}
