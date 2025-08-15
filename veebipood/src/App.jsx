import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Esindused from './pages/arrays/Esindused'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import ArraysHome from './pages/arrays/ArraysHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaTooted from './pages/halda/HaldaTooted'
import HaldaHome from './pages/halda/HaldaHome'
import MuudaAuto from './pages/muuda/MuudaAuto'
import MuudaEsindus from './pages/muuda/MuudaEsindus'
import MuudaHind from './pages/muuda/MuudaHind'
import MuudaKasutaja from './pages/muuda/MuudaKasutaja'
import MuudaTootaja from './pages/muuda/MuudaTootaja'
import MuudaToode from './pages/muuda/MuudaToode'
import YksAuto from './pages/yks/YksAuto'
import YksEsindus from './pages/yks/YksEsindus'
import YksHind from './pages/yks/YksHind'
import YksKasutaja from './pages/yks/YksKasutaja'
import YksTootaja from './pages/yks/YksTootaja'
import YksToode from './pages/yks/YksToode'
import { useState } from 'react'
import Email from './pages/Email'
import Kaart from './pages/Kaart'
import ApiHome from './pages/api/ApiHome'
import Books from './pages/api/Books'
import Cars from './pages/api/Cars'
import Countries from './pages/api/Countries'
import Products1 from './pages/api/Products1'
import Products2 from './pages/api/Products2'
import Products3 from './pages/api/Products3'
import Vocabulary from './pages/api/Vocabulary'
import { Button } from '@mui/material'

function App() {
  const [tume, setTume] = useState(JSON.parse(localStorage.getItem("tume")));

  function tumedaks() {
    setTume(true);
    localStorage.setItem("tume", JSON.stringify(true));
  }

  function heledaks() {
    setTume(false);
    localStorage.setItem("tume", JSON.stringify(false));
  }

  return (
    <div className={tume ? "tume" : undefined}>
      <Menu />
      <Button variant='contained' onClick={tumedaks}>Tumedaks</Button>
      <Button variant='outlined' onClick={heledaks}>Heledaks</Button>

      <Routes>
        <Route path='/' element={ <Avaleht /> } />        
        <Route path='/osta-kinkekaart' element={ <Kinkekaart /> } />
        <Route path='/lisa-toode' element={ <LisaToode /> } />
        <Route path='/seaded' element={ <Seaded /> } />
        <Route path='/ostukorv' element={ <Ostukorv /> } />
        <Route path='/kalkulaator' element={ <Kalkulaator /> } />

        <Route path='/arrays' element={ <ArraysHome /> } />
        <Route path='/autod' element={ <Autod /> } />
        <Route path='/esindused' element={ <Esindused /> } />
        <Route path='/hinnad' element={ <Hinnad /> } />
        <Route path='/kasutajad' element={ <Kasutajad /> } />
        <Route path='/tootajad' element={ <Tootajad /> } />
        <Route path='/tooted' element={ <Tooted /> } />

        <Route path='/halda' element={ <HaldaHome /> } />
        <Route path='/halda-autod' element={ <HaldaAutod /> } />
        <Route path='/halda-esindused' element={ <HaldaEsindused /> } />
        <Route path='/halda-hinnad' element={ <HaldaHinnad /> } />
        <Route path='/halda-kasutajad' element={ <HaldaKasutajad /> } />
        <Route path='/halda-tootajad' element={ <HaldaTootajad /> } />
        <Route path='/halda-tooted' element={ <HaldaTooted /> } />

        <Route path='/muuda-auto/:index' element={ <MuudaAuto /> } />
        <Route path='/muuda-esindus/:index' element={ <MuudaEsindus /> } />
        <Route path='/muuda-hind/:index' element={ <MuudaHind /> } />
        <Route path='/muuda-kasutaja/:index' element={ <MuudaKasutaja /> } />
        <Route path='/muuda-tootaja/:index' element={ <MuudaTootaja /> } />
        <Route path='/muuda-toode/:index' element={ <MuudaToode /> } />

        <Route path='/auto/:name' element={ <YksAuto /> } />
        <Route path='/esindus/:pood' element={ <YksEsindus /> } />
        <Route path='/hind/:index' element={ <YksHind /> } />
        <Route path='/kasutaja' element={ <YksKasutaja /> } />
        <Route path='/tootaja' element={ <YksTootaja /> } />
        <Route path='/toode' element={ <YksToode /> } />
        
        <Route path='/email' element={ <Email /> } />
        <Route path='/kaart' element={ <Kaart /> } />

        <Route path='/api' element={ <ApiHome /> } />
        <Route path='/books' element={ <Books /> } />
        <Route path='/cars' element={ <Cars /> } />
        <Route path='/countries' element={ <Countries /> } />
        <Route path='/products1' element={ <Products1 /> } />
        <Route path='/products2' element={ <Products2 /> } />
        <Route path='/products3' element={ <Products3 /> } />
        <Route path='/vocabulary' element={ <Vocabulary /> } />

        <Route path='/*' element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App


