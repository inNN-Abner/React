import Layout from '../../components/layout'
import TextPage from '../../components/text-page'

function About(){
    return (
    <div>
    <Layout>
        <TextPage 
            title='Sobre mim'
            subtitle='Hello World!'
            text={[
            'Sou o Abner, tenho 19 anos, estudo na FATEC-Indaiatuba, estou no 4° semestre e estou noivo.',
            'Estou trabalhando na área de TI, atuando como QA em uma empresa que possui um software para RH.',
            'Este trabalho é um desenvolvimento da faculdade. Estamos trabalhando com React e Chakra UI e por enquanto está bem divertido.']}
        >            
        </TextPage>
    </Layout>
    </div>
    )
}

export default About