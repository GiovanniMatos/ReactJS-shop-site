// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalProduct from './ModalProduct';
import '../css/Product.css'

export default function Product({image, title, text, href}) {
  
  return (
    <div className="card">
      <Card style={{ width: '18rem', display: 'inline-flex' }}>
        <Card.Img variant="top" src={image} style={{height: "19rem"}} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <ModalProduct text="Ver Produto" href={href}/>
        </Card.Body>
      </Card>
    </div>
  );
}
