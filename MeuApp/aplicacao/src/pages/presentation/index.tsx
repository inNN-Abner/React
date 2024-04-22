import Layout from "../../components/layout"
import TextPage from "../../components/text-page"

function Presentation(){
    return (
    <div>
    <Layout>
        <TextPage
            title='Apresentação do projeto'
            subtitle='Este projeto é um desenvolvimento do conteúdo do 4°semestre da FATEC'
            text={[
            'Estamos desenvolvendo um sistema para a matéria de Programação WEB.',
            'O projeto está sendo desenvolvido em React, com TypeScript e Chakra UI.']}
        >
        </TextPage>
    </Layout>
    </div>
    )
}

export default Presentation