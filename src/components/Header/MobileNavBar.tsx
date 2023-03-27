import { useContext } from "react"
import { CurrencyContext } from "../../context/Currency"

const MobileNavBar = () => {
  const { currency, setCurrency} = useContext(CurrencyContext)
  return (
    <div className="w-full h-auto left-0 mt-4 absolute p-2 text-white flex flex-col items-center justify-between bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg drop-shadow-lg">
      <nav className=' flex items-center justify-around w-full text-base'>
          <p className='hover:cursor-pointer'>Coins</p>
          <p className='hover:cursor-pointer'>Exchanges</p>
          <p className='hover:cursor-pointer'>Markets</p>
          <select 
                className='bg-transparent outline-none hover:cursor-pointer'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option className='p-2 bg-[#020017]' value="INR">₹INR</option>
                <option className='p-2 bg-[#020017]' value="USD">$USD</option>
              </select>
        </nav>
    </div>
  )
}

export default MobileNavBar