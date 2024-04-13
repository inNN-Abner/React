//Import das rotas
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Form from './pages/components/form'
import Presentation from './pages/presentation'
import Tasks from './pages/tasks'
import NotFound from './pages/404'

//Constante para as rotas
const router = createBrowserRouter([
    {path: '/', element: <Home />, errorElement: <NotFound />},
    {path: '/about', element: <About />, errorElement: <NotFound />},
    {path: '/components', element: <Form />, errorElement: <NotFound />},
    {path: '/presentation', element: <Presentation />, errorElement: <NotFound />},
    {path: '/tasks', element: <Tasks />, errorElement: <NotFound />}

])

export default router