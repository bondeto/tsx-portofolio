import { ChakraProvider, Box } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const GlobalStyles = css`
  html {
    scroll-behavior: smooth;
  }
`

function App() {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Box position="relative">
        <Navbar />
        <Box as="main">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default App
