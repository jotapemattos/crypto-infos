import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { SearchQueryContext } from "../context/SearchQuery"

export const useHome = () => {
    const { search, setSearch } = useContext(SearchQueryContext)
    const navigate = useNavigate()
    const handleSearch = (e: { key: string }) => {
        if (e.key === 'Enter') {
            navigate('/search/' + search)
        }
        return
    }

    return {
        search,
        setSearch,
        handleSearch
    }
}