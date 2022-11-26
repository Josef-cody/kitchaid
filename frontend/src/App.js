import './App.css';
import Home from './Components/Home';
import Login  from './Components/Login';
import Register from './Components/Register';
import NewOrder from './Components/newOrder'
import NewStats from './Components/newStats'
import OrderRecord from "./Components/partials/orderRecord"
import StatsRecord from "./Components/partials/statsRecord"
import StatsUpdate from "./Components/partials/statsUpdate"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import data from './ContextApi';
import { useState } from 'react';

function App() {
  const [userdata,setUserData] = useState({})
  
  return (
    <div className="App">
      <data.Provider value={{userdata,setUserData}}>
        <Router>
          <Routes>
            <Route path="/" element={userdata && userdata._id ? <Home /> : <Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newOrder" element={<NewOrder />} />
            <Route path="/newStats" element={<NewStats />} />
            <Route path="/orderRecord" element={<OrderRecord />} />
            <Route path="/statsRecord" element={<StatsRecord />} />
            <Route path="/statsUpdate" element={<StatsUpdate />} />
          </Routes>
        </Router>
      </data.Provider>

    </div>
  );
}

export default App;
