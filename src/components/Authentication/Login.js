'use client'

import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Image,
  Divider,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import logo from '../../logo-main.svg'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.100', 'gray.900')}>
      <Stack maxW={'lg md'} py={12}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg md'}
          w={'650px'}
          p={'30px 60px 60px 60px'}>
          <Stack align={'center'}>
            <Image
              src={logo}
              alt='Logo'
            />
          </Stack>
          <Divider borderColor={'#e9e9e9'} color={'black'} variant={'thick'} borderStyle={'solid'} borderWidth={'0.5px'} m={'30px 0'} orientation='horizontal' />
          <Stack align={'center'}>
            <Heading fontSize={'2xl'} textAlign={'center'}>
              Login
            </Heading>
          </Stack>
          <Stack spacing={8} mt={5}>
            <FormControl id="email" isRequired>
              <Input borderColor={'#969595'} p={'25px 20px'} type="email" placeholder='Your email id' textTransform={'capitalize'} />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input borderColor={'#969595'} p={'25px 20px'} type={showPassword ? 'text' : 'password'} placeholder='Your password' />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'center'}
              justify={'center'}>
              <Text textAlign={'center'} textDecoration={'underline'}>Did you forgot your password</Text>
            </Stack>
            <Stack spacing={10} pt={2}>
            <Button
      loadingText="Submitting"
      size="lg"
      bg={'black'}
      fontWeight={400}
      color={'white'}
      textTransform={'uppercase'}
      _hover={{
        bg: 'blue.500',
      }}
      onClick={handleLogin}>
      Login
    </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}