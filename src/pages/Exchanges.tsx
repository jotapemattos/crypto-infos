import axios from "axios"
import { useEffect, useState } from "react"
import { ExchangeList } from "../services/api"

interface ExchangesProps {
	id: string,
  name: string,
  year_established: number,
  country: string,
  description: string,
  url: string,
  image: string,
  trust_score_rank: number,
}

const Exchanges = () => {
	const [exchanges, setExchanges] = useState(Array<ExchangesProps>)
  const [pages, setPages] = useState(1)
  const [pageSelected, setPageSelected] = useState(1)

  const pagesArray = [1, 2, 3, 4, 5, 6]

  const handleClick = (page: number) => {
    setPageSelected(page)
    setPages(page)
  }

	const fetchExchanges = async () => {
		await axios.get(ExchangeList(pages))
    .then((response) => setExchanges(response.data))
	}

	useEffect(() => {
		fetchExchanges()
	}, [pages])

	return (
		<div className="min-w-full min-h-full pt-36 pb-16 flex flex-col gap-16 items-center justify-center">
			<section className="w-full flex items-center justify-center">
				<h1 className="text-3xl text-white font-bold">Exchanges</h1>
			</section>
      <div className="w-4/5 grid grid-cols-5 gap-10 items-center justify-items-center">
        {exchanges.map((exchange) => (
          <div 
            className="w-60 h-56 flex flex-col justify-around items-center gap-4 p-2 text-white bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl drop-shadow-lg hover:-translate-y-1 hover:opacity-70 hover:cursor-pointer transition-all duration-300"
            key={exchange.id}  
          >
            <img src={exchange.image} alt="exchange-image" />
            <a href={exchange.url}>{exchange.name}</a>
            {exchange.url === 'https://r.kraken.com/c/2223866/687155/10583' && (<div><a href='https://r.kraken.com/c/2223866/687155/10583'>Kraken</a></div>)}
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {pagesArray.map((page) => (
          <>
            
            <button 
              className={page === pageSelected ? `text-[#020017] font-bold bg-white p-2 rounded-full w-10 h-10 opacity-50` : `text-[#020017] font-bold bg-white p-2 rounded-full w-10 h-10`} 
              onClick={() => handleClick(page)}>{page}
            </button>
            
          </>
        ))}
      </div>
		</div>
	)
}

export default Exchanges