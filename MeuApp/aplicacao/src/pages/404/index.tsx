import { Link } from 'react-router-dom'

function NotFound(){
    return (
        <>
        <h1>Error 404</h1>
        <p>Página não encontrada</p>
        <Link to = '/'>Voltar para o Menu</Link>
        </>
    )
}

export default NotFound