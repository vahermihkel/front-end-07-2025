import { useEffect, useState } from "react";

function Products1() {
  // https://fakestoreapi.com/products
  const [tooted, setTooted] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
            <th>Toote reiting</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) => 
            <tr key={toode.title}>
              <td>{toode.id}.</td>
              <td>{index}</td>
              <td>{toode.title}</td>
              <td>{toode.price}</td>
              <td>{toode.category}</td>
              <td><img className="pilt" src={toode.image} alt="" /></td>
              <td>{toode.rating.rate} / {toode.rating.count}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Products1