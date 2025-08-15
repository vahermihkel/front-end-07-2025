import { useRef, useState } from "react"
import esindusedFailist from "../../data/esindused.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();


  function lisa () {

    if (esindusRef.current.value === "") {
      toast("Esinduse keskus ei tohi olla tühi!");
      return;
    } 

    if (aadressRef.current.value === "") {
      toast("Esinduse aadress ei tohi olla tühi!");
      return;
    } 

    esindusedFailist.push({
      "keskus": esindusRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
    });
    setEsindused(esindusedFailist.slice());
  }

  function kustuta (index) {
    esindusedFailist.splice(index,1);
    setEsindused(esindusedFailist.slice());
  }

  return (
    <div>
      <label>Esinduse nimi</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />

      <div>Esinduste arv: {esindused.length} tk</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Index</th>
            <th>Keskus</th>
            <th>Telefon</th>
            <th>Aadress</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
            <tr key={esindus.keskus}>
              <td>{index+1}.</td>
              <td>{index}</td>
              <td>{esindus.keskus}</td>
              <td>{esindus.tel}</td>
              <td>{esindus.aadress}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-esindus/" + index}>
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

export default HaldaEsindused