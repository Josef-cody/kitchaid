import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./css/index.css"
import { useNavigate } from 'react-router-dom'
import Footer from "./partials/footer"
import Nav from "./partials/nav"


const Home = () => {


  const navigate = useNavigate()

  return (
    <div>
      <div className="appFrame">
        <div className="logo m-auto mt-5 mb-5">
          <img src="imgsAndVideos/stocheck Logo.png" alt="logo" />
          <h4 className="text-center text-light"><p className="fs-6 mt-4">Välkommen</p></h4>
        </div>
        <button className="mainButton mb-4 mt-5 p-1"
          onClick={() => navigate("/newOrder")}>
          <span>Ny beställning</span>
        </button>
        <button className="mainButton mb-4 p-1"
          onClick={() => navigate("/orderRecord")}>
          <span>Din Beställning</span>
        </button>
        <button className="mainButton mb-4 p-1"
          onClick={() => navigate("/newStats")}>
          <span>Ny Lunch Statistik</span>
        </button>

        <button className="mainButton mb-5 p-1"
          onClick={() => navigate("/statsRecord")}>
          <span>Lunch Statistik</span>
        </button>


        <Nav />
      </div>
      <Footer />
    </div>

  )
}

export default Home