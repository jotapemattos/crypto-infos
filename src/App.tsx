import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Header/NavBar'
import CoinsList from './pages/CoinsList'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import './styles/index.css'

function App() {

  return (
    <div className="main min-screen min-h-screen">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coinslist' element={<CoinsList/>}/>
          <Route path='/search/:name' element={<SearchResults/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
