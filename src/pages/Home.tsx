import Platform from '../assets/home2-bg.png'
import Coin from '../assets/h2-bit-m.png'
import { TrendingCoins } from '../components/GlobalStats/TrendingCoins'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchQueryContext } from '../context/SearchQuery'


const Home = () => {
  const { search, setSearch} = useContext(SearchQueryContext)
  const navigate = useNavigate()
  const handleSearch = (e: {key: string}) => {
    if (e.key === 'Enter'){
        navigate('/search/' + search)
    }
    return 
  }

  return (
    <main className="home flex flex-col items-center justify-center gap-28 pb-20 min-w-screen min-h-full">
        <div className='w-4/5 h-auto pt-40 flex items-start justify-between'>
            <span className='w-1/2 flex flex-col gap-16 items-start pt-20 justify-start'>
                <h1 className='text-5xl text-white font-bold'>This is Crypto Corner</h1>
                <h2 className='text-3xl text-blue-400 font-bold'>Crypto Corner is your one-stop-shop for all the information you need to stay ahead of the game.</h2>
                <p className='text-lg text-indigo-300'>We are a comprehensive platform that provides up-to-date information on everything related to cryptocurrency, including news, market updates, analysis of different coins and exchanges. Our expert team of researchers and writers covers all major cryptocurrencies and provides valuable resources for seasoned investors and newcomers alike.</p>
            </span>
            <span className='h-auto flex items-center justify-center'>
                <img src={Coin} alt="bitcoin" className='bitcoin absolute'/>
                <img src={Platform} alt="platform" className='h-full'/>
            </span>
        </div>
        <div className='w-5/6 h-auto flex flex-col items-center justify-center gap-4 text-indigo-300'>
            <h1 className='font-bold text-3xl'>Search for a coin</h1>
            <input 
                type="text" 
                placeholder='Ex: Bitcoin, Ethereum, Tether, etc.'
                className='outline-none w-[700px] bg-white/5 p-2 rounded-full text-white transition-all duration-300 text-lg  shadow-cyan-300'
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
            />
        </div>
        <TrendingCoins/>
    </main>
  )
}

export default Home