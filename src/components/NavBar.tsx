import CryptoLogo from '/crypto-logo.svg'
import HamburgerIcon from './HamburgerIcon'

const NavBar = () => {
  return (
    <div className='w-full h-24 flex items-center md:items-end justify-center p-2 md:p-0 fixed inset-0'>
        <div className='w-full md:w-4/5 lg:w-4/5 xl:w-2/3 h-16 flex items-center justify-between p-4 text-white bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-full drop-shadow-lg border border-white/20'>
            <div className='w-1/3 flex items-center justify-start gap-2 text-2xl hover:cursor-pointer'>
                <img src={CryptoLogo} alt="crypto-logo" className='w-12'/>
                <p>Crypto </p>
            </div>
            <nav className='hidden lg:flex items-center justify-around w-1/3 text-base'>
                <p className='hover:cursor-pointer'>Coins</p>
                <p className='hover:cursor-pointer'>Exchanges</p>
                <p className='hover:cursor-pointer'>Markets</p>
            </nav>
            <h1 className='text-base w-1/3 hidden lg:flex justify-end hover:cursor-pointer'>News</h1>
            <HamburgerIcon/>
        </div>
    </div>
  )
}

export default NavBar