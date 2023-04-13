import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Markup } from 'interweave'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RiArrowDropRightFill as IconArrow } from 'react-icons/ri'
import { ABOUT_ME } from '../../constants/contents'
import { parallaxSection } from '../../utils/animations/parallaxSection'
import { SectionHeaders, Wrapper } from '../../styles/globalStyles'
import { headersAnimations } from '../../utils/animations/headersAnimations'
import pdfCV from '../../assets/cv.pdf'

gsap.registerPlugin(ScrollTrigger)

const SectionWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  padding: 10vh 10vw;
  gap: 5vw;
  background: ${({ theme }) => theme.primaryBackground};
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.paddingSecetionsMobile};
    gap: 8vh;
  }
`
const Technologies = styled.div`
  padding: 25vh 0 10vh;
  width: 60%;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 5vh 0 0;
  }
  .tech-skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-template-rows: auto;
    justify-items: start;
    gap: 3vw;
    @media screen and (max-width: 1023px) {
      align-items: center;
      width: 100%;
    }
  }
  .tech-name {
    font-family: ${({ theme }) => theme.fontSecondary};
    color: ${({ theme }) => theme.contrastPrimaryColor};
    opacity: 1;
    font-size: 2vw;
    font-weight: 300;
    display: flex;
    text-align: start;
    align-items: center;
    @media screen and (max-width: 430px) {
      font-size: 17px;
      line-height: ${({ theme }) => theme.lineHightBody};
      width: 100%;
    }
    .icon-arrow {
      color: ${({ theme }) => theme.tertiaryColor};
    }
  }
`
const TransferableSkills = styled.div`
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.textBody};
  line-height: ${({ theme }) => theme.lineHightBody};
  color: ${({ theme }) => theme.contrastPrimaryColor};
  .paragraphs {
    margin-bottom: 12px;
  }
  .highlight {
    color: ${({ theme }) => theme.tertiaryColor};
    font-size: 18px;
    @media screen and (max-width: 1023px) {
      font-size: ${({ theme }) => theme.textBody};
    }
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    font-size: ${({ theme }) => theme.textBodyMobile};
    line-height: ${({ theme }) => theme.lineHightBodyMobile};
  }
`
const OtherInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 5vh;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding-bottom: 7vh;
    align-items: center;
  }
`
const Curriculum = styled.div`
  .download-cv-button {
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 1.5vw;
    color: ${({ theme }) => theme.lightColor};
    background: ${({ theme }) => theme.tertiaryColor};
    box-shadow: ${({ theme }) => theme.shadowM};
    padding: 1.3vh 3vw;
    text-align: center;
    border-radius: 6px;
    transition: all 0.2s;
    &:hover {
      background: #5cad47;
    }
    @media screen and (max-width: 1023px) {
      font-size: ${({ theme }) => theme.textBodyMobile};
      padding: 1.3vh 5vw;
    }
  }
`

export function SkillsSection() {
  const skillsRef = useRef()
  useEffect(() => {
    const ctx = gsap.context(() => {
      headersAnimations(
        '.skills-header',
        '#skills',
        { xPercent: -110 },
        {
          start: 'top bottom-=10%',
          end: ' center bottom',
        }
      )
      gsap.from('.tech-name', {
        y: 50,
        stagger: 0.3,
        ease: 'back',
        opacity: 0,
        duration: 2,

        scrollTrigger: {
          trigger: '.tech-skills-grid',
          start: 'top bottom',
          end: 'bottom bottom-=28%',
          scrub: 1,
          toggleActions: 'play reset play restart',
        },
      })
    }, skillsRef)
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    parallaxSection('#skills', '#projects-selection')
  }, [])
  return (
    <SectionWrapper id="skills" ref={skillsRef}>
      <SectionHeaders className="skills-header">skills</SectionHeaders>
      <Technologies>
        <div className="tech-skills-grid">
          {ABOUT_ME.skillsTech.map((tech) => (
            <h3 className="tech-name" key={tech}>
              <IconArrow aria-hidden="true" className="icon-arrow" />
              {tech}
            </h3>
          ))}
        </div>
      </Technologies>
      <OtherInfos>
        <TransferableSkills>
          <Markup tagName="div" content={ABOUT_ME.skillsTransferable} />
        </TransferableSkills>
        <Curriculum>
          <a href={pdfCV} target="_blank" className="download-cv-button">
            Download my CV
          </a>
        </Curriculum>
      </OtherInfos>
    </SectionWrapper>
  )
}
