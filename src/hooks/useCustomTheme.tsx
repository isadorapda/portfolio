import { useContext } from 'react'
import { CustomThemeContext } from '../context/themeContext'

export function useCustomTheme() {
  return useContext(CustomThemeContext)
}
