import React from 'react'
import styled from 'styled-components'
import { Project } from '../../constants/contents'

interface OpenProjectsProps {
  project: Project
  toggleContent: () => void
  isContentOpen: boolean
}
const ActionOpenProjectInfos = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  @media screen and (max-width: 1279px) {
    position: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2vh;
    align-self: flex-end;
    transform: unset;
    opacity: 1;
  }
  .know-more-button {
    color: ${({ theme }) => theme.lightColor};
    font-family: ${({ theme }) => theme.fontSecondary};
    font-size: 2.2vw;

    @media screen and (max-width: 1279px) {
      padding: 0.5vh 2.5vw;
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.shadowM};
      background: ${({ theme }) => theme.tertiaryColor};
      color: ${({ theme }) => theme.primaryColor};
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export function OpenProjectsInfos({
  project,
  toggleContent,
  isContentOpen,
}: OpenProjectsProps) {
  return (
    <ActionOpenProjectInfos
      className={`actions-${project.id} hover-action-${project.id}`}
    >
      <button
        type="button"
        onClick={toggleContent}
        className={`show-text-${project.id} know-more-button`}
      >
        {isContentOpen ? 'Close' : 'Know more'}
      </button>
    </ActionOpenProjectInfos>
  )
}
