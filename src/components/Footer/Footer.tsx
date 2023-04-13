import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logoWhite.svg'
import { ContactsFooter } from './ContactsFooter'

const Wrapper = styled.footer`
  width: 100vw;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  padding: 10vh 6vw;
  gap: 5vw;
  background: ${({ theme }) => theme.tertiaryColor};
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.lightColor};
  @media screen and (max-width: 1023px) {
    grid-template-columns: 0.5fr 1.5fr 0.5fr;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 6vh;
  }
  .copyright {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 4vh;
    font-size: 12px;
    @media screen and (max-width: 430px) {
      grid-row: 3;
    }
  }
  .logo-footer {
    @media screen and (max-width: 430px) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 2vh;
    }
  }
`
export function Footer() {
  return (
    <Wrapper>
      <div className="logo-footer">
        <Logo />
      </div>
      <div className="copyright">
        <p>Designed and built by Isadora Pilau</p>
      </div>
      <ContactsFooter />
    </Wrapper>
  )
}
