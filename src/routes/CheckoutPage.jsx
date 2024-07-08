import fone from '../assets/maxphoneindex.png'
import '../css/CheckoutPage.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import ModalCartao from '../components/ModalCartao'


export default function CheckoutPage({email, nome, cpf, quant}){

    const [quantidade, setQuantidade] = useState(1)
    const valor = 35;
    const total = quantidade * valor;
    
    function defineQuantidade(event){
        setQuantidade(event.target.value)
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <>
            <main>
                <article>
                    <img src={fone} />
                </article>
                <div className='textsCheckout'>
                    <h2>Maxphone P9</h2>
                    <p>Descrição aqui</p>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
                        <Form.Control type="email" placeholder='Email para receber atualizações do envio' defaultValue={email} required/>
                        <Form.Control type="name" placeholder='Seu nome completo' defaultValue={nome} required/>
                        <Form.Control 
                        type="number_format" 
                        placeholder='seu cpf no formato: xxx.xxx.xxx-xx' 
                        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" />
                        <Form.Control type='number' placeholder='Quantidade' defaultValue={quant} onChange={defineQuantidade} required/>
                        <ModalCartao total={total}/>
                    </Form>
                    <p id="valor"><b>Valor:</b> <span id="spanValor">R${total}</span></p>
                </div>
            </main>
        </>
    )
}