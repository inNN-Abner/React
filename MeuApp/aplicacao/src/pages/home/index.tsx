import { Link } from 'react-router-dom'
import Icone from '/src/images/github.png'

function Home(){
    return (
        <>
        <nav id = 'sidebar'>
            <div id="sidebar_content">
                <div id = 'title-info'>
                <h1>Menu</h1>
                <hr />
                <p>Páginas para nevagação</p>
                </div>

                <ul id = 'side_items'>
                    <li className = 'side-item active'> 
                        <i className = 'icon'>
                <Link to = '/about'><span className = 'item-descripton'>Ir para Sobre Mim</span></Link><br />
                        </i>
                    </li>

                    <li className = 'side-item'> 
                        <i className = 'icon'>
                <Link to = '/components'><span className = 'item-descripton'>Ir para Formulário</span></Link><br />
                        </i>
                    </li>

                    <li className = 'side-item'> 
                        <i className = 'icon'>
                <Link to = '/presentation'><span className = 'item-descripton'>Ir para Apresentação</span></Link><br />
                        </i>
                    </li>

                    <li className = 'side-item'> 
                        <i className = 'icon'>
                <Link to = '/tasks'><span className = 'item-descripton'>Ir para as Tarefas do projeto</span></Link><br />
                        </i>
                    </li>
                </ul>      
            </div>    

            <div id = 'repository'>
                <button id = 'github-btn'>
                    <i className = 'imagem'><img src = {Icone} alt='Ícone do GitHub' title = 'Logo do Github' /></i>
                        <span className = 'item-description'>
                            Repositório
                        </span>
                </button>
            </div>
        </nav>
        </>
    )
}

export default Home