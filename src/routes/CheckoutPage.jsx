import fone from '../assets/maxphoneindex.png'
import '../css/CheckoutPage.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'


export default function CheckoutPage(){

    const [quantidade, setQuantidade] = useState(1)
    const valor = 35
    
    function defineQuantidade(event){
        setQuantidade(event.target.value)
    }

    return (
        <>
            <main>
                <article>
                    <img src={fone} />
                </article>
                <div className='textsCheckout'>
                    <h2>Maxphone P9</h2>
                    <p>Descrição aqui</p>
                    <Form className='form'>
                        <Form.Control type="email" placeholder='Email para receber atualizações do envio' required/>
                        <Form.Control type="name" placeholder='Seu nome completo' required/>
                        <Form.Control type="number_format" placeholder='Seu CPF' required/>
                        <Form.Control type='number' placeholder='Quantidade' defaultValue="1" onChange={defineQuantidade} required/> 
                    </Form>
                    <p id="valor"><b>Valor:</b> <span id="spanValor">R${quantidade * valor}</span></p>
                </div>
            </main>
        </>
    )
}