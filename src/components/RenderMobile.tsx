import React, { ReactNode } from 'react'
import { SMALLER_SCREENS_BREAKPOINT } from '../constants/screenBreakpoints'

interface MobileProps {
  children: ReactNode
  width: number
}

export function RenderMobile({ width, children }: MobileProps) {
  if (width > SMALLER_SCREENS_BREAKPOINT) {
    return null
  }
  return <>{children}</>
}
