import Layout from '../../components/layout'
import List from '../../components/list'
import TopList from '../../components/task-layout'

function Tasks(){
    return (
    <div>
    <Layout>
        <TopList />
        <List task='Tarefa I'/>
        <List task='Tarefa II'/>
        <List task='Tarefa III'/>
    </Layout>
    </div>
    )
}

export default Tasks