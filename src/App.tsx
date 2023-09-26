import { Spending } from './pages/Spending/Spending'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import './styles/app.css'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>

        <main>
          <Routes>
            <Route path="/spending" element={<Spending />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
