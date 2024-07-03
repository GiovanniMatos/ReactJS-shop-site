// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalPay from './ModalPay';
import '../css/Product.css'

export default function Product({image, title, text}) {
  
  return (
    <div className="card">
      <Card style={{ width: '18rem', display: 'inline-flex' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <ModalPay text="Comprar"/>
        </Card.Body>
      </Card>
    </div>
  );
}
