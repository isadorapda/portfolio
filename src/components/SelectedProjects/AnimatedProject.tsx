import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Project } from '../../constants/contents'
import { ProjectsContent } from './ProjectsContents'
import { OpenProjectsInfos } from './OpenProjectsInfos'
import { HoverActions } from './HoverActions'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { RenderDesktop } from '../RenderDesktop'
import { RenderMobile } from '../RenderMobile'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  project: Project
}
const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`
const ProjectPhotoConatiner = styled.div`
  height: 50vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
  @media screen and (max-width: 834px) {
    height: 40vh;
  }
  @media screen and (max-width: 430px) {
    height: 25vh;
  }
  .project-image {
    height: 100%;
    width: auto;
    box-shadow: ${({ theme }) => theme.shadowM};
    border-radius: 6px;
  }
`

export const AnimatedProject = forwardRef<HTMLDivElement, Props>(
  ({ project }, projectsRef) => {
    const tl = useRef(null)
    const imageContainerRef = useRef<HTMLDivElement | null>(null)
    const [isContentOpen, setIsContentOpen] = useState(false)
    const selectionsRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const width = useWindowWidth()

    const toggleContent = () => {
      tl.current.reversed(!tl.current.reversed())
      setIsContentOpen(!isContentOpen)
    }
    useEffect(() => {
      if (isContentOpen) {
        setIsContentOpen(false)
      }
    }, [width])

    useEffect(() => {
      const responsiveAnimation = gsap.matchMedia()
      const ctx = gsap.context(() => {
        responsiveAnimation.add('(min-width:1280px)', () => {
          const mouseEnter = () => {
            gsap
              .timeline()
              .to(imageContainerRef.current, {
                scale: 1.03,
              })
              .to(
                `.hover-action-${project.id}`,
                {
                  opacity: 1,
                  duration: 0.6,
                },
                0
              )
              .fromTo(
                `.show-text-${project.id}`,
                {
                  yPercent: 100,
                  opacity: 0,
                },
                {
                  ease: 'back',
                  yPercent: 0,
                  opacity: 1,
                  stagger: 0.3,
                },
                0
              )
          }
          const mouseOut = () => {
            gsap
              .timeline()
              .to(`.hover-action-${project.id}`, {
                opacity: 0,
              })

              .to(
                imageContainerRef.current,
                {
                  scale: 1,
                },
                0
              )
          }
          imageContainerRef.current.addEventListener('mouseenter', mouseEnter)
          imageContainerRef.current.addEventListener('mouseleave', mouseOut)
          return () => {
            imageContainerRef.current.removeEventListener(
              'mouseenter',
              mouseEnter
            )
            imageContainerRef.current.removeEventListener(
              'mouseleave',
              mouseOut
            )
          }
        })
      }, imageContainerRef)
      return () => {
        ctx.revert()
      }
    }, [width])

    useEffect(() => {
      const ctx = gsap.context(() => {
        const responsiveAnimation = gsap.matchMedia()
        responsiveAnimation.add('(max-width:1279px)', () => {
          gsap.from(imageContainerRef.current, {
            yPercent: 20,
            scrollTrigger: {
              trigger: selectionsRef.current,
              start: 'top bottom',
              end: 'center center',
              scrub: 1,
              toggleActions: 'play reset play restart',
            },
          })
          tl.current = gsap
            .fromTo(
              contentRef.current,
              {
                yPercent: -45,
              },
              {
                position: 'relative',
                opacity: 1,
                yPercent: 5,
                duration: 1,
              }
            )
            .reverse()
        })
        responsiveAnimation.add('(min-width:1280px', () => {
          gsap.fromTo(
            imageContainerRef.current,
            {
              yPercent: 20,
            },
            {
              yPercent: 0,
              scrollTrigger: {
                trigger: selectionsRef.current,
                start: 'top bottom-=100',
                end: 'bottom bottom',
                scrub: 1,
                toggleActions: 'play reset play restart',
              },
            }
          )
          tl.current = gsap
            .timeline()
            .to(imageContainerRef.current, {
              xPercent: -60,
              height: '35vh',
            })
            .to(
              contentRef.current,
              {
                opacity: 1,
                xPercent: 40,
              },
              '<'
            )
            .to('.close-content-container', {
              x: '-0.4vw',
              opacity: 1,
            })
            .reverse()
        })
      }, projectsRef)
      return () => ctx.revert()
    }, [width])

    return (
      <Selection id="projects-selection" ref={selectionsRef}>
        <ProjectPhotoConatiner ref={imageContainerRef}>
          <img
            className="project-image"
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
          />
          <RenderDesktop width={width}>
            <HoverActions project={project}>
              <OpenProjectsInfos
                project={project}
                toggleContent={toggleContent}
                isContentOpen={isContentOpen}
              />
            </HoverActions>
          </RenderDesktop>
          <RenderMobile width={width}>
            <OpenProjectsInfos
              project={project}
              toggleContent={toggleContent}
              isContentOpen={isContentOpen}
            />
          </RenderMobile>
        </ProjectPhotoConatiner>
        <ProjectsContent
          ref={contentRef}
          project={project}
          toggleContent={toggleContent}
        />
      </Selection>
    )
  }
)
