import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import SobreNos from './pages/SobreNos'
import Navbar from './components/Navbar'
import Artigos from './pages/Artigos'
import VisualizarArtigo from './pages/VisualizarArtigo'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Inicial />} />
      <Route path='/sobre-nos' element={<SobreNos />} />
      <Route path='/artigos' element={<Artigos />} />
      <Route path='/visualiza-artigo/:id' element={<VisualizarArtigo />}/>
    </Routes>  
    </BrowserRouter>
  )
}

export default App