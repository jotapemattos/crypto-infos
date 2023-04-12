import axios from "axios"
import { useState, useEffect } from "react"
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

export const useExchange = () => {
  const [exchanges, setExchanges] = useState(Array<ExchangesProps>)
  const [pages, setPages] = useState(1)
  const [pageSelected, setPageSelected] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const pagesArray = [1, 2, 3, 4, 5, 6]

  const handleClick = (page: number) => {
    setPageSelected(page)
    setPages(page)
    window.scroll(0, 0)
  }

  const handlePreviousPage = () => {
    if (!(pageSelected === 1)) {
      setPages(pages - 1)
      setPageSelected(pages -1)
      window.scroll(0, 0)
    } return 
  }

  const handleNextPage = () => {
    if (pageSelected < 6) {
      setPages(pages + 1)
      setPageSelected(pages + 1)
      window.scroll(0, 0)
    } return 
  }

	const fetchExchanges = async () => {
		await axios.get(ExchangeList(pages))
    .then((response) => setExchanges(response.data))
    setIsLoading(false)
	}

	useEffect(() => {
		fetchExchanges()
	}, [pages])

  return {
    exchanges,
    pagesArray,
    pageSelected,
    isLoading,
    handleClick,
    handlePreviousPage,
    handleNextPage
  }
}