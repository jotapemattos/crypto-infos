import CoinPricesGraph from "../components/CoinPricesGraph"
import { useCoinPage } from "../hooks/useCoinPage"

const CoinPage = () => {
  const { currency, symbol, singleCoin, params } = useCoinPage()

  return (
    <div className="coinpage min-w-full min-h-full flex flex-col items-center justify-center pt-44">
      <section className="w-full h-[700px] px-16 flex">
        <aside className="w-[500px] p-10 flex flex-col gap-10 text-white items-center justify-between border-r border-white">
          <img src={singleCoin?.image.large} alt="" width="150px"/>
          <h2 className="text-4xl">{singleCoin?.name}</h2>
          <p className="text-justify text-lg">{(singleCoin?.description.en.split(". ")[0])}.</p>
          <p className="text-start w-full text-lg">Rank: {singleCoin?.market_cap_rank}</p>
          <p className="text-start w-full text-lg">Current Price: {symbol} {singleCoin?.market_data.current_price[currency].toLocaleString(currency)}</p>
        </aside>
        <div className="w-full p-4">
          <CoinPricesGraph coin={params.coin!} currency={currency}/>
        </div>
      </section>

    </div>
  )
}

export default CoinPage