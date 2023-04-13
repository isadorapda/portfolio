import React from 'react'
import styled from 'styled-components'
import { ABOUT_ME } from '../../constants/contents'
import { SOCIALS_ICON_LINKS } from '../../constants/socialsIconLinks'

const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4vh;
  @media screen and (max-width: 430px) {
    grid-row: 2;
    align-items: center;
    gap: 6vh;
  }
  .get-in-touch-infos-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2vh;
    @media screen and (max-width: 430px) {
      align-items: center;
    }
    a {
      color: ${({ theme }) => theme.lightColor};
    }
  }
  .socials-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2vh;
    @media screen and (max-width: 430px) {
      align-items: center;
    }
  }
`
const SocialMedia = styled.div`
  display: flex;
  gap: 2vw;
  .icon-socials {
    color: ${({ theme }) => theme.lightColor};
    width: 20px;
    height: 20px;
  }
`
export function ContactsFooter() {
  return (
    <ContactsWrapper>
      <div className="get-in-touch-infos-footer">
        <h4>Get in touch</h4>
        <a href={`mailto:${ABOUT_ME.contacts.emailAddress}`}>
          {ABOUT_ME.contacts.emailAddress}
        </a>
        <a href={`tel:${ABOUT_ME.contacts.mobile}`}>
          {ABOUT_ME.contacts.mobile}
        </a>
      </div>
      <div className="socials-footer">
        <h4>Find me on social</h4>
        <SocialMedia>
          {SOCIALS_ICON_LINKS.map((icon) => {
            return (
              <a
                key={icon.path}
                aria-label={`Go to my ${icon.title} page.`}
                href={icon.path}
                title={icon.title}
                target="_blank"
              >
                {
                  <icon.icon
                    className="icon-socials"
                    style={{ cursor: 'pointer' }}
                  />
                }
              </a>
            )
          })}
        </SocialMedia>
      </div>
    </ContactsWrapper>
  )
}
