import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalPay({text}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Form.Control type="email" placeholder="Seu email" />
            <Form.Control type="name" placeholder='Seu nome completo' />
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
      </Modal>
    </>
  );
}
