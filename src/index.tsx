import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NavigationBar } from './components/Navigation/NavigationBar'
import { CustomThemeContextProvider } from './context/themeContext'
import { GlobalStyle } from './styles/globalStyles'
import './styles/normalise.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <CustomThemeContextProvider>
      <GlobalStyle />
      <NavigationBar />
      <App />
    </CustomThemeContextProvider>
  </React.StrictMode>
)
