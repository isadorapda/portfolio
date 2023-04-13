import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { Wrapper } from '../styles/globalStyles'
import { AboutSection } from '../components/About/AboutSection'
import { SkillsSection } from '../components/About/SkillsSection'

gsap.registerPlugin(ScrollTrigger)

const SectionWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
`
export function About() {
  const aboutContainer = useRef<HTMLDivElement | null>()

  return (
    <SectionWrapper id="about-me" ref={aboutContainer}>
      <AboutSection />
      <SkillsSection />
    </SectionWrapper>
  )
}
