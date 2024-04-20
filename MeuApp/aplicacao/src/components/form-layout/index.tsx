import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function FormLayout(): JSX.Element {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Formulário para contato
        </Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Nome</FormLabel>
          <Input
            placeholder="Nome completo"
            _placeholder={{ color: 'gray.500' }}
            type="string"
          />

        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="digite-seu@email.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>

        <FormControl id="phone" isRequired>
          <FormLabel>Telefone</FormLabel>
          <Input
            placeholder="(00) 0 0000-0000"
            _placeholder={{ color: 'gray.500' }}
            type="string"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Enviar formulário
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}