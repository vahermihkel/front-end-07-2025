import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  //         <Route path='/esindus/:pood' element={ <YksEsindus /> } />
  const {pood} = useParams();
  const leitud = esindusedFailist.find(esindus => esindus.keskus === pood);

  if (leitud === undefined) {
    return <div>Keskust ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.keskus}</div>
      <div>{leitud.aadress}</div>
      <div>{leitud.tel}</div>
    </div>
  )
}

export default YksEsindus