import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
  //  <Route path='/auto/:name' element={ <YksAuto /> } />
  const {name} = useParams(); // võtab URL-st muutuja
  const leitud = autodFailist.find(auto => auto.nimi === name);

  function lisaOstukorvi() {
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
    ostukorvLS.push(leitud);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  // 1. võtame localStorage-st ostukorvi toodete vana seisu:   localStorage.getItem()
  // 1.b teeme kontrolli, et kui on tühi, siis on tühi array
  // 2. võtame sellelt localStorage-i ostukorvist jutumärgid maha:   JSON.parse()
  // 3. lisame ühe toote sinna seisule juurde:   .push()
  // 4. lisame jutumärgid tagasi:           JSON.stringify()
  // 5. lisame localStorage-sse:           localStorage.setItem()

  if (leitud === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div><img className="pilt" src={leitud.pilt} alt="" /></div>
      <div>{leitud.aktiivne === false ? 
          <i>Toode on mitteaktiivne</i> : 
          <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>}
      </div>
    </div>
  )
}

export default YksAuto