import React from 'react'
import ReactDOM from 'react-dom/client'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {BrowserRouter} from "react-router-dom"

import App from './App'

import './index.scss'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 2500,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
)
