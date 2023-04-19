import CoinPricesGraph from "../components/CoinPricesGraph"
import Loader from "../components/Loader"
import { useCoinPage } from "../hooks/useCoinPage"

const CoinPage = () => {
  const { currency, symbol, singleCoin, params, isLoading } = useCoinPage()

  return (
    <>
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
        <Loader/>
      </div>
      )}
      {!isLoading && (
        <div className="coinpage min-w-full min-h-full flex flex-col items-center justify-center pt-24 lg:pt-44">
          <section className="w-full lg:h-[700px] p-4 md:px-10 lg:px-16 flex flex-col lg:flex-row">
            {<aside className="lg:w-[500px] lg:p-10 flex flex-col gap-10 text-white items-center justify-between lg:border-r lg:border-white">
              <img src={singleCoin?.image.large} alt="" width="100px lg:150px"/>
              <h2 className="text-4xl">{singleCoin?.name}</h2>
              <p className="text-start text-lg">{(singleCoin?.description.en.split(". ")[0])}.</p>
              <p className="text-start w-full text-lg">Rank: {singleCoin?.market_cap_rank}</p>
              <p className="text-start w-full text-lg">Current Price: {symbol} {singleCoin?.market_data.current_price[currency].toLocaleString(currency)}</p>
            </aside>}
            {<div className="w-full p-4">
              <CoinPricesGraph coin={params.coin!} currency={currency}/>
            </div>}
          </section>
        </div>
      )}
    </>
  )
}

export default CoinPage