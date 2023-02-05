import { Home } from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spending } from './pages/Spending/Spending'
import { Header } from './components/Header'

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
            <Route path="/spending" element={<Spending />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
