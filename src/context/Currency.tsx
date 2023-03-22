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
  const [currency, setCurrency] = useState('INR') 
  const [symbol, setSymbol] = useState('₹')

  useEffect(()=> {
    if (currency === 'INR') setSymbol('₹')
    else if (currency === 'USD') setSymbol('$')
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