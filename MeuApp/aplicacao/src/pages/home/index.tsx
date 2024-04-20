import { Link } from 'react-router-dom'
import Layout from '../../components/layout'

function Home() {
    return (
    <div>
    <Layout>
        <h1>Menu</h1>
        <hr />
        <p>Páginas para nevagação</p>

         <Link to = '/about'>Ir para Sobre Mim</Link><br />
         <Link to = '/components'>Ir para Formulário</Link><br />       
         <Link to = '/presentation'>Ir para Apresentação</Link><br />
         <Link to = '/tasks'>Ir para as Tarefas do projeto</Link><br />

    </Layout>
    </div>
    )
}

export default Home