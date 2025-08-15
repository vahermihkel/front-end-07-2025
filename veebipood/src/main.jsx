import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "leaflet/dist/leaflet.css"
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

// let nimi = "Kaarel";
// nimi = "Pille";

// .bootstrap-button {background-color: "green"};
// index.css:.bootstrap-button {background-color: "#00704A"};

// Navigeerimiseks / URL vahetuseks:
// 1. npm i react-router-dom ---> installima sobilikud failid node_modules kausta
// 2. import { BrowserRouter } from "react-router-dom" ---> võtma node_modules kaustast võimekus
// 3. <BrowserRouter><App/><BrowserRouter/> ---> lisama võimekust App.jsx faili ümber
// 4. App.jsx failis URL / failide seosed  ---> millisel URL-l millist lehte näen

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 4 esimest päeva Indrekuga
// 5. E 14.07 - react-router-dom, useState algus
// 6. K 16.07 - useRef, funktsioonid, dünaamiline CSS klass, alamkomponendid
// 7. E 21.07 - Firebase, kalkulaator
// 8. K 23.07 - DISAINER
// 9. E 28.07 - arrays, tabel
//10. N 31.07 - kustutamine, lisamine, fail
//11. E 04.08 - objektid, kontrollid, toastify, kokkuarvutus, otsing
//12. K 06.08 - useParams (Yksiku leht), muutmine, localStorage
//13. K 13.08 - tõlge, kaardirakendus, emaili saatmine
//14. R 15.08 - 8.45 API päringud, Bootstrap
//15. T 19.08 - inglise keelne Webshop
//16. R 22.08
//17. T 26.08
//18. K 03.09 - ametlik lõpukuupäev