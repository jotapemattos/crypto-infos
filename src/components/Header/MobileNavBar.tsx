import { useContext } from "react"
import { CurrencyContext } from "../../context/Currency"
import { Link } from "react-router-dom"

const MobileNavBar = () => {
  const { currency, setCurrency} = useContext(CurrencyContext)
  return (
    <div className="w-full h-auto left-0 mt-4 absolute p-2 text-white flex flex-col items-center justify-between bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg drop-shadow-lg">
      <nav className=' flex items-center justify-around w-full text-base'>
          <Link to={'/coinslist'}>
            <p className='hover:cursor-pointer'>Coins</p>
          </Link>
          <Link to={'/exchanges'}>
            <p className='hover:cursor-pointer'>Exchanges</p>
          </Link>
          <p className='hover:cursor-pointer'>Markets</p>
          <select 
                className='bg-transparent outline-none hover:cursor-pointer'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option className='p-2 bg-[#020017]' value="inr">₹INR</option>
                <option className='p-2 bg-[#020017]' value="usd">$USD</option>
              </select>
        </nav>
    </div>
  )
}

export default MobileNavBar