import { Link } from 'react-router-dom'

function Tasks(){
    return (
        <>
        <h1>Tarefas do projeto</h1>
        <hr />
        <ul>
            <li>Tarefa I</li>
            <li>Tarefa II</li>
            <li>Tarefa III</li>
        </ul>
        <hr />
        <Link to = '/'>Ir para o Menu</Link>
        </>
    )
}

export default Tasks