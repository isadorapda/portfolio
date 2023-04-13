import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GoMail as IconEmail } from 'react-icons/go'
import { BsPhone as IconMobile } from 'react-icons/bs'
import { TiSocialLinkedin as IconLinkedIn } from 'react-icons/ti'
import { ABOUT_ME } from '../constants/contents'
import { SectionHeaders, Wrapper } from '../styles/globalStyles'

gsap.registerPlugin(ScrollTrigger)

const SectionWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20vh 10vw 10vh;
  gap: 5vw;
  background: ${({ theme }) => theme.primaryBackground};
  @media screen and (max-width: 430px) {
    padding: ${({ theme }) => theme.paddingSecetionsMobile};
  }
`
const ContactData = styled.div`
  width: 100%;
  padding: 25vh 0 10vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 7vw;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.textBody};
  line-height: ${({ theme }) => theme.lineHightBody};
  color: ${({ theme }) => theme.contrastPrimaryColor};
  @media screen and (max-width: 1024px) {
    padding: 10vh 0;
  }
  @media screen and (max-width: 430px) {
    padding: 3vh 0;
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.textBodyMobile};
    line-height: ${({ theme }) => theme.lineHightBodyMobile};
  }
  .call-to-action {
    .cta-header {
      font-size: 1.5vw;
      margin-bottom: 2vh;
      @media screen and (max-width: 1024px) {
        font-size: 2.5vw;
      }
      @media screen and (max-width: 430px) {
        font-size: ${({ theme }) => theme.textHeaderSmall};
      }
    }
    .cta-paragraph {
      margin-bottom: 1.5vh;
    }
  }
  .my-contact-data {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  .contact {
    display: flex;
    align-items: center;
    gap: 2vw;
    .icon-contact {
      height: 20px;
      width: 20px;
    }
  }
`

export function Contacts() {
  const contactsRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact', {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: 'back',
        scrollTrigger: {
          trigger: '#contact-data',
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
      })
    }, contactsRef)

    return () => ctx.revert()
  }, [])
  return (
    <SectionWrapper id="contact-me" ref={contactsRef}>
      <SectionHeaders>get in touch</SectionHeaders>
      <ContactData id="contact-data">
        <div className="call-to-action">
          <h4 className="cta-header">Have my work attracted your attention?</h4>
          <p className="cta-paragraph">
            Are you looking for a junior front-end developer who has a{' '}
            <strong>
              proactive approach, a positive attitude to challenges and changes,
              learns fast and is actively learning new technologies, is
              commited, and has excellent interpersonal skills
            </strong>
            ?
          </p>
          <p className="cta-paragraph">
            I am confident that I can bring value to your team/ company. If you
            agree with that or want to know more about me, get in touch with me.
          </p>
        </div>
        <div className="my-contact-data">
          <div className="contact">
            <IconEmail aria-hidden="true" className="icon-contact" />
            <a href={`mailto:${ABOUT_ME.contacts.emailAddress}`}>
              {ABOUT_ME.contacts.emailAddress}
            </a>
          </div>
          <div className="contact">
            <IconMobile aria-hidden="true" className="icon-contact" />
            <a href={`tel:${ABOUT_ME.contacts.mobile}`}>
              {ABOUT_ME.contacts.mobile}
            </a>
          </div>
          <div className="contact">
            <IconLinkedIn aria-hidden="true" className="icon-contact" />
            <a href="https://www.linkedin.com/in/isadora-pilau-de-almeida-412359b0/">
              {ABOUT_ME.contacts.linkedIn}
            </a>
          </div>
        </div>
      </ContactData>
    </SectionWrapper>
  )
}
