import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';

  import { ReactNode } from 'react';
  import { TiSocialLinkedin } from "react-icons/ti";
  import { BsMicrosoftTeams } from "react-icons/bs";
  import { AiFillGithub } from "react-icons/ai";
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
    target: string
    rel: string
  }) => {
    return (
      <chakra.button
        target={'_blank'} rel='noopener noreferrer'
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6x1'}
          py={3}
          direction={{ base: 'column', md: 'row' }}
          spacing={0}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <div id = 'footer_alignment'>
            <Text textAlign='left'>© Abner Fernandes Rocha <br />2024 - FATEC - Análise e Desenvolvimento de Sistemas - 4°Semestre</Text>
          </div>
          <Stack direction={'row'} spacing={5}>
            
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/abner-fernandes-rocha/'} target={'_blank'} rel='noopener noreferrer'>
                <TiSocialLinkedin />
            </SocialButton>
            <SocialButton label={'Teams'} href={'https://teams.microsoft.com/'} target={'_blank'} rel='noopener noreferrer'>
                <BsMicrosoftTeams />
            </SocialButton>
            <SocialButton label={'GitHub'} href={'https://www.github.com/inNN-Abner/React/'} target={'_blank'} rel='noopener noreferrer'>
                <AiFillGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }