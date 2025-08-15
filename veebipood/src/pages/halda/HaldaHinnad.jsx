import { useRef, useState } from "react"
import hinnadFailist from "../../data/hinnad.json"
import { Link } from "react-router-dom";

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();
  const sonaRef = useRef();

  function lisa () { // ref.current.value by default on alati sõna
    hinnadFailist.push({
      "number": Number(hindRef.current.value),
      "sonana": sonaRef.current.value
    });
    setHinnad(hinnadFailist.slice());
  }

  function kustuta (index) {
    hinnadFailist.splice(index,1);
    setHinnad(hinnadFailist.slice());
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Sõnana</label> <br />
      <input ref={sonaRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />

      <div>Hindade arv: {hinnad.length} tk</div>

      <table>
        <thead>
          <tr>
            <th>Järjekorranumber</th>
            <th>Index</th>
            <th>Hind</th>
            <th>Sõnana</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={hind.number}>
              <td>{index+1}.</td>
              <td>{index}</td>
              <td>{hind.number}</td>
              <td>{hind.sonana}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-hind/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>

            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad