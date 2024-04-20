import { Link } from 'react-router-dom'
import ButtonForm from '../../components/button-form'
import InputForm from '../../components/input-form'

function Form() {
    return (
    <>
    <h1> Entre em contato </h1>
    <hr/>
    <InputForm type='text' placeholder='Seu nome aqui' defaultValue=''/>
    <p/>
    <InputForm type='email' placeholder='Seu email aqui' defaultValue=''/>
    <p/>
    <InputForm type='text' placeholder='Seu telefone aqui' defaultValue=''/>
    <hr/>
    <ButtonForm type='button' label='E N V I A R'/>  

    <hr />
    <Link to = '/'>Ir para o Menu</Link>
    </>
    )
}

export default Form