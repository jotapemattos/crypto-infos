import Platform from '../assets/home2-bg.png'
import Coin from '../assets/h2-bit-m.png'
import { TrendingCoins } from '../components/GlobalStats/TrendingCoins'
import { useHome } from '../hooks/useHome'


const Home = () => {
    const { setSearch, handleSearch } = useHome()

    return (
        <main className="home flex flex-col items-center justify-center gap-28 pb-20 min-w-screen min-h-full">
            <div className='w-full lg:w-4/5 h-auto pt-40 flex flex-col lg:flex-row items-start md:items-center justify-between'>
                <span className='w-full md:w-5/6 lg:w-1/2 flex flex-col gap-16 items-center lg:items-start xl:pt-20 justify-start relative z-20 text-start'>
                    <h1 className='text-4xl xl:text-5xl text-white font-bold w-72 md:w-full lg:w-full'>This is Crypto Corner</h1>
                    <h2 className='text-xl xl:text-3xl text-cyan-400 font-extrabold w-72 md:w-full lg:w-full'>"Crypto Corner is your one-stop-shop for all the information you need to stay ahead of the game."</h2>
                    <p className='text-base text-indigo-200 font-bold lg:font-normal w-72 md:w-full lg:w-full'>We are a comprehensive platform that provides up-to-date information on everything related to cryptocurrency, including news, market updates, analysis of different coins and exchanges. Our expert team of researchers and writers covers all major cryptocurrencies and provides valuable resources for seasoned investors and newcomers alike.</p>
                </span>
                <span className='h-auto w-full lg:w-auto flex items-center justify-center absolute lg:relative z-10 opacity-0 md:opacity-10 lg:opacity-100'>
                    <img src={Coin} alt="bitcoin" className='bitcoin absolute hidden md:flex md:h-20 xl:h-auto'/>
                    <img src={Platform} alt="platform" className='h-full lg:h-[350px] xl:h-full' />
                </span>
            </div>
            <div className='w-full lg:w-5/6 h-auto flex flex-col items-center justify-center gap-4 text-white'>
                <h1 className='font-bold text-3xl xl:text-3xl'>Search for a coin</h1>
                <input
                    type="text"
                    placeholder='Ex: Bitcoin, Ethereum, Tether, etc.'
                    className='outline-none w-5/6 xl:w-[700px] bg-white/10 p-2 rounded-full text-white transition-all duration-300 text-lg'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>
            <TrendingCoins />
        </main>
    )
}

export default Home