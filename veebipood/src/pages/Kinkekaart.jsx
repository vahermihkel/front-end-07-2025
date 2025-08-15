import { useRef, useState } from "react";

function Kinkekaart() {
  // let summa = 20;
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function sisesta(event) {
    console.log(event);
    if (event.key !== "Enter" && event.type !== "click") {
      return;
    }

    if (emailRef.current.value === "") {
      alert("Email ei saa olla tühi!");
      return; // lõpeta funktsioon, ära edasi mine
    }

    if (emailRef.current.value.includes("@") === false) {
      alert("Email ei saa olla @ märgita!");
      return; 
    }
    
    alert("Email lisatud!")
  }

  return (
    <div>
      {/* <button onClick={() => setSumma("blabla")}>UUENDA HTMLi ja KÄI JavaScript uuesti läbi</button> */}
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div>Kinkekaart {summa}€</div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{summa * kogus} €</div>

      <br /><br />

      <label>Email</label> <br />
      <input onKeyUp={(e) => sisesta(e)} ref={emailRef} type="text" /> <br />
      <button onClick={(e) => sisesta(e)}>Sisesta</button> <br />
    </div>
  )
}

export default Kinkekaart