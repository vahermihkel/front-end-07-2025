import { useRef, useState } from "react";
import autodFailist from "../../data/autod.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";


function HaldaAutod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const autoRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();


  function kustuta(index) {
    autodFailist.splice(index,1); // mitmendat, mitu-tk
    setAutod(autodFailist.slice());
  }

  function lisa() {

    if (autoRef.current.value === "") {
      toast.error("Auto nimi ei tohi olla tühi!");
      return;
    } 

    if (hindRef.current.value <= 0) {
      toast.error("Hind peab olema positiivne!");
      return;
    } 

    autodFailist.push({
      "nimi": autoRef.current.value,
      "hind": Number(hindRef.current.value),
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    });
    setAutod(autodFailist.slice());
    toast.success("Uus auto lisatud!");
  }

  return (
    <div>
      <label>Auto nimi</label> <br />
      <input ref={autoRef} type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Auto aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />

      <div>Autode arv: {autod.length} tk</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Index</th>
            <th>Auto nimi</th>
            <th>Auto hind</th>
            <th>Auto aktiivne</th>
            <th>Auto pilt</th>

            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => 
            <tr key={auto.nimi}>
              <td>{index+1}.</td>
              <td>{index}</td>
              <td>{auto.nimi}</td>
              <td>{auto.hind}</td>
              <td>{auto.aktiivne ? "Aktiivne" : "Mitteaktiivne"}</td>
              <td><img className="pilt" src={auto.pilt} alt="" /></td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-auto/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>)}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  )
}

export default HaldaAutod