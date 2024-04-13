import { Link } from 'react-router-dom'

function Presentation(){
    return (
        <>
        <h1>Apresentação do projeto</h1>
        <hr />
        <p>Este projeto é um desenvolvimento do conteúdo do 4°semestre da FATEC</p>
        <hr />
        <p>Estamos desenvolvendo um sistema para a matéria de Programação WEB.</p>
        <p>O projeto está sendo desenvolvido em React, com TypeScript.</p>
        <Link to = '/'>Ir para o Menu</Link>
        </>
    )
}

export default Presentation