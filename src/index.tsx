import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { QueryClientProvider } from 'react-query'
import { client } from './services/queryClient'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
