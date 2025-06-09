import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/lancamentos' element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App