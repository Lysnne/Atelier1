

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './navbar/Footer'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ListeUserAxios from './pages/ListeUserAxios'
import Inscription from './pages/Inscription'
import Modification from './pages/Modification'
import Suppression from './pages/Suppression'
import ListUsersFetch from './pages/ListUsersFetch'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/listAxios' element={<ListeUserAxios />} />
          <Route path='/listFetch' element={<ListUsersFetch />} />
          <Route path='/option/1' element={<Inscription />} />
          <Route path='/option/2' element={<Modification />} />
          <Route path='/option/3' element={<Suppression />} />


          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )

}

export default App
