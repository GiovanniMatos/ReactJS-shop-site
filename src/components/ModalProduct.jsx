import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "../css/ModalCartao.css"

export default function ModalProduct({textButton, href, tituloDescricao, paragrafoDescricao, imagemFone}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" href={href} onClick={handleShow} id="botaoModal">
        {textButton}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Maxphone P9</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="wrapperModal">
            <img id="imagemModal" src={imagemFone} />
            <div className="descricao">
              <h2>{tituloDescricao}</h2>
              <p>{paragrafoDescricao}</p>
              <p id="formaPagamento"><b>Forma de Pagamento:</b></p>
              <button>Pix</button>
              <button>Cartão de Crédito</button>
              <button>Bitcoin</button>
              <button>Ethereum</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
