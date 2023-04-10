import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { CurrencyContext } from "../context/Currency"
import { SearchQueryContext } from "../context/SearchQuery"
import { SearchCoin } from "../services/api"


interface SearchCoinsProps {
    api_symbol: string,
    id: string,
    large: string,
    market_cap_rank: number,
    name: string,
    symbol: string,
    thumb: string
  }

export const useSearchResults = () => {
  const { search } = useContext(SearchQueryContext)
  const { currency } = useContext(CurrencyContext)
  const [ searchCoins, setSearchCoins] = useState <SearchCoinsProps[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchSearch = async () => {
    await axios.get(SearchCoin(search.toLowerCase()))
    .then((response) => setSearchCoins(response.data.coins))
    .catch((err) => {return (
      <div>{err.name}</div>
    )})
    setIsLoading(false)
  }

  useEffect(() => {
    fetchSearch()
  }, [currency])

  return {
    search,
    searchCoins,
    isLoading
  }
}