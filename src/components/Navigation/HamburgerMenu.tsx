import React from 'react'
import styled from 'styled-components'

interface MenuProps {
  isMenuOpen: boolean
}

const HamburgerContainer = styled.div`
  display: 'block';
  position: fixed;
  height: 16px;
  width: 24px;
  cursor: pointer;
  z-index: 110;
`
const FirstLine = styled.span<{ isMenuOpen: boolean }>`
  position: absolute;
  display: inline-block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.tertiaryColor};
  left: 0;
  top: ${({ isMenuOpen }) => (isMenuOpen ? '13px' : 0)};
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : null)};
  transition: all 500ms ease-in-out;
`
const SecondLine = styled(FirstLine)<{ isMenuOpen: boolean }>`
  top: 8px;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
`
const ThirdLine = styled(FirstLine)<{ isMenuOpen: boolean }>`
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : '')};
  transition: all 500ms ease-in-out;
  top: ${({ isMenuOpen }) => (isMenuOpen ? '13px' : '100%')};
  bottom: 0;
`

export function HamburgerMenu({ isMenuOpen }: MenuProps) {
  return (
    <HamburgerContainer>
      <FirstLine isMenuOpen={isMenuOpen} />
      <SecondLine isMenuOpen={isMenuOpen} />
      <ThirdLine isMenuOpen={isMenuOpen} />
    </HamburgerContainer>
  )
}
