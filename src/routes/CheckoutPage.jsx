import fone from '../assets/maxphoneindex.png'
import '../css/CheckoutPage.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import ModalCartao from '../components/ModalCartao'


export default function CheckoutPage(){
    const [quantidade, setQuantidade] = useState(1)
    const  [email, setEmail] = useState()
    const  [nome, setNome] = useState()
    const [cpf, setCpf] = useState()

    const valor = 35;
    const total = quantidade * valor;
    
    function defineQuantidade(event){
        setQuantidade(event.target.value)
    }
    function defineEmail(event){
        setEmail(event.target.value)
    }
    function defineNome(event){
        setNome(event.target.value)
    }
    function defineCPF(event){
        setCpf(event.target.value)
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
                        <Form.Control type="email" placeholder='Email para receber atualizações do envio' required onChange={defineEmail}/>
                        <Form.Control type="name" placeholder='Seu nome completo' required onChange={defineNome}/>
                        <Form.Control 
                        type="number_format" 
                        placeholder='seu cpf no formato: xxx.xxx.xxx-xx' 
                        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                        onChange={defineCPF} />
                        <Form.Control type='number' placeholder='Quantidade' onChange={defineQuantidade} defaultValue={quantidade} required/>
                        <p><b>Formas de Pagamento: </b></p>
                        <ModalCartao total={total} email={email} nome={nome} cpf={cpf} />
                    </Form>
                    <p id="valor"><b>Valor:</b> <span id="spanValor">R${total}</span></p>
                </div>
            </main>
        </>
    )
}