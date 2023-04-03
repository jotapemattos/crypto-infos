import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CurrencyContext } from "../../context/Currency"
import  { TrendingCoins }  from '../../services/api'

interface TrendingCoinsTypes {
    current_price: number,
    image: string,
    name: string,
    symbol: string,
    price_change_percentage_24h: number
}

export const CoinsCards = () => {
  const { currency, symbol } = useContext(CurrencyContext)
  const [data, setData] = useState(Array<TrendingCoinsTypes>)

  useEffect(()=>{
    //axios cancellation token in case the user cancels the request!
    const cancelToken = axios.CancelToken.source()
    axios.get(TrendingCoins(currency), {cancelToken: cancelToken.token})
    .then((response)=> setData(response.data))
        .catch((err) => {
            if (axios.isCancel(err)){
                console.log("request cancelled")
            }
            else {
                //handleerror
            }
        })

    return () => {
        cancelToken.cancel()
    }
  }, [currency])

  return (
    <div className="w-full grid grid-cols-5 gap-10 text-white">
        {data.map((coin) => (
            <div 
                key={coin.symbol} 
                className='w-60 h-auto flex flex-col justify-center items-center gap-4 p-2 bg-gradient-to-br from-white/10 to-white/~5 backdrop-blur-sm rounded-xl drop-shadow-lg border border-white/20'
            >
                <img src={coin.image} alt="coin-image" className="w-20"/>
                <div className=" flex justify-center gap-4">
                    <span className="text-white">{coin.symbol.toUpperCase()}</span> 
                    {coin.price_change_percentage_24h >= 0 && (
                        <span className="text-green-500">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                    {coin.price_change_percentage_24h < 0 && (
                        <span className="text-red-700">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className="font-bold text-xl flex gap-2">
                    <span>{symbol}</span>
                    <span>{coin.current_price.toLocaleString(currency)}</span>
                </div>
            </div>
        ))}
    </div>
  )
}
