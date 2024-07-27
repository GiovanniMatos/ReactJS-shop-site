
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import "../css/ModalCartao.css"

export default function ModalProduct({textButton, href}) {
  return (
    <>
      <Button variant="primary" href={href} id="botaoModal">
        {textButton}
      </Button>
    </>
  );
}
