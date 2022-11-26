import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function OrderRecordTable(props) {

    const [line, setLine] = useState(false)
    const handleClick = () => {
        setLine(current => !current);
      }


    return <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">L.Datum</th>
                    <th scope="col">Benämning</th>
                    <th scope="col">Beställ</th>
                    <th scope="col">Kommentar</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{
                    textDecoration: line ? 'line-through' : ''
                }}
                    onClick={handleClick}>
                    <th scope="row"></th>
                    <td>{props.deliverDate}</td>
                    <td>{props.itemToOrder}</td>
                    <td>{props.toOrder} ({props.unitToOrder})</td>
                    <td>{props.comment}</td>
                </tr>
            </tbody>
        </table>

    </>
}

export default OrderRecordTable