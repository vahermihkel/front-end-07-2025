import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import TavaKalkulaator from "../components/TavaKalkulaator"

function Kalkulaator() {
  return (
    <div>
      <TavaKalkulaator />

      <LaenuKalkulaator />

      <MaksimaalneKalkulaator />
    </div>
  )
}

export default Kalkulaator