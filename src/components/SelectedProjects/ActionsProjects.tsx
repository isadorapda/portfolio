import React from 'react'
import styled from 'styled-components'
import { IoLogoGithub as IconGithub } from 'react-icons/io'
import { RiExternalLinkLine as IconURLLink } from 'react-icons/ri'
import { Project } from '../../constants/contents'

interface ActionsProjectProps {
  project: Project
}

const ActionsProject = styled.div`
  display: flex;
  gap: 3vw;
  button {
    width: 2.5vw;
    height: 2.5vw;
    background: #57a74374;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    @media screen and (max-width: 430px) {
      width: 4vw;
      height: 4vw;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .actions-icons {
      width: 1.25vw;
      height: 1.25vw;
      @media screen and (max-width: 430px) {
        width: 2.5vw;
        height: 2.5vw;
      }
    }
  }
`
export function ActionsProjects({ project }: ActionsProjectProps) {
  return (
    <ActionsProject>
      <button type="button" className="button-action-project">
        <a href={project.linkGithub} target="_blank">
          <IconGithub className="actions-icons" style={{ cursor: 'pointer' }} />
        </a>
      </button>
      {project.url ? (
        <button type="button" className="button-action-project">
          <a href={project.url} target="_blank">
            <IconURLLink
              className="actions-icons"
              style={{ cursor: 'pointer' }}
            />
          </a>
        </button>
      ) : null}
    </ActionsProject>
  )
}
