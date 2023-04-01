import React, { createContext, useState } from "react";
import { CoinsType } from "../@types/interfaces";

interface CoinsProps {
    coins: Array<CoinsType>,
    setCoins: (data: Array<CoinsType>) => void
}

export const  CoinsContext = createContext<CoinsProps>({
    coins: [],
    setCoins: () => {Array<CoinsType>}
})

export default function CoinsContextProvider ({children}: {children: React.ReactNode}){
    const [coins, setCoins] = useState(Array<CoinsType>)

    return (
        <CoinsContext.Provider
            value={{
                coins, 
                setCoins,
            }}
        >
            {children}
        </CoinsContext.Provider>
    )
}