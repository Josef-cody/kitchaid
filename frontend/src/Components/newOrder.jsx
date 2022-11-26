import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "./partials/footer";
import Nav from "./partials/nav";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/newOrder.css";

function NewOrder() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [order, setOrder] = useState({
    deliverDate: new Date(),
    ordersType: "",
    itemToOrder: "",
    remainInStock: "",
    unitRemain: "",
    toOrder: "",
    unitToOrder: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  order.deliverDate = date;

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("my_user_token");
    let decoded = jwt_decode(token);
    let userId = decoded.id;
    const url = `${process.env.REACT_APP_BE}/user/newOrder/${userId}`;

    axios
      .post(url, order, {
        headers: {
          Accept: "*/*",
          Content: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrder([res.data.order]);
        alert(res.data.message);
      });
    setOrder({
      ordersType: "",
      itemToOrder: "",
      remainInStock: "",
      unitRemain: "",
      toOrder: "",
      unitToOrder: "",
      comment: "",
    });
  };

  return (
    <>
      <div>
        <div className="appFrame m-auto">
          <form className="row align-items-center itemContainer m-auto">
            <div className="logo">
              <img src="imgsAndVideos/stocheck Logo.png" alt="logo" />
            </div>

            <div className="text-center fs-6">
              <span className="datum d-block m-auto">Leverans Datum</span>
              <input
                type="date"
                className="form-control m-auto mb-4 mt-4 stock"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* <div className="col-sm-12 stock ms-4 mt-3 mb-3 m-auto">
                        <input type="radio" name="ordersType" value="Gronsaker" onChange={handleChange} />
                        <span>&nbsp;Grönsaker &nbsp;&nbsp;&nbsp;</span>
                        <input type="radio" name="ordersType" value="Frukt" onChange={handleChange} />
                        <span>&nbsp;Frukt &nbsp;&nbsp;&nbsp;</span>
                        <input type="radio" name="ordersType" value="Mejeri" onChange={handleChange} />
                        <span htmlFor="Mejeri">&nbsp;Mejeri &nbsp;&nbsp;&nbsp;</span>
                        <input type="radio" name="ordersType" value="Fryst" onChange={handleChange} />
                        <span htmlFor="Fryst">&nbsp;Fryst &nbsp;&nbsp;&nbsp;</span>
                        <input type="radio" name="ordersType" value="Torr" onChange={handleChange} />
                        <span htmlFor="Torr">&nbsp;Torr &nbsp;&nbsp;&nbsp;</span>
                    </div> */}

            <input
              type="text"
              className="form-control m-auto mb-4 mt-4 stock"
              name="itemToOrder"
              value={order.itemToOrder}
              placeholder="  Varor att beställa"
              required
              onChange={handleChange}
            />
            {/* <div className="row m-auto">
                        <div className="input-group mt-4 mb-4">
                            <input type="number" min="0" id="remainInStock" className="form-control"
                                aria-label="Sizing input" aria-describedby="inputGroup-sizing-sm"
                                placeholder="Finns i lager" required name="remainInStock" value={order.remainInStock} onChange={handleChange} />
                        </div>
                        <div className="col-sm-12 mt-1 mb-4 stock" >
                            <input type="radio" id="Styck" name="unitRemain" value="Styck" onChange={handleChange} />
                            <label htmlFor="Styck">Styck &nbsp;</label>
                            <input type="radio" id="FPK" name="unitRemain" value="FPK" onChange={handleChange} />
                            <label htmlFor="FPK">FPK &nbsp;</label>
                            <input type="radio" id="Kilo" name="unitRemain" value="Kilo" onChange={handleChange} />
                            <label htmlFor="Kilo">Kilo &nbsp;</label>
                            <input type="radio" id="Pase" name="unitRemain" value="Pase" onChange={handleChange} />
                            <label htmlFor="Pase">Påse &nbsp;</label>
                            <input type="radio" id="Liter" name="unitRemain" value="Liter" onChange={handleChange} />
                            <label htmlFor="Liter">Liter</label>
                        </div>
                    </div> */}
            <div className="row m-auto">
              <div className="input-group mt-2 mb-4">
                <input
                  type="number"
                  className="form-control form-floating "
                  aria-label="Sizing input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Ska beställas"
                  required
                  name="toOrder"
                  value={order.toOrder}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mt-2 mb-3 stock">
                <input
                  type="radio"
                  id="Styck"
                  name="unitToOrder"
                  value="Styck"
                  onChange={handleChange}
                />
                <label htmlFor="Styck">Styck &nbsp;</label>
                <input
                  type="radio"
                  id="FPK"
                  name="unitToOrder"
                  value="FPK"
                  onChange={handleChange}
                />
                <label htmlFor="FPK">FPK &nbsp;</label>
                <input
                  type="radio"
                  id="Kilo"
                  name="unitToOrder"
                  value="Kilo"
                  onChange={handleChange}
                />
                <label htmlFor="Kilo">Kilo &nbsp;</label>
                <input
                  type="radio"
                  id="Pase"
                  name="unitToOrder"
                  value="Pase"
                  onChange={handleChange}
                />
                <label htmlFor="Pase">Påse &nbsp;</label>
                <input
                  type="radio"
                  id="Liter"
                  name="unitToOrder"
                  value="Liter"
                  onChange={handleChange}
                />
                <label htmlFor="Liter">Liter &nbsp;</label>
              </div>
            </div>
            <div className="input-group">
              <textarea
                className="form-control mb-5 comments"
                aria-label="With textarea"
                id="comment"
                placeholder="Kommentar"
                name="comment"
                value={order.comment}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="mainButton mb-4 p-1"
              type="submit"
              onClick={handleSubmit}
            >
              <span>Bekräffta</span>
            </button>
          </form>
          <button
            className="mainButton mb-4 p-1"
            onClick={() => navigate("/orderRecord")}
          >
            <span>Din Beställning</span>
          </button>
          <Nav />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewOrder;
