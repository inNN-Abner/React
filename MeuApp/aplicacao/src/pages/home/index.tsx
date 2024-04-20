import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'

function Home(){
    return (
        <>
        <Navbar />
        <h1>Menu</h1>
        <hr />
        <p>Páginas para nevagação</p>

            <Link to = '/about'>Ir para Sobre Mim</Link><br />
            <Link to = '/components'>Ir para Formulário</Link><br />       
            <Link to = '/presentation'>Ir para Apresentação</Link><br />
            <Link to = '/tasks'>Ir para as Tarefas do projeto</Link><br />
            
        <span>Repositório</span>
        </>
    )
}

export default Home