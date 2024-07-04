import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../css/Modal.css"

export default function ModalPay({text}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [numberCard, setNumberCard] = useState("0000 0000 0000 0000")
  const [name, setName] = useState("Seu nome completo")
  const [date, setDate] = useState("00/00")
  const [cvv, setCvv] = useState("123")

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pagar com Cartão de Crédito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control type="number_format" placeholder="Número do Cartão" onChange={(e)=>setNumberCard(e.target.value)} />
            <Form.Control type="name" placeholder='Seu nome completo' onChange={(e)=>setName(e.target.value)} />
            <Form.Control type="number_format" placeholder='Data de vencimento' onChange={(e)=>setDate(e.target.value)} />
            <Form.Control type="number_format" placeholder='CVV' onChange={(e)=>setCvv(e.target.value)} />
            <Form.Control 
            type="number_format" 
            placeholder='seu cpf no formato: xxx.xxx.xxx-xx' 
            pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
            <Button variant="primary" type="submit">
                Enviar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
          <div className="creditCard">
            <p>{numberCard}<br/>
            {name}<br/>
            <span>{date}</span>
            {cvv}
            </p>
          </div>
      </Modal>
    </>
  );
}
