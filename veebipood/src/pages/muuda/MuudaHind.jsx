import { useNavigate, useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react";

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadFailist[index];
  const hindRef = useRef();
  const sonaRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    hinnadFailist[index] = {
      "number": Number(hindRef.current.value),
      "sonana": sonaRef.current.value
    }
    navigate("/halda-hinnad");
  }

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input type="text" ref={hindRef} defaultValue={leitud.hind} /> <br />
      <label>Sõnana</label> <br />
      <input type="text" ref={sonaRef} defaultValue={leitud.sonana} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaHind