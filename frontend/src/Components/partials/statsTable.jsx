import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

function StatsTable(props) {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    

    return <>
        <Button variant="success" onClick={handleShow} style={{fontSize:"13px",width:"200px",textAlign:"left"}}>
            {props.dishName}({props.guestAmount}Gäster)
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.dishName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Rättens namn</th>
                            <th scope="col">Ätande matsal</th>
                            <th scope="col">Enhet</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th  scope="row"></th>
                            <td>{props.dishName}</td>
                            <td>{props.guestAmount}</td>
                            <td>Pers</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Huvudvaror</th>
                            <th scope="col">{props.mainIngredient}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>inköpta</td>
                            <td>{props.purchasedMainIngredient}</td>
                            <td>{props.unitMain}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Användt</td>
                            <td>{props.usedMainIngredient}</td>
                            <td>{props.unitMain}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Kvar</td>
                            <td>{props.remainInStockMain}</td>
                            <td>{props.unitMain}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Gryta/Soppa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Lagad mängd</td>
                            <td>{props.stewSoup}</td>
                            <td>Liter</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Kvar</td>
                            <td>{props.stewSoupLeft}</td>
                            <td>Liter</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Tillbehör</th>
                            <th scope="col">{props.sideIngredient}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>inköpta</td>
                            <td>{props.purchasedSide}</td>
                            <td>{props.unitSide}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Användt</td>
                            <td>{props.usedSideIngredient}</td>
                            <td>{props.unitSide}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Kvar</td>
                            <td>{props.remainInStockSide}</td>
                            <td>{props.unitSide}</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Kommentar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td colSpan="3">{props.comment}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => navigate("/statsUpdate")}>
                    Updatera
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>



    </>
}

export default StatsTable