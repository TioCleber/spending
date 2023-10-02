import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Context } from './context/'

import { Header } from './components/Header'
import { Login } from './pages/Login/'
import { Finances } from './pages/Finances/'

import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="page container-page">
        <Routes>
          <Route path="/" element={<Login.Page />} />
          <Route
            path="/finances"
            element={
              <Context.Profile>
                <Context.Categories>
                  <Finances.Page />
                </Context.Categories>
              </Context.Profile>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
