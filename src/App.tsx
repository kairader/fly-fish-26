import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Cover } from '@/components/cover/Cover'
import { DestinationSection } from '@/components/destination/DestinationSection'
import { Nav } from '@/components/nav/Nav'
import { wyoming } from '@/data/wyoming'
import { montana } from '@/data/montana'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function DestinationPage({ destination }: { destination: typeof wyoming }) {
  return (
    <>
      <Nav />
      <DestinationSection destination={destination} />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<main id="main-content"><Cover /></main>} />
        <Route path="/wyoming" element={<DestinationPage destination={wyoming} />} />
        <Route path="/montana" element={<DestinationPage destination={montana} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
