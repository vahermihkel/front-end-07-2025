import { useRef, useState } from "react"
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = ["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa", "Viru keskus"];
  const otsingRef = useRef();

  function arvutaKokku() {
    let sum = 0;
    esindused.forEach(esindus => sum = sum + esindus.keskus.length);
    return sum;
  }

  function otsi() {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.includes(otsingRef.current.value));
    setEsindused(vastus);
  }

  return (
    <div>
      <div>Hetkel aktiivne linn: {linn} </div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <div>
        <input onChange={otsi} ref={otsingRef} type="text" />
        <div>Esinduste arv: {esindused.length} tk</div>
         {esindused.map(esindus => 
          <div key={esindus.keskus}>
            {esindus.keskus}
             <Link to={"/esindus/" + esindus.keskus}>
                <button>Vt lähemalt</button>
              </Link>
          </div>)}
          <div>Kõikide esinduste tähemärkide arv kokku: {arvutaKokku()}tk</div>
      </div>}

      {linn === "Tartu" &&
      <div>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </div>
      }

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused