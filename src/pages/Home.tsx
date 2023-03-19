import  Coins  from '../assets/home-image.svg'


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-20 min-w-screen min-h-full">
        <div className='w-5/6 h-auto pt-44 flex items-start justify-center'>
            <span className='w-[1000px] flex flex-col gap-20 items-center pt-20 justify-center z-20 absolute'>
                <h1 className='text-6xl text-white font-bold'>This is Crypto Infos</h1>
                <h2 className='text-4xl text-blue-400 font-bold'>The best place to find everything about the crypto world</h2>
                <p className='text-xl text-indigo-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere consectetur perspiciatis voluptas. Explicabo fugit necessitatibus cumque voluptatem molestiae delectus obcaecati nesciunt, saepe id ullam ut quibusdam repudiandae beatae molestias.</p>
            </span>
            <span className='h-auto flex items-center justify-center opacity-20 z-10 relative'>
                <img src={Coins} alt="" className='h-full'/>
            </span>
        </div>
        <div className='w-5/6 h-auto flex flex-col items-center justify-center gap-4 text-indigo-300'>
            <h1 className='font-bold text-3xl'>Search for a coin</h1>
            <input 
                type="text" 
                placeholder='Ex: Bitcoin, Ethereum, Tether, etc.'
                className='outline-none w-[500px] bg-transparent p-2 border-b border-white/40 text-white transition-all duration-300 text-lg'
            />
        </div>
    </main>
  )
}

export default Home