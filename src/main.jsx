import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage             from './pages/HomePage.jsx'
import ProjectsPage         from './pages/ProjectsPage.jsx'
import DesignProcessPage    from './pages/DesignProcessPage.jsx'
import AboutPage            from './pages/AboutPage.jsx'
import PlaygroundPage       from './pages/PlaygroundPage.jsx'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Portfolio pages */}
        <Route path="/home"               element={<HomePage />} />
        <Route path="/projects"           element={<ProjectsPage />} />
        <Route path="/design-process"       element={<DesignProcessPage />} />
        <Route path="/about"              element={<AboutPage />} />
        <Route path="/playground"         element={<PlaygroundPage />} />

        {/* Default: redirect to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
