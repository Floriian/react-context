import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TestContext, TestProvider } from './context/TestContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TestProvider>
      <App/>
    </TestProvider>
  </React.StrictMode>,
)
