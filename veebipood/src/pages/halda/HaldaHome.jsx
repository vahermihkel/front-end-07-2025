import { Link } from "react-router-dom"

function HaldaHome() {
  return (
    <div>
      <br />
      <Link to="/halda-autod"><span className="link">Halda autod</span></Link>
      <Link to="/halda-esindused"><span className="link">Halda esindused</span></Link>
      <Link to="/halda-hinnad"><span className="link">Halda hinnad</span></Link>
      <Link to="/halda-kasutajad"><span className="link">Halda kasutajad</span></Link>
      <Link to="/halda-tootajad"><span className="link">Halda töötajad</span></Link>
      <Link to="/halda-tooted"><span className="link">Halda tooted</span></Link>
      <br /><br />
    </div>
  )
}

export default HaldaHome