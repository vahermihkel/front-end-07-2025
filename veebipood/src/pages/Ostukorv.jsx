import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'react-i18next';

// import ostukorvFailist from "../data/ostukorv.json"

// renderdamine - esmakordselt lehele tulek, HTMLi väljanäitamine. väga palju tööd, sest kuvab kogu HTMLi välja
// re-renderdamine - setteri käivitamine (praegu setTooted()). läheb uuesti HTMLi vaatama ehk uuendama, aga
//        kõik elemendid on tal mälus ehk tegemist on efektiivse vaatamisega. ainuke asi mis mälus pole, on tsükkel
//        sest tsükkel on JavaScript ja see on muutuvas seisundis. seega peame key={} abil tsükli sisus oleva
//        HTML elemendi meelde jätma (et React ei peaks uuesti seda renderdama)

function Ostukorv() {
  const { t } = useTranslation();
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const [pakiautomaadid, setPakiautomaadid] = useState([]);
  const [dbPakiautomaadid, setDbPakiautomaadid] = useState([]);
  const [riik, setRiik] = useState("EE");
  const otsingRef = useRef();

  useEffect(() => {
    fetch('https://www.omniva.ee/locations.json')
      .then(res => res.json())            
      .then(json => {
        setPakiautomaadid(json);
        setDbPakiautomaadid(json);
      })
  }, []);

  function tyhjenda() {
    tooted.splice(0);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  function kustuta(index) {
    tooted.splice(index,1);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

   function arvutaKokku() {
    let sum = 0;
    tooted.forEach(toode => sum = sum + toode.hind);
    return sum;
  }

  function otsi() {
    const vastus = dbPakiautomaadid.filter(automaat => 
              automaat.NAME.includes(otsingRef.current.value));
    setPakiautomaadid(vastus);
  }

  return (
    <div>
      {tooted.length > 0 && 
        <div>
          <button onClick={tyhjenda}>{t("cart.empty-button")}</button>
          <div>Ostukorvis on {tooted.length} toodet</div>
        </div>
      }

      {tooted.length === 0 && <div>{t("cart.text")}</div>}

      {tooted.map((toode, index) => 
        <div key={toode.nimi}>
          {toode.nimi} - {toode.hind}€
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      {tooted.length > 0 && 
       <div>{t("cart.total")}: {arvutaKokku()}€</div>
      }

      <label>Otsi pakiautomaatide seast: </label>
      <input onChange={otsi} ref={otsingRef} type="text" />

      <button onClick={() => setRiik("EE")}>Eesti</button>
      <button onClick={() => setRiik("LV")}>Läti</button>
      <button onClick={() => setRiik("LT")}>Leedu</button>

      <select>
        {pakiautomaadid
          .filter(automaat => automaat.A0_NAME === riik)
          .map(automaat => <option key={automaat.NAME}>{automaat.NAME}</option>)}
      </select>

    </div>
  )
}

export default Ostukorv