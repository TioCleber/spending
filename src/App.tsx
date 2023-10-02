import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CategoriesContextProvider } from './context/CategoriesContext'
import { ProfileContextProvider } from './context/ProfileContext'

import { Header } from './components/Header'
import LoginPage from './pages/Login/LoginPage'
import FinancesPage from './pages/Finances/FinancesPage'

import './styles/app.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="page container-page">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/finances"
            element={
              <ProfileContextProvider>
                <CategoriesContextProvider>
                  <FinancesPage />
                </CategoriesContextProvider>
              </ProfileContextProvider>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
