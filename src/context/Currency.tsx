import { createContext, useEffect, useState } from "react";

interface CurrencyContextProps {
    currency: string,
    setCurrency: (s: string) => void,
    symbol: string
}

interface CurrencyContextProviderProps {
    children: React.ReactNode
}

export const CurrencyContext = createContext<CurrencyContextProps>({
    currency: '',
    setCurrency: () => {},
    symbol: ''
})

export default function CurrencyContextProvider ({children}: CurrencyContextProviderProps){
  const [currency, setCurrency] = useState('inr') 
  const [symbol, setSymbol] = useState('₹')

  useEffect(()=> {
    if (currency === 'inr') setSymbol('₹')
    else if (currency === 'usd') setSymbol('$')
  }, [currency])

  return (
    <CurrencyContext.Provider value={{
        currency,
        setCurrency,
        symbol
    }}>
        {children}
    </CurrencyContext.Provider>
  )
}