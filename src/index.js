import React from 'react';
import { createRoot } from 'react-dom/client'
import App from "./App"
import './react-router/match-path'
import './store'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
