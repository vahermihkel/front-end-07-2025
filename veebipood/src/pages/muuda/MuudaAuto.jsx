import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

function MuudaAuto() {
  const {index} = useParams();
  const leitud = autodFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const piltRef = useRef();
  const navigate = useNavigate();

  function muuda() {
    if (nimiRef.current.value === "") {
      toast.error("Auto nimi ei tohi olla tühi!");
      return;
    } 

    if (hindRef.current.value <= 0) {
      toast.error("Hind peab olema positiivne!");
      return;
    } 

     autodFailist[index] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "aktiivne": aktiivneRef.current.checked,
      "pilt": piltRef.current.value
    };
    
    navigate("/halda-autod");

  }

  if (leitud === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <label>Nimi</label> <br />
      <input type="text" defaultValue={leitud.nimi} ref={nimiRef} /><br />
      <label>Hind</label> <br />
      <input type="number" defaultValue={leitud.hind} ref={hindRef} /><br />
      <label>Pilt</label> <br />
      <input type="text" defaultValue={leitud.pilt} ref={piltRef} /><br />
      <label>Aktiivne</label> <br />
      <input type="checkbox" defaultValue={leitud.aktiivne} ref={aktiivneRef} /><br />
      <button onClick={muuda}>Muuda</button> <br />
      <ToastContainer />
    </div>
  )
}

export default MuudaAuto