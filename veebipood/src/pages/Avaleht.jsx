import { useState } from "react";
import KarusellGalerii from "../components/KarusellGalerii";

function Avaleht() {
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Uuenda kogust!");
  const [laigitud, setLaigitud] = useState(false);
  
  const nulli = () => {
// function nulli() {
    setKogus(0);
    setSonum("Nullisid koguse!");
  }

  const vahenda = () => {
// function vahenda() {
    setKogus(kogus - 1);
    setSonum("Vähendasid kogust!");
  }

  const suurenda = () => {
// function suurenda() {
    setKogus(kogus + 1);
    setSonum("Suurendasid kogust!");
  }

  return (
    <div>
      <KarusellGalerii />

      {laigitud === true && <img onClick={() => setLaigitud(false)} src="/laigitud.svg" alt="" />}
      {laigitud === false && <img onClick={() => setLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => setLaigitud(!laigitud)}>Vaheta like-i</button>
      {/* {laigitud} */}
      <br /><br />
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>} <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus > 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht