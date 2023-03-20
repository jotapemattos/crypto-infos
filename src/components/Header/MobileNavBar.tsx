
const MobileNavBar = () => {
  return (
    <div className="w-full h-auto left-0 mt-4 absolute p-2 text-white flex flex-col items-center justify-between bg-white/10 bg-opacity-10 backdrop-blur-sm rounded-lg drop-shadow-lg">
      <nav className=' flex items-center justify-around w-full text-base'>
          <p className='hover:cursor-pointer'>Coins</p>
          <p className='hover:cursor-pointer'>Exchanges</p>
          <p className='hover:cursor-pointer'>Markets</p>
          <p className='hover:cursor-pointer'>News</p>
        </nav>
    </div>
  )
}

export default MobileNavBar