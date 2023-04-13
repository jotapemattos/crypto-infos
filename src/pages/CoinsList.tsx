import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { useCoinsList } from '../hooks/useCoinsList'

const handleSetPriceChangeColor = (price: number) => {
  if (price >= 0) return 'green'
  return 'red'
}

const CoinsList = () => {
  const { currency, symbol, coins, isLoading } = useCoinsList()

  return (
    <>
      {isLoading && (
        <div className='w-screen h-screen flex items-center justify-center'>
          <Loader/>
        </div>
      )}
      {!isLoading && (
        <div className='coinsList flex flex-col items-center justify-center pb-20 min-w-screen min-h-full'>
        <div className='w-5/6 flex flex-col gap-10 h-auto mt-40'>
          {coins.map((coin) => (
            <Link 
              to={'/coinpage/' + coin.name.toLowerCase()}
              key={coin.symbol}>
              <div
                className='card w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm drop-shadow-lg rounded-2xl shadow-xl'
              >
                <div className='xl:w-1/3 md:h-28 p-4 flex flex-col md:flex-row items-center justify-start gap-8 text-white'>
                  <div className='flex items-center gap-4'>
                    <img src={coin.image} alt="coin-image" className='h-14 md:h-20' />
                    <p className='text-2xl'>{coin.name}</p>
                  </div>
                  <div className='text-xl md:text-2xl flex items-center justify-center gap-2'>
                    <span>{symbol}</span>
                    <span>{coin.current_price.toLocaleString(currency)}</span>
                  </div>
                </div>
                <div className='xl:w-1/3 md:h-28 p-4 flex items-center justify-center gap-4 text-white'>
                  <p className='text-2xl'>{coin.symbol.toUpperCase()}</p>
                  <div className=" flex justify-center gap-4">
                      <span style={{color: handleSetPriceChangeColor(coin.price_change_percentage_24h)}}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </span>                             
                  </div>
                </div>
                <div className='xl:w-1/3 md:h-28 p-4 flex items-center justify-end gap-4 text-white'>
                  <p>#{coin.market_cap_rank}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      )}
    </>
  )
}

export default CoinsList