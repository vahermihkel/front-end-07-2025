import { useNavigate, useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"
import { useRef } from "react";

function MuudaEsindus() {
  const {index} = useParams();
  const leitud = esindusedFailist[index];
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    esindusedFailist[index] = {
      "keskus": esindusRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
    };
    navigate("/halda-esindused");
  }

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <label>Keskus</label> <br />
      <input type="text" ref={esindusRef} defaultValue={leitud.keskus} /> <br />
      <label>Aadress</label> <br />
      <input type="text" ref={telefonRef} defaultValue={leitud.aadress} /> <br />
      <label>Telefon</label> <br />
      <input type="text" ref={aadressRef} defaultValue={leitud.tel} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus