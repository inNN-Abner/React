import { ReactNode } from 'react';
import { Link } from 'react-router-dom'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  Link as ChakraLink,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';

import { GiHamburger } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Tooltip } from '@chakra-ui/react';

const Links = [
  { label: 'Sobre mim', href: './about' },
  { label: 'Formulário', href: './components' },
  { label: 'Apresentação', href: './presentation' },
  { label: 'Tarefas do projeto', href: './tasks' },
];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </ChakraLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <GiHamburger/> : <FaHamburger />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={'center'}>
            <Box>
              <Tooltip label="Menu" aria-label='A tooltip'>
              <ChakraLink as={Link} to='.././'> 
              <FaReact size={30} />
              </ChakraLink>
              </Tooltip>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.pinimg.com/originals/7c/46/74/7c467412624e64019d40e14d9557fe9e.jpg'
                  }
                />
              </MenuButton>
              
              <MenuList>
                <Text marginLeft='5' marginBottom='2'><strong>Bruce Wayne</strong></Text>
                <Text marginLeft='5'>Battinson@email.com</Text>
                <MenuDivider />
                <MenuItem marginLeft='2'>Link</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}