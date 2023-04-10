import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { CoinsContext } from "../context/Coins"
import { CurrencyContext } from "../context/Currency"
import { CoinList } from "../services/api"

export const useCoinsList = () => {
  const { currency, symbol } = useContext(CurrencyContext)
  const { coins, setCoins } = useContext(CoinsContext)
  const [isLoading, setIsLoading] = useState(true)

  const fetchCoins = async () => {
    await axios.get(CoinList(currency))
      .then((response) => setCoins(response.data))
      .catch((err) => console.log(err.name))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchCoins()
  }, [currency])

  return {
    currency,
    symbol,
    coins,
    isLoading
  }
}