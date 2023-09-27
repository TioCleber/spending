import { Finances } from './pages/Finances/Finances'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import Login from './pages/Login/Login'

import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="page container-page">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/finances" element={<Finances />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
