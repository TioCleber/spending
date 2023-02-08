import { Home } from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import './styles/app.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
