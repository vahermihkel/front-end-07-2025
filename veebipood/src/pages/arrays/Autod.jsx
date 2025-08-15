import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome"
import autodFailist from "../../data/autod.json"
// import ostukorvFailist from "../../data/ostukorv.json"
import { Link } from "react-router-dom";

function Autod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const otsingRef = useRef();

  function reset() {
    setAutod(autodFailist.slice());
  }

  function sorteeriAZ() {
    autod.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setAutod(autod.slice());
  }

  function sorteeriZA() {
    autod.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setAutod(autod.slice());
  }

  function sorteeriOdavamast() {
    autod.sort((a,b) => a.hind - b.hind);
    setAutod(autod.slice());
  }

   function sorteeriKallimast() {
    autod.sort((a,b) => b.hind - a.hind);
    setAutod(autod.slice());
  }

  function sorteeriTahedKasvavalt() {
    autod.sort((a,b) => a.nimi.length - b.nimi.length);
    setAutod(autod.slice());
  }

  function sorteeriTahedKahanevalt() {
    autod.sort((a,b) => b.nimi.length - a.nimi.length);
    setAutod(autod.slice());
  }

  function sorteeriKolmasTahtAZ() {
 // autod.sort((a,b) => a.charAt(2).localeCompare(b.charAt(2)));
 // autod.sort((a,b) => a.at(2).localeCompare(b.at(2)));
    autod.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
    setAutod(autod.slice());
  }

  function filtreeriAgaLoppevad() {
    // const vastus = autod.filter(auto => auto.endsWith("w") || auto.endsWith("W"));
    const vastus = autodFailist.filter(auto => auto.nimi.endsWith("a"))
    setAutod(vastus);
  }

  function filtreeriLyhenditOLSisaldavad() {
    const vastus = autodFailist.filter(auto => auto.nimi.includes("ol"));
    setAutod(vastus);
  }

  function filtreeriPikemadKui6() {
    const vastus = autodFailist.filter(auto => auto.nimi.length > 6);
    setAutod(vastus);
  }

  function filtreeriTapselt6() {
    const vastus = autodFailist.filter(auto => auto.nimi.length === 6);
    setAutod(vastus);
  }

  function filtreeriTeineTahtO() {
    const vastus = autodFailist.filter(auto => auto.nimi[1] === "o");
    setAutod(vastus);
  }

  function lisaOstukorvi(toode) {
    // ostukorvFailist.push(toode);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLS.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  function arvutaKokku() {
    let sum = 0;
    autod.forEach(auto => sum = sum + auto.hind);
    return sum;
  }

  function otsi() {
    const vastus = autodFailist.filter(auto => 
        auto.nimi.toLowerCase().includes(otsingRef.current.value.toLowerCase()) ||
        auto.hind.toString().includes(otsingRef.current.value.toLowerCase())
      );
    setAutod(vastus);
  }

  return (
    <div>
      <ArraysHome />
      <input onChange={otsi} ref={otsingRef} type="text" />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri AZ</button>
      <button onClick={sorteeriZA}>Sorteeri ZA</button>
      <button onClick={sorteeriOdavamast}>Sorteeri odavamad ees</button>
      <button onClick={sorteeriKallimast}>Sorteeri kallimad ees</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht AZ</button>
      <br /><br />
      <button onClick={filtreeriAgaLoppevad}>Jäta alles a-ga lõppevad</button>
      <button onClick={filtreeriLyhenditOLSisaldavad}>Jäta alles ol sisaldavad nimed</button>
      <button onClick={filtreeriPikemadKui6}>Jäta alles pikemad nimed kui 6</button>
      <button onClick={filtreeriTapselt6}>Jäta alles täpselt 6 tahelised</button>
      <button onClick={filtreeriTeineTahtO}>Jäta alles kellel teine täht o</button>


      <div>Nähtaval on {autod.length} autot</div>
      <div>{autod.map(auto => 
        <div key={auto}>
          <img className="pilt" src={auto.pilt} alt="" />
          {auto.nimi} {auto.hind}€
          {auto.aktiivne && <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>}
          <Link to={"/auto/" + auto.nimi}>
            <button>Vt lähemalt</button>
          </Link>
        </div>)}
      </div>

      <div>Kõikide autode hind kokku: {arvutaKokku()}€</div>

    </div>
  )
}

export default Autod