import { Button, Input } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Task } from '../../interfaces/tasks'
import { useEffect, useRef, useState } from 'react'

interface FormTaskProps{
    tasks: Task[]
    setTasks(tasks:Task[]): void
}

function TopList({tasks, setTasks}: FormTaskProps) {

    const [taskName, setTaskName] = useState('')

    function addTasK(){
        if (tasks.length > 0){
            const lastId = tasks[tasks.length -1].id
            const newTask = {
                id: lastId + 1,
                title: taskName,
                concluded: false
            }

            setTasks([...tasks, newTask])
        }
    }

    const inputTask = useRef(null)
    useEffect(() => {
        if (inputTask.current) inputTask.current.focus()
    }, [])

    return (
        <>
    <div id = 'task-layouts'>
        <div className='task_layout'>
            <h1 className=''>Lista de tarefas</h1>
              <hr />
            <h2 className='sub-title'>Inserir nova tarefa</h2>

            <span className='task_align'>
            <Input className='distance' placeholder='Digite o título da tarefa' 
                ref = {inputTask}
                value = {taskName}
                onChange = {(event) => setTaskName(event.target.value)}/>

            <Checkbox className='distance' colorScheme='blue' defaultChecked>
                Realizada?
            </Checkbox>

            <Button onClick={addTasK} className='button-blue' colorScheme=''>Inserir</Button>
         
            </span>
        </div>
        
    </div>
    <hr />
    </>
    )
}

export default TopList