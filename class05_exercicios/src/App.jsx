import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Contato from './pages/Contato'

const App = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/sobre-nos' element={<Home />} />
            <Route path='/artigos' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App