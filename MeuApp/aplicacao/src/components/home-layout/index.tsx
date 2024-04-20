import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button
} from '@chakra-ui/react';

export default function HomeLayout() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Atividade em{' '}
          <Text as={'span'} color={'blue.400'}>
            React
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'2xl'}>
        React é uma biblioteca JavaScript de código aberto, mantida pelo Facebook, que é amplamente utilizada para construir interfaces de usuário (UI) dinâmicas e interativas.
        <br />Desde seu lançamento em 2013, React se tornou uma das ferramentas mais populares para o desenvolvimento front-end, devido à sua eficiência, flexibilidade e reutilização de componentes.        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}>
            React
          </Button>
          <Button rounded={'full'} px={6}>
            Templates
          </Button>
        </Stack>
        <Flex w={'full'}>
          <BatmanSVG/>
        </Flex>
      </Stack>
    </Container>
  );
}

export const BatmanSVG = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="320"
      height="196"
      fill="#000000"
    >
    </svg>
    
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="320" height="196">
  <g className = "batman_logo" transform = "translate(5,5)">  
    <g className = "background_shield">    
        <ellipse cx = "150" cy = "93" ry="93" rx = "150.5" stroke="#000000" stroke-width="9" fill = "var(--chakra-colors-blue-400)"></ellipse>                
    </g>            
    <g className = "bat_symbol">                
        <path stroke-width = "1" stroke = "#000000" fill = "#000000" d = "M150, 30 L140, 30 L132, 19 C 134, 100 67, 83 102, 20 C0,70 0, 100   70, 156 C 38 125 81 105, 107 145 C 115 127.6 140 127.6 149.5 169 L150, 30 z">
        </path>
    </g>
    <g className = "bat_symbol_flipped" transform = "scale(-1, 1) translate(-299, 0)">
        <path stroke-width = "1" stroke = "#000000" fill = "#000000" d = "M150, 30 L140, 30 L132, 19 C 134, 100 67, 83 102, 20 C0,70 0, 100   70, 156 C 38 125 81 105, 107 145 C 115 127.6 140 127.6 149.5, 169 L150, 30 z">
        </path>
    </g>
  </g>
</svg>
</div>
);