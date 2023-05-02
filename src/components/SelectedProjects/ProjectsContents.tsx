import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { RiArrowDropRightFill as IconArrow } from 'react-icons/ri'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Project } from '../../constants/contents'
import { ActionsProjects } from './ActionsProjects'

gsap.registerPlugin(ScrollTrigger)

interface ContentsProps {
  project: Project
  toggleContent: () => void
}

export const ContentProjectsContainer = styled.div`
  width: 50vw;
  padding: 3vh 5vw;
  position: absolute;
  z-index: 10;
  opacity: 0;
  color: ${({ theme }) => theme.contrastPrimaryColor};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.textBody};
  line-height: ${({ theme }) => theme.lineHightBody};
  margin-bottom: 5vh;

  @media screen and (max-width: 1279px) {
    display: block;
    padding: 5vh 10vw;
    max-height: unset;
    margin-bottom: 0vh;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 5vw;
    width: 80vw;
  }
  @media screen and (max-width: 430px) {
    padding: 0;
    margin-bottom: 4vh;
    font-size: ${({ theme }) => theme.textBodyMobile};
    line-height: ${({ theme }) => theme.lineHightBodyMobile};
  }
  h4 {
    font-family: ${({ theme }) => theme.fontSecondary};
  }
  .close-content-container {
    position: absolute;
    height: 100%;
    transform: rotate(180deg);
    cursor: pointer;
    opacity: 0;
    z-index: 15;
    left: 0vw;
    @media screen and (max-width: 1439px) {
      left: 0.8vw;
    }
    @media screen and (max-width: 1279px) {
      display: none;
    }
    .arrow-close {
      color: ${({ theme }) => theme.tertiaryColor};
      height: 5vw;
      width: 5vw;
    }
  }
`
const HeaderContainer = styled.div`
  display: flex;
  gap: 5vw;
  align-items: center;
  padding-bottom: 1vh;
  h1 {
    margin: 0;
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 2vw;
    @media screen and (max-width: 1023px) {
      font-size: ${({ theme }) => theme.textHeaderSmall};
      line-height: ${({ theme }) => theme.lineHightHeaderMobile};
    }
  }
`
const StackProject = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1.5vh;
  gap: 2vw;
  @media screen and (max-width: 430px) {
    gap: 1.5vh;
  }
  .stack-icons {
    display: flex;
    gap: 2vw;
    color: ${({ theme }) => theme.contrastPrimaryColor};
    @media screen and (max-width: 430px) {
      width: 40%;
    }
    .tech-icon {
      width: 20px;
      height: 20px;
      @media screen and (max-width: 430px) {
        width: 16px;
        height: 16px;
      }
    }
  }
`
const ProjectSkills = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vh;
`
export const ProjectsContent = forwardRef<HTMLDivElement, ContentsProps>(
  ({ project, toggleContent }, contentRef) => {
    return (
      <ContentProjectsContainer
        ref={contentRef}
        aria-modal="true"
        className="content-project-container"
      >
        <button className="close-content-container">
          <IconArrow
            onClick={toggleContent}
            className="arrow-close"
            style={{ cursor: 'pointer' }}
          />
        </button>
        <HeaderContainer>
          <h1> {project.title}</h1>
          <ActionsProjects project={project} />
        </HeaderContainer>
        <div className="project-description">{project.description}</div>
        <ProjectSkills>
          <h4>Skills:</h4>
          <p>{project.skills}</p>
        </ProjectSkills>
        <StackProject>
          <h4>Technologies used:</h4>
          <div className="stack-icons">
            {project.stack.map((stack) => (
              <span key={stack.name}>
                {<stack.icon title={stack.name} className="tech-icon" />}
              </span>
            ))}
          </div>
        </StackProject>
      </ContentProjectsContainer>
    )
  }
)
