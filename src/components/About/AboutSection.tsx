import React, { useEffect, useRef } from 'react'
import { RiArrowDropRightFill as IconArrow } from 'react-icons/ri'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ABOUT_ME } from '../../constants/contents'
import { SectionHeaders, Wrapper } from '../../styles/globalStyles'
import { headersAnimations } from '../../utils/animations/headersAnimations'
import MyPhoto from '../../assets/my-photo.webp'
import { parallaxSection } from '../../utils/animations/parallaxSection'
import { MainContentAboutSection } from './MainContent'

gsap.registerPlugin(ScrollTrigger)

const SectionWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  padding: 15vh 6vw 12vh;
  gap: 5vw;
  background: ${({ theme }) => theme.secondaryBackground};
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.paddingSecetionsMobile};
  }
`
const Header = styled(SectionHeaders)`
  left: 40vw;
  transform: translateX(0%);
  @media screen and (max-width: 1023px) {
    left: 50vw;
    transform: translateX(-50%);
  }
`
const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  @media screen and (max-width: 1024px) {
    margin-top: 7vh;
  }
  @media screen and (max-width: 1023px) {
    align-items: center;
    margin-top: 0;
  }
  .personal-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: ${({ theme }) => theme.fontPrimary};
    color: ${({ theme }) => theme.contrastPrimaryColor};
    font-size: ${({ theme }) => theme.textBody};
    line-height: ${({ theme }) => theme.lineHightBody};
    @media screen and (max-width: 1023px) {
      font-size: ${({ theme }) => theme.textBodyMobile};
      line-height: ${({ theme }) => theme.lineHightBodyMobile};
    }
    p {
      display: flex;
      align-items: center;
      opacity: 0;
      @media screen and (max-width: 1023px) {
        opacity: 1;
      }
      strong {
        padding-right: 0.5vw;
      }
      .icon-arrow {
        color: ${({ theme }) => theme.tertiaryColor};
      }
    }
  }
  img {
    height: 400px;
    width: auto;
    opacity: 1;
    box-shadow: ${({ theme }) => theme.shadowM};
    @media screen and (max-width: 1024px) {
      height: 300px;
      width: 222.5px;
    }
    @media screen and (max-width: 430px) {
      height: 230px;
      width: auto;
    }
  }
`

export function AboutSection() {
  const aboutRef = useRef()
  const photoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      headersAnimations(
        '.about-title',
        '#about-content-section',
        { xPercent: 100 },
        {
          start: 'top bottom+=20%',
          end: ' +=100',
        }
      )
      gsap.from('.photo', {
        yPercent: 50,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: '.photo-container',
          start: 'top bottom',
          end: () => `+=${photoRef.current.offsetHeight}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.to('.personal-details p', {
        stagger: 0.3,
        yPercent: -15,
        opacity: 1,
        duration: 2,
        ease: 'back',
        scrollTrigger: {
          trigger: '.photo-container',
          start: 'bottom bottom+=10%',
          end: () => `+=${photoRef.current.offsetHeight}`,
          scrub: 1,
          invalidateOnRefresh: true,
          toggleActions: 'play pause resume reset',
        },
      })
      ScrollTrigger.refresh(true)
    }, aboutRef)
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    parallaxSection('#about-content-section', '#skills')
  }, [])
  return (
    <SectionWrapper ref={aboutRef} id="about-content-section">
      <Header className="about-title">about me</Header>
      <PhotoContainer className="photo-container" ref={photoRef}>
        <img className="photo" src={MyPhoto} alt="My photo" />
        <div className="personal-details">
          {ABOUT_ME.personalInfos.map((info) => (
            <p key={info.label}>
              <IconArrow className="icon-arrow" />
              <strong>{info.label}</strong> {info.value}
            </p>
          ))}
        </div>
      </PhotoContainer>
      <MainContentAboutSection />
    </SectionWrapper>
  )
}
