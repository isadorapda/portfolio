import 'styled-components'
import { MutableTheme, BaseTheme } from './context/themeContext'

declare module 'styled-components' {
  export interface DefaultTheme extends MutableTheme, BaseTheme {}
}
