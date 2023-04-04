import { useContext, useEffect, useRef } from "react"
import { SearchQueryContext } from "../context/SearchQuery"
import { useState } from "react"
import axios from "axios"
import { SearchCoin } from "../services/api"
import { Link } from "react-router-dom"
import { CurrencyContext } from "../context/Currency"
import Loader from "../components/Loader"


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

  return (
    <>
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <Loader/>
        </div>
      )}
      {!isLoading && (
        <div className="results w-full flex flex-col items-center gap-10 pb-20">
        {searchCoins != null && searchCoins.length > 0 && (
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-white text-3xl text-center pt-36">Results for "{search}"</h1>
            <Link to={'/'}>
              <button className="text-white border border-white/20 py-2 px-4 hover:bg-white/20 transition-colors duration-300">Back to search</button>
            </Link>
        </div>
        )}
        {searchCoins?.length === 0 && (
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-white text-3xl text-center pt-36">No results for "{search}"</h1>
            <Link to={'/'}>
              <button className="text-white border border-white/20 py-2 px-4 hover:bg-white/20 transition-colors duration-300">Back to search</button>
            </Link>
          </div>
        )}
        <main 
          className="w-4/5 grid grid-cols-5 gap-10 items-center justify-items-center">
          {searchCoins?.map((coin) => (
            <div 
              className="relative w-60 h-64 flex flex-col justify-center items-center gap-4 p-2 text-white bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-sm rounded-xl drop-shadow-lg border border-white/20"
              key={coin.id}
            >
              <h1>#{coin.market_cap_rank}</h1>
              <img src={coin.large} alt="coin-image" className="w-20"/>
              <div className="flex flex-col items-center text-center">
                <h1>{coin.name}</h1>
                <h2>{coin.symbol}</h2>
              </div>
            </div>
          ))}
        </main>
      </div>
      )}
    </>
  )
}

export default SearchResults