import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavigationBar/>
    <App />
  </React.StrictMode>,
)
