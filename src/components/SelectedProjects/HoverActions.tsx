import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Project } from '../../constants/contents'

interface HoverProps {
  project: Project
  children: ReactNode
}

const HoverAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6) 85%);
  border-radius: 6px;
  height: 100%;
  width: 100%;
  padding-bottom: 15vh;
  position: absolute;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`
const ProjectTitle = styled.h1`
  margin: 0;
  font-size: 3vw;
  color: ${({ theme }) => theme.lightColor};
  font-family: ${({ theme }) => theme.fontTertiary};
  font-weight: 300;
  text-align: center;
`

export function HoverActions({ project, children }: HoverProps) {
  return (
    <HoverAction className={`hover-action-${project.id} hover-action`}>
      <ProjectTitle
        className={`show-text-${project.id} hover-action-${project.id}`}
      >
        {project.title}
      </ProjectTitle>
      {children}
    </HoverAction>
  )
}
