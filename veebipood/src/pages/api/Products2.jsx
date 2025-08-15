import { useEffect, useState } from "react";

function Products2() {
  const [tooted, setTooted] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(json => setTooted(json))
  }, []);

  return (
    <div>
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
            <tr key={toode.title}>
              <td>{toode.id}.</td>
              <td>{index}</td>
              <td>{toode.title}</td>
              <td>{toode.price}</td>
              <td>{toode.category.name}</td>
              <td><img className="pilt" src={toode.images} alt="" /></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Products2