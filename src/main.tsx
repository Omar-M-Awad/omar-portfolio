import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Remove the .tsx
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)