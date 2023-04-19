import { CaretLeft, CaretRight, MapPin } from "@phosphor-icons/react"
import { useExchange } from "../hooks/useExchanges"
import Loader from "../components/Loader"

const Exchanges = () => {
	const {exchanges, pagesArray, pageSelected, isLoading, handleClick, handlePreviousPage, handleNextPage } = useExchange()

	return (
		<>
      {isLoading && (
          <div className="w-screen h-screen flex justify-center items-center">
            <Loader/>
          </div>
        )
      }
      {!isLoading && (
        <div className="min-w-full min-h-full pt-36 pb-16 flex flex-col gap-16 items-center justify-center">
          {<section className="w-full flex items-center justify-center">
            <h1 className="text-3xl text-white font-bold">Exchanges</h1>
          </section>}
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 items-center justify-items-center">
            {exchanges.map((exchange) => (
              <div
                className="card w-60 h-56 flex flex-col justify-center items-center gap-4 p-2 text-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl drop-shadow-lg hover:-translate-y-1 hover:opacity-70 hover:cursor-pointer transition-all duration-300"
                key={exchange.id}
              >
                <h1 className="absolute inset-0 p-2">#{exchange.trust_score_rank}</h1>
                <div className="flex flex-col justify-around items-center gap-4 p-2 relative">
                  <img src={exchange.image} alt="exchange-image" className="w-14"/>
                  <a href={exchange.url} target="_blank" className="text-xl text-center">{exchange.name}</a>
                  {exchange.url === 'https://r.kraken.com/c/2223866/687155/10583' && (<h1 className="text-xl text-center">Kraken</h1>)}
                  <p className="flex items-center justify-center gap-2">
                    <MapPin size={24} color="#ff0000" weight="fill" />
                    {exchange.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            <CaretLeft
              size={32}
              color="#ffffff"
              weight="regular"
              className={!(pageSelected === 1) ? `hover:cursor-pointer` : `hover:cursor-default`}
              onClick={handlePreviousPage}
            />
            {pagesArray.map((page, i) => (
              <button
                key={i}
                className={page === pageSelected ? `text-[#020017] font-bold bg-white p-2 rounded-full w-10 h-10 opacity-50` : `text-[#020017] font-bold bg-white p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10`}
                onClick={() => handleClick(page)}>{page}
              </button>
            ))}
            <CaretRight
              size={32}
              color="#ffffff"
              weight="regular"
              className={pageSelected < 6 ? `hover:cursor-pointer` : `hover:cursor-default`}
              onClick={handleNextPage}
            />
          </div>
        </div>
        )
      }
    </>
	)
}

export default Exchanges