import React, { ReactNode } from 'react'
import { SMALLER_SCREENS_BREAKPOINT } from '../constants/screenBreakpoints'

interface DesktopProps {
  children: ReactNode
  width: number
}

export function RenderDesktop({ children, width }: DesktopProps) {
  if (width <= SMALLER_SCREENS_BREAKPOINT) {
    return null
  }
  return <>{children}</>
}
