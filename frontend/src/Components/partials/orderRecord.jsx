import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import "react-router-dom";
import OrderRecordTable from './orderRecordTable';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { group } from 'group-items'
import Footer from "./footer";
import Nav from "./nav";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';

function StatsRecord() {

    //pop-up button and modal.............
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    //get order record from backend..............
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("my_user_token")
        let decoded = jwt_decode(token);
        let userId = decoded.id;
        const url = `${process.env.REACT_APP_BE}/user/newOrder/${userId}`;

        axios.get(url, {
            headers: {
                Accept:"*/*",
                Authorization: `Bearer ${token}`
            }
        }).then((data) => {
            setOrders(data.data);

        }).catch((err) => console.log(err));
    }, [])


    //sorting data by Date......
    const ordersValues = Object.values(Orders)
    const groupByDate = group(ordersValues)
        .by('deliverDate')
        .asEntries({
            keyName: "index",
            itemsName: "items"
        });

    const groupByDateValue = Object.values(groupByDate)

    return <>

        <div className="appFrame">
            <div className="logo">
                <img src="imgsAndVideos/stocheck Logo.png" alt="logo" />
            </div>
            <div className="searchResult">
            {groupByDateValue.map((orderBydate, index) => {
                const dDate = orderBydate.index.slice(0, 10);
                return <Button type='button' variant="success" onClick={handleShow} key={index}>
                    {dDate}
                </Button>
            })}</div>
            <Modal show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Beställning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {groupByDateValue.map((orderBydate, index) => {
                        return <div key={index}>{orderBydate.items.map((order, index) => {
                            const dDate = orderBydate.index.slice(0, 10);
                            return <OrderRecordTable
                                key={index}
                                deliverDate={dDate}
                                ordersType={order.ordersType}
                                itemToOrder={order.itemToOrder}
                                remainInStock={order.remainInStock}
                                unitRemain={order.unitRemain}
                                toOrder={order.toOrder}
                                unitToOrder={order.unitToOrder}
                                comment={order.comment}
                            />
                        })}</div>

                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Nav />
        </div>
        <Footer />
    </>
}

export default StatsRecord