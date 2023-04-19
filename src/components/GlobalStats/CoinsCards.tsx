import Loader from "../Loader"
import { Link } from "react-router-dom"
import { useCoinsCards } from "../../hooks/useCoinsCards"

export const CoinsCards = () => {
  const {symbol, currency, data, isLoading, handleSetPriceChangeColor} = useCoinsCards()

  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Loader/>
        </div>
      )}
      {!isLoading && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 text-white">
        {data.map((coin) => (
          <Link 
            to={'/coinpage/' + coin.id}
            key={coin.id}
          >
            <div
              className='card w-full xl:w-60 h-56 flex flex-col justify-center items-center gap-4 p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl shadow-2xl hover:cursor-pointer hover:-translate-y-1 hover:opacity-70 transition-all duration-300'
            >
              <img src={coin.image} alt="coin-image" className="w-20" />
              <div className=" flex justify-center gap-4">
                <span className="text-white">{coin.symbol.toUpperCase()}</span>
                  <span style={{color: handleSetPriceChangeColor(coin.price_change_percentage_24h)}}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
              </div>
              <div className="font-bold text-xl flex gap-2">
                <span>{symbol}</span>
                <span>{coin.current_price.toLocaleString(currency)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      )}
    </>
  )
}
