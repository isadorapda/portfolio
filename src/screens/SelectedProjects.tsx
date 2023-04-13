import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { AnimatedProject } from '../components/SelectedProjects/AnimatedProject'
import { PROJECTS_DESCRIPTION } from '../constants/contents'
import { SectionHeaders, Wrapper } from '../styles/globalStyles'
import { headersAnimations } from '../utils/animations/headersAnimations'

const SectionWrapper = styled(Wrapper)`
  flex-direction: column;
  padding: 20vh 0 10vh;
  background: ${({ theme }) => theme.secondaryBackground};
  @media screen and (max-width: 430px) {
    padding: ${({ theme }) => theme.paddingSecetionsMobile};
  }
`
const Header = styled(SectionHeaders)`
  left: 50%;
  transform: translateX(-50%);
`
const ProjectsWrapper = styled.div`
  position: relative;
  width: 100vw;
  gap: 15vh;
  padding: 25vh 0 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 15vh 0 15vh;
    gap: 15vh;
  }
  @media screen and (max-width: 430px) {
    padding: 5vh;
    width: 100%;
    gap: 10vh;
  }
`

export function SelectedProjects() {
  const projectsRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      headersAnimations(
        '.title-projects',
        '.title-projects',
        { yPercent: 30 },
        {
          start: 'top bottom-=50',
          end: 'top bottom',
        }
      )
    }, projectsRef)
    return () => ctx.revert()
  }, [])
  return (
    <SectionWrapper id="projects" ref={projectsRef}>
      <Header className="title-projects">Projects</Header>
      <ProjectsWrapper>
        {PROJECTS_DESCRIPTION.map((project) => (
          <AnimatedProject
            key={project.id}
            project={project}
            ref={projectsRef}
          />
        ))}
      </ProjectsWrapper>
    </SectionWrapper>
  )
}
