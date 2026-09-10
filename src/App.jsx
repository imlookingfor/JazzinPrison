import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home.jsx'
import Information from './components/Information.jsx'
import Reservation from './components/Reservation.jsx'
import NotFound from './components/NotFound.jsx'

// 페이지를 옮기면 맨 위부터 보이게
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Information />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
