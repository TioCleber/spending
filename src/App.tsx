import { Spending } from './pages/Spending/Spending'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Login from './pages/Login/Login'

import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="page">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/spending" element={<Spending />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
