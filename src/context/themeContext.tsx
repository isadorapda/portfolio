import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

export enum SupportedThemes {
  light = 'light',
  dark = 'dark',
}

interface ThemeContextProps {
  children: ReactNode
}
export interface MutableTheme {
  primaryColor: string
  contrastPrimaryColor: string
  primaryBackground: string
  secondaryBackground: string
  contrastPrimaryColorOpaque: string
}
export interface BaseTheme {
  tertiaryColor: string
  lightColor: string
  shadowM: string
  textBody: string
  textHeaderSmall: string
  textHeadersLarge: string
  textBodyMobile: string
  lineHightHeaderMobile: string
  lineHightBody: string
  lineHightBodyMobile: string
  fontPrimary: string
  fontSecondary: string
  fontTertiary: string
  weightHeaders: number
  headersOpacity: number
  paddingSecetionsMobile: string
}

const baseTheme: BaseTheme = {
  tertiaryColor: '#57A743',
  lightColor: '#FCFCFD',
  shadowM: '0px 4px 12px rgba(0, 0, 0, 0.15)',
  textBody: '16px',
  textBodyMobile: '14px',
  textHeaderSmall: '20px',
  lineHightHeaderMobile: '36px',
  textHeadersLarge: '10vw',
  lineHightBody: '30px',
  lineHightBodyMobile: '26px',
  fontPrimary: 'Roboto Flex, sans-serif',
  fontSecondary: 'Nanum Gothic Coding, monospace',
  fontTertiary: 'Exo, sans-serif',
  headersOpacity: 0.2,
  weightHeaders: 400,
  paddingSecetionsMobile: '25vh 10vw 10vh',
}
const darkTheme: MutableTheme = {
  primaryColor: '#383838',
  primaryBackground: '#383838',
  secondaryBackground: '#313030',
  contrastPrimaryColor: '#FCFCFD',
  contrastPrimaryColorOpaque: '#fcfcfd58',
}
const lightTheme: MutableTheme = {
  primaryColor: '#FCFCFD',
  primaryBackground: '#EDFBED',
  secondaryBackground: '#FCFCFD',
  contrastPrimaryColor: '#383838',
  contrastPrimaryColorOpaque: '#38383820',
}
const initialTheme: SupportedThemes = SupportedThemes.light

export const CustomThemeContext = createContext<{
  theme: DefaultTheme
  changeTheme: () => void
  currentTheme: SupportedThemes
}>({
  theme: getTheme(initialTheme),
  changeTheme: () => {},
  currentTheme: initialTheme,
})

function getTheme(currentTheme: SupportedThemes): DefaultTheme {
  return currentTheme === SupportedThemes.light
    ? { ...baseTheme, ...lightTheme }
    : { ...baseTheme, ...darkTheme }
}

export function CustomThemeContextProvider({ children }: ThemeContextProps) {
  const [currentTheme, setCurrentTheme] =
    useState<SupportedThemes>(initialTheme)
  const [theme, setTheme] = useState<DefaultTheme>(getTheme(initialTheme))

  const changeTheme = () => {
    if (currentTheme === SupportedThemes.light) {
      setCurrentTheme(SupportedThemes.dark)
    } else {
      setCurrentTheme(SupportedThemes.light)
    }
  }

  useEffect(() => {
    setTheme(getTheme(currentTheme))
  }, [currentTheme])

  return (
    <CustomThemeContext.Provider value={{ theme, changeTheme, currentTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}
