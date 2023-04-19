import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../context/Currency"
import { TrendingCoins } from "../services/api"

interface TrendingCoinsTypes {
    id: string,
    current_price: number,
    image: string,
    name: string,
    symbol: string,
    price_change_percentage_24h: number
  }

export const useCoinsCards = () => {
    const { currency, symbol } = useContext(CurrencyContext)
    const [data, setData] = useState(Array<TrendingCoinsTypes>)
    const [isLoading, setIsLoading] = useState(true)

    const fetchTrendingCoins = async () => {
        await axios.get(TrendingCoins(currency))
            .then((response) => setData(response.data))
            .catch((err) => console.log(err.name))
        setIsLoading(false)
    }

    useEffect(() => {
        fetchTrendingCoins()
    }, [currency])

    const handleSetPriceChangeColor = (price: number) => {
        if (price >= 0) return 'green'
        return 'red'
    }

    return {
        symbol,
        currency,
        data,
        isLoading,
        handleSetPriceChangeColor
    }
}