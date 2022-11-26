import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Calculator from "./calculator"

function Nav() {
  const navigate = useNavigate()

  //===== calculator pop-up ======
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //==================================
  const logout = () => {
    localStorage.setItem('my_user_token', null);
    navigate('/')
  }




  return <>
    <nav className="nav">
      <div>
        <form onClick={() => navigate("/Home")}>
          <button><i className="fa-solid fa-house glow"></i></button>
        </form>
      </div>
      <div>
        <form >
          <button onClick={() => navigate("/newOrder")}><i className="fa-solid fa-basket-shopping glow"></i></button>
        </form>
      </div>
      <div>
        <form >
          <button onClick={() => navigate("/newStats")}><i className="fa-solid fa-circle-plus glow"></i></button>
        </form>
      </div>
      <div>
        <form>
          <button onClick={() => navigate("/todoList")}><i className="fa-solid fa-list glow"></i></button>
        </form>
      </div>
      <div>
        <Button variant="light" onClick={handleShow}>
          <i className="fa-solid fa-calculator glow"></i>
        </Button>

        <Modal
        size="sm"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Räcknare</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Calculator/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
   
      </div>
      <div>
        <form>
          <button onClick={logout}><i className='fa-solid fa-right-from-bracket glow'></i></button>
        </form>
      </div>
    </nav>
  </>
}

export default Nav;