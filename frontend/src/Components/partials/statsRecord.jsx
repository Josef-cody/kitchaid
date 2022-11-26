import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "react-router-dom";
import StatsTable from "./statsTable";
import Footer from "./footer";
import Nav from "./nav";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";

function StatsRecord() {
  const [stats, setStats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(stats);
  useEffect(() => {
    let token = localStorage.getItem("my_user_token");
    let decoded = jwt_decode(token);
    let userId = decoded.id;
    const url = `${process.env.REACT_APP_BE}/user/newStats/${userId}`;

    axios
      .get(url, {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setStats(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const searchArray = stats.filter((dish) =>
    dish.dishName.toLowerCase().includes(searchTerm)
  );

  function CreateRecord(stats) {
    return (
      <StatsTable
        key={stats._id}
        _id={stats._id}
        dishName={stats.dishName}
        guestAmount={stats.guestAmount}
        purchasedMainIngredient={stats.purchasedMainIngredient}
        mainIngredient={stats.mainIngredient}
        usedMainIngredient={stats.usedMainIngredient}
        remainInStockMain={stats.remainInStockMain}
        unitMain={stats.unitMain}
        stewSoup={stats.stewSoup}
        stewSoupAmount={stats.stewSoupAmount}
        stewSoupLeft={stats.stewSoupLeft}
        purchasedSide={stats.purchasedSide}
        usedSideIngredient={stats.usedSideIngredient}
        sideIngredient={stats.sideIngredient}
        remainInStockSide={stats.remainInStockSide}
        unitSide={stats.unitSide}
        comment={stats.comment}
      />
    );
  }

  return (
    <>
      <div className="appFrame">
        <div className="logo">
          <img src="imgsAndVideos/stocheck Logo.png" alt="logo" />
        </div>
        <div className="input-group-sm stock mb-3 m-auto">
          <input
            type="search"
            className="form-control m-auto mb-4 mt-4 searchWindow"
            placeholder="Sök maträtten"
            aria-label="Sök..."
            aria-describedby="button-addon2"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        <div>
          <ul className="searchResult">
            <li>{searchArray.map(CreateRecord)}</li>
          </ul>
        </div>

        <Nav />
      </div>
      <Footer />
    </>
  );
}

export default StatsRecord;
