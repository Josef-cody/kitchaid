import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "./partials/footer";
import Nav from "./partials/nav";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/newStats.css";

function NewStats() {
  const [stats, setStats] = useState({
    dishName: "",
    guestAmount: "",
    purchasedMainIngredient: "",
    mainIngredient: "",
    usedMainIngredient: "",
    remainInStockMain: "",
    unitMain: "",
    stewSoup: "",
    stewSoupUnit: "Liter",
    stewSoupLeft: "",
    purchasedSide: "",
    usedSideIngredient: "",
    sideIngredient: "",
    remainInStockSide: "",
    unitSide: "",
    comment: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    localStorage.setItem("name",value);
    setStats((preve) => {
      return {
        ...preve,
        [name]: value,
      };
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("my_user_token");
    let decoded = jwt_decode(token);
    let userId = decoded.id;
    const url = `${process.env.REACT_APP_BE}/user/newStats/${userId}`;

    axios
      .post(url, stats, {
        headers: {
          Accept: "*/*",
          Content: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStats([res.data.stats]);
        alert(res.data.message);
        console.log(res.data.stats);
      });
    setStats({
      dishName: "",
      guestAmount: "",
      purchasedMainIngredient: "",
      mainIngredient: "",
      usedMainIngredient: "",
      remainInStockMain: "",
      unitMain: "",
      stewSoup: "",
      stewSoupUnit: "Liter",
      stewSoupLeft: "",
      purchasedSide: "",
      usedSideIngredient: "",
      sideIngredient: "",
      remainInStockSide: "",
      unitSide: "",
      comment: "",
    });
  };

  return (
    <>
      <div>
        <div className="appFrame">
          <form className="row align-items-center itemContainer">
            <div className="logo">
              <img src="imgsAndVideos/stocheck Logo.png" alt="logo" />
            </div>

            <div className="col-12-sm mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="dishName"
                value={stats.dishName}
                placeholder="Rättens namn"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12-sm mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="guestAmount"
                value={stats.guestAmount}
                placeholder="Ätande matsal (nummer)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12-sm mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="mainIngredient"
                value={stats.mainIngredient}
                placeholder="Huvudvaror"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="purchasedMainIngredient"
                value={stats.purchasedMainIngredient}
                placeholder="Inköpta huvudvaror (nummer)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="usedMainIngredient"
                value={stats.usedMainIngredient}
                placeholder="Användt huvudvaror (nummer)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="remainInStockMain"
                value={stats.remainInStockMain}
                placeholder="Kvar (nummer)"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-12 stock" style={{ marginLeft: "48px" }}>
              <input
                type="radio"
                id="Styck"
                name="unitMain"
                value="Styck"
                onChange={handleChange}
                required
              />
              <label htmlFor="Styck">Styck &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="FPK"
                name="unitMain"
                value="FPK"
                onChange={handleChange}
                required
              />
              <label htmlFor="FPK">FPK &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="Kilo"
                name="unitMain"
                value="Kilo"
                onChange={handleChange}
                required
              />
              <label htmlFor="Kilo">Kilo &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="Pase"
                name="unitMain"
                value="Pase"
                onChange={handleChange}
                required
              />
              <label htmlFor="Pase">Påse &nbsp;&nbsp;&nbsp;</label>
            </div>
            <div className="col-12 mx-auto item">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control mb-3"
                  name="stewSoup"
                  value={stats.stewSoup}
                  placeholder="Gryta/Soppa lagad mängd (nummer)"
                  onChange={handleChange}
                />
                <div className="input-group-text">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="stewSoupUnit"
                    value="Liter"
                    checked={true}
                  />
                  <span class="input-group border-0">Liter</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="stewSoupLeft"
                  value={stats.stewSoupLeft}
                  placeholder="Gryta/Soppa över mängd (nummer)"
                  onChange={handleChange}
                />
                <div className="input-group-text">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="stewSoupLeft"
                    value="Liter"
                    checked={true}
                  />
                  <span class="input-group border-0">Liter</span>
                </div>
              </div>
            </div>
            <div className="col-12-sm mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="sideIngredient"
                value={stats.sideIngredient}
                placeholder="Tillbehör"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="purchasedSide"
                value={stats.purchasedSide}
                placeholder="Inköpta tillbehörs varor (nummer)"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="usedSideIngredient"
                value={stats.usedSideIngredient}
                placeholder="Användt tillbehörs varor (nummer)"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 mx-auto item">
              <label
                className="visually-hidden"
                htmlFor="autoSizingInput"
              ></label>
              <input
                type="text"
                className="form-control"
                name="remainInStockSide"
                value={stats.remainInStockSide}
                placeholder="Kvar (nummer)"
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-12 stock" style={{ marginLeft: "48px" }}>
              <input
                type="radio"
                id="Styck"
                name="unitSide"
                value="Styck"
                onChange={handleChange}
              />
              <label htmlFor="Styck">Styck &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="FPK"
                name="unitSide"
                value="FPK"
                onChange={handleChange}
              />
              <label htmlFor="FPK">FPK &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="Kilo"
                name="unitSide"
                value="Kilo"
                onChange={handleChange}
              />
              <label htmlFor="Kilo">Kilo &nbsp;&nbsp;&nbsp;</label>
              <input
                type="radio"
                id="Pase"
                name="unitSide"
                value="Pase"
                onChange={handleChange}
              />
              <label htmlFor="Pase">Påse &nbsp;&nbsp;&nbsp;</label>
            </div>

            <div
              className="input-group col-12 mx-auto item"
              style={{ margin: "10px auto", maxWidth: "350px" }}
            >
              <textarea
                id="comment"
                className="form-control"
                aria-label="With textarea"
                name="comment"
                value={stats.comment}
                placeholder="Kommentar"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="mainButton mb-4 p-1"
              onClick={handleSubmit}
            >
              <span>Bekräffta</span>
            </button>
          </form>
          <button
            className="mainButton mb-5 p-1"
            onClick={() => navigate("/statsRecord")}
          >
            <span>Lunch Statistik</span>
          </button>
          <Nav />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewStats;
