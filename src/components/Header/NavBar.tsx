import CryptoLogo from '/crypto-logo.svg'
import HamburgerIcon from './HamburgerIcon'
import { useContext } from 'react'
import { CurrencyContext } from '../../context/Currency'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const { currency, setCurrency} = useContext(CurrencyContext)

  return (
    <div className='navbar w-full h-24 flex items-center md:items-end justify-center p-2 md:p-0 absolute z-30 inset-0'>
        <div className='w-full md:w-4/5 lg:w-4/5 xl:w-2/3 h-16 flex items-center justify-between p-4 text-white bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-full drop-shadow-lg border border-white/20'>
          <Link to={'/'} className='w-1/3 flex items-center justify-start gap-2 text-lg xl:text-2xl hover:cursor-pointer'>
            <img src={CryptoLogo} alt="crypto-logo" className='w-12'/>
            <p>Crypto Corner</p>
          </Link>
          <nav className='hidden lg:flex items-center justify-around w-1/3 text-base'>
                <Link to={'/coinslist'}>
                  <h4 className='hover:text-blue-300 hover:cursor-pointer transition-all duration-300'>Coins</h4>
                </Link>
                <Link to={'/exchanges'}>
                  <h4 className='hover:text-blue-300 hover:cursor-pointer transition-all duration-300'>Exchanges</h4>
                </Link>
                <h4 className='hover:text-blue-300 hover:cursor-pointer transition-all duration-300'>Markets</h4>
            </nav>
            <div className='text-base w-1/3 hidden lg:flex justify-end '>
              <select 
                className='bg-transparent outline-none hover:cursor-pointer'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option className='p-2 bg-[#020017]' value="inr">₹INR</option>
                <option className='p-2 bg-[#020017]' value="usd">$USD</option>
              </select>
            </div>
            <HamburgerIcon/>
        </div>
    </div>
  )
}

export default NavBar