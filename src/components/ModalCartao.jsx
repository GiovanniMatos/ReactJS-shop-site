import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../css/ModalCartao.css"

export default function ModalCartao({total, nome, email, cpf}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [numberCard, setNumberCard] = useState("0000 0000 0000 0000")
  const [name, setName] = useState("Seu nome completo")
  const [date, setDate] = useState("00/00")
  const [cvv, setCvv] = useState("123")
  const nomeNoCheckout = [nome]
  const emailNoCheckout = [email]
  const cpfNoCheckout = [cpf]
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Cartão de Crédito
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pagar com Cartão de Crédito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Dados do pagador:</h5>
          <p>{nome}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <Form >
            <Form.Control type="number_format" placeholder="Número do Cartão" onChange={(e)=>setNumberCard(e.target.value)} />
            <Form.Control type="name" placeholder='Seu nome completo' defaultValue={nome} />
            <Form.Control type="number_format" placeholder='Data de vencimento' onChange={(e)=>setDate(e.target.value)} />
            <Form.Control type="number_format" placeholder='CVV' onChange={(e)=>setCvv(e.target.value)} />
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
          <h4>Valor total: <span id="spanValor">R${total}</span></h4>
          <div className="creditCard">
            <div className="chip"></div>
            <p>{numberCard}<br/>
            {nome}<br/>
            <span>{date}</span>
            {cvv}
            </p>
          </div>
      </Modal>
    </>
  );
}
