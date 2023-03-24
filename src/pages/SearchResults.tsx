import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { SingleCoin } from "../utils/api"

interface CoinsType {

}

const SearchResults = () => {
  /* const params = useParams()
  const [data, setData] = useState(Array<CoinsType>)

  useEffect(() => {
    axios.get(SingleCoin(name))
  }, [params.name]) */
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults