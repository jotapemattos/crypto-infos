import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CurrencyContext } from "../context/Currency"
import { SingleCoin } from "../services/api"

interface ImageType {
  large: string,
  small: string,
  thumb: string
}

interface SingleCoinTypes {
  market_data: { current_price: { [currency: string]: number } },
  market_cap_rank: number,
  image: ImageType,
  name: string,
  symbol: string,
  description: { en: string }
}

export const useCoinPage = () => {
  const { currency, symbol } = useContext(CurrencyContext)
  const params = useParams()
  const [singleCoin, setSingleCoin] = useState<SingleCoinTypes>()
  const [isLoading, setIsLoading] = useState(true)

  const fetchOneCoin = async () => {
    await axios.get(SingleCoin(params.coin!))
      .then((response) => setSingleCoin(response.data))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchOneCoin()
  }, [])

  return {
    currency,
    symbol,
    singleCoin,
    params,
    isLoading
  }
}