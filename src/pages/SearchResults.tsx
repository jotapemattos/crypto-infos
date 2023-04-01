import { useContext, useEffect } from "react"
import { SearchQueryContext } from "../context/SearchQuery"
import { useState } from "react"
import axios from "axios"
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

const SearchResults = () => {
  const { search } = useContext(SearchQueryContext)
  const [ searchCoins, setSearchCoins] = useState(Array<SearchCoinsProps>)

  useEffect(() => {
    axios.get(SearchCoin(search.toLowerCase()))
    .then((response) => setSearchCoins(response.data.coins))
  }, [])

  return (
    <div className="text-white">{searchCoins.map((coin) => (coin.id))}</div>
  )
}

export default SearchResults