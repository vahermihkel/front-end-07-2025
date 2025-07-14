import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Esindused from './pages/Esindused'

function App() {

  return (
    <>
      <Link to="/">
        <img className="pilt" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586817825-20ex400g-242wt1drf3cg-a-19104142414.png" alt="" />
      </Link>

      <Link to="/esindused">
        <button>Esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button>Kinkekaardid</button>
      </Link>

      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Link to="/ostukorv">
        <button>Ostukorv</button>
      </Link>

      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/esindused' element={ <Esindused /> } />
        <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
        <Route path='/lisa-toode' element={ <LisaToode /> } />
        <Route path='/seaded' element={ <Seaded /> } />
        <Route path='/ostukorv' element={ <Ostukorv /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
