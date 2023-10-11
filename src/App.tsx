import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Context } from './context/'

import { Header } from './components/Header'
import { Login } from './pages/Login/'
import { Finances } from './pages/Finances/'
import { RecurringExpenses } from './pages/RecurringExpenses'
import { Spending } from './pages/Spending'

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
                  <Context.RecurringExpenses>
                    <Context.Spending>
                      <Finances.Page />
                    </Context.Spending>
                  </Context.RecurringExpenses>
                </Context.Categories>
              </Context.Profile>
            }
          />
          <Route
            path="/recurring-expenses"
            element={
              <Context.RecurringExpenses>
                <RecurringExpenses.Page />
              </Context.RecurringExpenses>
            }
          />
          <Route
            path="/spending"
            element={
              <Context.Spending>
                <Spending.Page />
              </Context.Spending>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
