import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    cursor: default;
    a{
        text-decoration: none;
        cursor: pointer;
        color:${({ theme }) => theme.contrastPrimaryColor}
       
    }
    button{
        background: none;
        border: transparent;
        cursor: pointer;
        align-items: center;
    }
   
}
html,body{

    background: ${({ theme }) => theme.primaryBackground} ;
    background-size: cover;
    -webkit-font-smoothing:antialised;
}
`
export const SectionHeaders = styled.h1`
  color: ${({ theme }) => theme.contrastPrimaryColor};
  margin: 0;
  font-family: ${({ theme }) => theme.fontTertiary};
  font-size: ${({ theme }) => theme.textHeadersLarge};
  font-weight: ${({ theme }) => theme.weightHeaders};
  position: absolute;
  left: 10vw;
  top: 10vh;
  opacity: ${({ theme }) => theme.headersOpacity};
  width: max-content;
  text-transform: capitalize;
  @media screen and (max-width: 430px) {
    left: 50vw;
    transform: translateX(-50%);
    font-size: 15vw;
  }
`
export const Wrapper = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  overflow: hidden;
`
export const LeftBracketContainer = styled.div<{
  scale: { scaleDesk: number; scaleLaptopS: number; scaleMobile: number }
}>`
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 30px;
  display: flex;
  flex-direction: column;
  scale: ${({ scale }) => scale.scaleDesk};

  @media screen and (min-width: 431px) and (max-width: 1024px) {
    height: 40px;
    width: 15px;
    scale: ${({ scale }) => scale.scaleLaptopS};
  }
  @media screen and (max-width: 430px) {
    height: 30px;
    width: 10px;
    scale: ${({ scale }) => scale.scaleMobile};
  }
`
export const LeftBracket = styled.div<{
  scale: { scaleDesk: number; scaleLaptopS: number; scaleMobile: number }
}>`
  background: ${({ theme }) => theme.tertiaryColor};
  width: 3px;
  height: 50px;
  position: relative;
  scale: ${({ scale }) => scale.scaleDesk};
  @media screen and (min-width: 431px) and (max-width: 1024px) {
    height: 25px;
    width: 2px;
    scale: ${({ scale }) => scale.scaleLaptopS};
  }
  @media screen and (max-width: 430px) {
    height: 20px;
    width: 1.5px;
    scale: ${({ scale }) => scale.scaleMobile};
  }
  &::after {
    content: '';
    background: ${({ theme }) => theme.tertiaryColor};
    width: 9px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    @media screen and (min-width: 431px) and (max-width: 1024px) {
      width: 8px;
      height: 2px;
    }
    @media screen and (max-width: 430px) {
      width: 6px;
      height: 1.5px;
    }
  }
`
export const RightBracketContainer = styled(LeftBracketContainer)`
  justify-content: flex-start;
  align-items: center;
`
export const RightBracket = styled(LeftBracket)`
  &::after {
    top: 0;
    right: 0;
    bottom: unset;
    left: unset;
    @media screen and (min-width: 431px) and (max-width: 1024px) {
      width: 8px;
      height: 2px;
    }
    @media screen and (max-width: 430px) {
      width: 6px;
      height: 1.5px;
    }
  }
`
