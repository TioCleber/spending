import { Home } from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { User } from './pages/User/User'

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
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
