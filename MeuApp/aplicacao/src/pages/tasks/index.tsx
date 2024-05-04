import Layout from '../../components/layout'
import List from '../../components/list'
import TopList from '../../components/task-layout'
import { useEffect, useState } from "react"
import { Task } from "../../interfaces/tasks"


function Tasks(){

    const [tasks, setTasks] = useState <Task[]> ([])

    function loadList(){
        return [
            {id: 1, title: "Tarefa I", concluded: false},
            {id: 2, title: "Tarefa II", concluded: true},
        ]
    }

    useEffect(() => {
        const tasks = loadList()
        setTasks(tasks)
    }, [])

    function deleteTask(id: number){
        const updateTasks = tasks.filter((task) => task.id !== id)
        setTasks(updateTasks)
    }

    return (
        <div>
        <Layout>
            <TopList tasks={tasks} setTasks={setTasks}/>
            {
                tasks.map((task) => (
                    <List
                    key = {task.id}
                    deleteTask = {deleteTask}
                    idTask={task.id}
                    task = {task.title}></List>
                ))
            }
        </Layout>
        </div>
    )
}

export default Tasks