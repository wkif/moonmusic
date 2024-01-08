import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import 'virtual:uno.css'
import './assets/font/font.css'
import './assets/animista.css'
import './assets/index.css'
import App from './App'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
