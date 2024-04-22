import { Box, Button, ButtonGroup, Container, Flex, Grid, Heading } from '@chakra-ui/react'

interface Props{
    task: String
}

function List({task}: Props){
    return (
    <Container maxW={'2xl'}>
    <Grid className = 'task'>
        <Flex alignItems='center' justifyContent='space-between' marginRight='5'>
        <Box padding='3'>
            <Heading size='md'>{task}</Heading>
        </Box>
        <ButtonGroup  gap='3' marginLeft='100'>
        <Button className='button-color' colorScheme=''>Pendente</Button>
        <Button className='button-color' colorScheme=''>Excluir</Button>
        </ButtonGroup>
        </Flex>
    </Grid>
    </Container>

    )
}

export default List