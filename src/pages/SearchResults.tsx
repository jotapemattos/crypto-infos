import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import { useSearchResults } from "../hooks/useSearchResults"

const SearchResults = () => {
  const { search, searchCoins, isLoading } = useSearchResults()

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
          className="w-4/5 grid xl:grid-cols-5 gap-10 items-center justify-items-center">
          {searchCoins?.map((coin) => (
            <Link
              to={'/coinpage/' + coin.id}
              key={coin.id}
            >
              <div
                className="card relative w-60 h-56 flex flex-col justify-center items-center gap-4 p-2 text-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl drop-shadow-lg hover:-translate-y-1 hover:opacity-70 transition-all duration-300"
              >
                <h1>#{coin.market_cap_rank}</h1>
                <img src={coin.large} alt="coin-image" className="w-20" />
                <div className="flex flex-col items-center text-center">
                  <h1>{coin.name}</h1>
                  <h2>{coin.symbol}</h2>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
      )}
    </>
  )
}

export default SearchResults