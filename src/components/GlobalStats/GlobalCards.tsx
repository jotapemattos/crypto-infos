import axios from "axios"
import { useEffect, useState } from "react"
import  { baseUrl }  from '../../utils/data'



 

export const GlobalCards = () => {
    /* const [data, setData] = useState<globalStatsType>({})  */ 

      const cardStyle = `w-1/3 h-auto p-2 bg-gradient-to-br from-transparent to-white/10 backdrop-blur-sm border border-white/20 rounded-lg`
    
      useEffect(()=>{
        axios.get(`${baseUrl}/nfts/list`)
        .then((response)=> console.log(response))
      }, [])

  return (
    <div className="w-full flex gap-10">
        {/* <div className={cardStyle}>
            <div className="h-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-2xl text-white">Newest coins</h1>
                <div className="w-full h-full grid grid-cols-3 justify-items-center">
                {data.newestCoins.map((coin)=> (
                    <div 
                        key={coin.uuid}
                        className="rounded-full flex flex-col items-center gap-4"
                    >
                        <p className="text-lg text-white">{coin.name}</p>
                        <img src={coin.iconUrl} alt="" className="w-14 h-14 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-200"/>
                        <a href={coin.coinrankingUrl} className="text-sm text-cyan-300">Coin ranking</a>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className={cardStyle}>
            <div className="h-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-2xl text-white">Best coins</h1>
                <div className="w-full h-full grid grid-cols-3 justify-items-center">
                {data.bestCoins.map((coin)=> (
                    <div 
                        key={coin.uuid}
                        className="rounded-full flex flex-col items-center gap-4"
                    >
                        <p className="text-lg text-white">{coin.name}</p>
                        <img src={coin.iconUrl} alt="" className="w-14 h-14 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-200"/>
                        <a href={coin.coinrankingUrl} className="text-sm text-cyan-300">Coin ranking</a>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className={cardStyle}>
            <div className="h-full flex flex-col justify-center items-center gap-6">
                <h1 className="text-2xl text-white">Stats</h1>
                <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
                    <div className="flex gap-2">
                        <p className="text-cyan-400">Total coins:</p> 
                        {data.totalCoins.toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                        <p className="text-cyan-400">Total exchanges:</p>
                        {data.totalExchanges.toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                        <p className="text-cyan-400">Total markets: </p>
                        {data.totalMarkets.toFixed(2)}
                    </div>
                    <div className="flex gap-2">
                        <p className="text-cyan-400">Bitcoin Dominance: </p>
                        {data.btcDominance.toFixed(2)}
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}
