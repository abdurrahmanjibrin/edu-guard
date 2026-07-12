import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import VideoMateri from './pages/VideoMateri'
import Panduan from './pages/Panduan'
import GameEdu from './pages/GameEdu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/video" element={<VideoMateri />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/game" element={<GameEdu />} />
      </Routes>
    </Router>
  )
}

export default App
