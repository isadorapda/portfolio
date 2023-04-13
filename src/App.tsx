import React, { useState } from 'react'
import styled from 'styled-components'
import { Footer } from './components/Footer/Footer'
import { PageLoading } from './components/PageLoading'
import { About } from './screens/About'
import { Contacts } from './screens/Contacts'
import { Home } from './screens/Home'
import { SelectedProjects } from './screens/SelectedProjects'

const Wrapper = styled.div`
  width: 100vw;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export default function App() {
  const [displayLoader, setDisplayLoader] = useState(true)
  return (
    <Wrapper>
      <PageLoading
        displayLoader={displayLoader}
        setDisplayLoader={setDisplayLoader}
      />
      <Home />
      <About />
      <SelectedProjects />
      <Contacts />
      <Footer />
    </Wrapper>
  )
}
