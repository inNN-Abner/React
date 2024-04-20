import ButtonForm from '../../components/button-form'
import InputForm from '../../components/input-form'
import Layout from '../../components/layout'

function Form() {
    return (
    <div>
    <Layout>
        
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
    </Layout>
    </div>
    )
}

export default Form