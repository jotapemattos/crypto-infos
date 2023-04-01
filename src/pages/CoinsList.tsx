import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from '../context/Currency'
import { CoinList } from '../services/api'

interface CoinsType {
    name: string,
    symbol: string,
    image: string,
    market_cap_rank: number,
    current_price: number,
    price_change_percentage_24h: number
}

const CoinsList = () => {
  const {currency, symbol} = useContext(CurrencyContext)
  const [data, setData] = useState(Array<CoinsType>)  

  useEffect(() => {
    //axios cancellation token in case the user cancels the request
    const cancelToken = axios.CancelToken.source() 
    axios.get(CoinList(currency), {cancelToken: cancelToken.token})
    .then((response) => setData(response.data))
     .catch((err) => {
        if (axios.isCancel(err)) {
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
    <div className='coinsList flex flex-col items-center justify-center pb-20 min-w-screen min-h-full'>
        <div className='w-5/6 flex flex-col gap-10 h-auto mt-40'>
            {data.map((coin) => (
                <div 
                    key={coin.symbol} 
                    className='w-full flex items-center justify-between bg-blue-900/20 rounded-2xl shadow-xl'
                >
                    <div className='w-1/3 h-28 p-4 flex items-center justify-start gap-4 text-white'>
                        <img src={coin.image} alt="coin-image" className='h-full'/>
                        <p className='text-2xl'>{coin.name}</p>
                        <div className='text-2xl flex items-center justify-center gap-2'>
                            <span>{symbol}</span>
                            <span>{coin.current_price.toLocaleString(currency)}</span>
                        </div>
                    </div>
                    <div className='w-1/3 h-28 p-4 flex items-center justify-center gap-4 text-white'>
                        <p className='text-2xl'>{coin.symbol.toUpperCase()}</p>
                        <div className=" flex justify-center gap-4">
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
                    </div>
                    <div className='w-1/3 h-28 p-4 flex items-center justify-end gap-4 text-white'>
                        <p>#{coin.market_cap_rank}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CoinsList