import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Projects from './Pages/Projects'
export default function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/blogs' element={<Aboutme />} />
      </Routes>
    </>
  )
}
