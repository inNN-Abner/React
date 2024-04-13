import { Link } from 'react-router-dom'

function About(){
    return (
        <>
        <h1>Sobre mim</h1>
        <hr />
        <p>Hello world!</p>
        <p>Sou o Abner, tenho 19 anos, estudo na FATEC-Indaiatuba, estou no 4° semestre e estou noivo.</p>
        <p>Estou trabalhando na área de TI, atuando como QA em uma empresa que possui um software para RH.</p>
        <p>Este trabalho é um desenvolvimento da faculdade. Estamos trabalhando com React e por enquanto está bem divertido.</p>
        <hr />
        <Link to = '/'>Ir para o Menu</Link>
        </>
    )
}

export default About