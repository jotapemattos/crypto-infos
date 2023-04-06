import axios from "axios"
import { useParams } from "react-router-dom"
import { HistoricalChart, SingleCoin } from "../services/api"
import { useContext, useEffect, useState } from "react"
import { CurrencyContext } from "../context/Currency"
import CoinPricesGraph from "../components/CoinPricesGraph"

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
  description: {en: string}
}

const CoinPage = () => {
  const { currency, symbol } = useContext(CurrencyContext)
  const params = useParams()
  const [singleCoin, setSingleCoin] = useState <SingleCoinTypes>()

  const fetchOneCoin = async () => {
    await axios.get(SingleCoin(params.coin!))
    .then((response) => setSingleCoin(response.data))
  }

  useEffect(() => {
    fetchOneCoin()
  }, [])

  return (
    <div className="min-w-full min-h-full flex flex-col items-center justify-center relative top-44">
      <section className="w-full h-[700px] px-16 flex">
        <aside className="w-[500px] p-10 flex flex-col gap-10 text-white items-center justify-between border-r border-white">
          <img src={singleCoin?.image.large} alt="" width="150px"/>
          <h2 className="text-4xl">{singleCoin?.name}</h2>
          <p className="text-justify text-lg">{singleCoin?.description.en.split(". ")[0]}.</p>
          <p className="text-start w-full text-lg">Rank: {singleCoin?.market_cap_rank}</p>
          <p className="text-start w-full text-lg">Current Price: {symbol}{singleCoin?.market_data.current_price[currency].toLocaleString(currency)}</p>
        </aside>
        <div className="w-full p-4">
          <CoinPricesGraph coin={params.coin!} currency={currency}/>
        </div>
      </section>

    </div>
  )
}

export default CoinPage