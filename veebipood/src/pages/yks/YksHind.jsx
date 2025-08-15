import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
          // <Route path='/hind/:index' element={ <YksHind /> } />
  const {index} = useParams();
  const leitud = hinnadFailist[index];

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.number}</div>
      <div>{leitud.sonana}</div>
    </div>
  )
}

export default YksHind