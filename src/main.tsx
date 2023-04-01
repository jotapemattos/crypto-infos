import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CurrencyContextProvider from './context/Currency'
import SearchQueryContextProvider from './context/SearchQuery'
import CoinsContextProvider from './context/Coins'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoinsContextProvider>
      <SearchQueryContextProvider>
        <CurrencyContextProvider>
          <App />
        </CurrencyContextProvider>
      </SearchQueryContextProvider>
    </CoinsContextProvider>
  </React.StrictMode>
)
