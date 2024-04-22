import { Button, Input } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'

function TopList() {
    return (
        <>
    <div id = 'task-layouts'>
        <div className='task_layout'>
            <h1 className='title'>Lista de tarefas</h1>
              <hr />
            <h2 className='sub-title'>Inserir nova tarefa</h2>

            <span className='task_align'>
            <Input className='distance' placeholder='Digite o título da tarefa' />

            <Checkbox className='distance' colorScheme='blue' defaultChecked>
                Realizada?
            </Checkbox>

            <Button className='button-color' colorScheme=''>Inserir</Button>
         
            </span>
        </div>
        
    </div>
    <hr />
    </>
    )
}

export default TopList