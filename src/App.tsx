import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About'
import { useEffect, useState } from "react"

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      // Checks if we are at the top of the page
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    // Add event listener to scrolling
    window.addEventListener('scroll', handleScroll)
    // removes scroll and handleScroll when leaving the page to avoid memory leaks
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage}></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  )
}

export default App
