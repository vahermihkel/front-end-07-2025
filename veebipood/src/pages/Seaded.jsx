import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState(localStorage.getItem("keel"));

  function muudaKeelEE() {
    setKeel("et");
    localStorage.setItem("keel", "et");
  }

  function muudaKeelEN() {
    setKeel("en");
    localStorage.setItem("keel", "en");
  }

  function muudaKeelES() {
    setKeel("es");
    localStorage.setItem("keel", "es");
  }

  function muudaKeelRU() {
    setKeel("ru");
    localStorage.setItem("keel", "ru");
  }

  return (
    <div>
      <button className={keel === "et" ? "keel-aktiivne" : undefined} onClick={muudaKeelEE}>Eesti</button>
      <button className={keel === "en" ? "keel-aktiivne" : undefined} onClick={muudaKeelEN}>English</button>
      <button className={keel === "es" ? "keel-aktiivne" : undefined} onClick={muudaKeelES}>Espanol</button>
      <button className={keel === "ru" ? "keel-aktiivne" : undefined} onClick={muudaKeelRU}>Pycckuj</button>
      <div>Hetkel aktiivse keele lühend: {keel}</div>

      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La pagina esta en espanol</div>}
      {keel === "ru" && <div>........</div>}
      {keel !== "et" && <div><i>Translations other than Estonian are not ready</i></div>}

    </div>
  )
}

export default Seaded