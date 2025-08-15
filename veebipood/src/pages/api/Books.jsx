import { useEffect, useRef, useState } from "react";

function Books() {
  const [tooted, setTooted] = useState([]);
  const [page, setPage] = useState(1);
  const otsingRef = useRef();
  const [otsitu, setOtsitu] = useState("react");

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/" + otsitu + "?page=" + page)
      .then(res => res.json())
      .then(json => setTooted(json.books))
  }, [page, otsitu]);

  function otsi() {
    if (otsingRef.current.value.length < 2) {
      return;
    }
    setOtsitu(otsingRef.current.value);
  }

  return (
    <div>
      <label>Otsi</label>
      <input onChange={otsi} ref={otsingRef} type="text" />

      <button onClick={() => setPage(page - 1)}>Previous</button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Index</th>
            <th>Toote nimi</th>
            <th>Toote hind</th>
            <th>Toote aktiivne</th>
            <th>Toote pilt</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) => 
            <tr key={toode.isbn13}>
              <td>{toode.isbn13}.</td>
              <td>{index}</td>
              <td>{toode.title}</td>
              <td>{toode.price}</td>
              <td>{toode.subtitle}</td>
              <td><img className="pilt" src={toode.image} alt="" /></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Books