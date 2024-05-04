import { Box, Button, ButtonGroup, Container, Flex, Grid, Heading } from '@chakra-ui/react'

interface Props{
    idTask: number
    task: String
    deleteTask(id: number): void
}

function List({idTask, task, deleteTask}: Props){
    return (
    <Container maxW={'2xl'}>
    <Grid className = 'task'>
        <Flex alignItems='center' justifyContent='space-between' marginRight='5'>
        <Box padding='3'>
            <Heading size='md'>{task}</Heading>
        </Box>
        <ButtonGroup  gap='3' marginLeft='100'>

        <Button className='button-blue' colorScheme=''>Pendente</Button>

        <Button onClick={() => deleteTask(idTask)} className='button-red' colorScheme=''>Excluir</Button>

        </ButtonGroup>
        </Flex>
    </Grid>
    </Container>

    )
}

export default List