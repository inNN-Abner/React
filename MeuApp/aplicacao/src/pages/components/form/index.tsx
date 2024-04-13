import { Link } from 'react-router-dom'
import ButtonForm from '../button-form'
import InputForm from '../input-form'

function Form() {
    return (
    <>
    <h1> Entre em contato </h1>
    <hr/>
    <InputForm type='text' placeholder='Seu nome aqui' defaultValue='Nome e sobrenome'/>
    <p/>
    <InputForm type='email' placeholder='Seu email aqui' defaultValue='teste@email.com'/>
    <p/>
    <InputForm type='text' placeholder='Seu telefone aqui' defaultValue='(19) 9 9788-5432'/>
    <hr/>
    <ButtonForm type='button' label='E N V I A R'/>  

    <hr />
    <Link to = '/'>Ir para o Menu</Link>
    </>
    )
}

export default Form