'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import logo from '../../logo-main.svg'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      // rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      // transition={'background 0.3s ease'}
      _hover={{
        // bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={'black'}
      color={'white'}
      py={10} marginTop={'1%'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '3fr 2fr 2fr 2fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src={logo} href="/" />
            </Box>
            <Text fontSize={'sm'}>Cras fermentum odio eu feugiat lide par naso tierra.
              Justo eget nada terra videa magna derita valies darta
              donna mare fermentum iaculis eu non diam phasellus.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About Us</ListHeader>
            <Box as="a" href={'#'}>
              Terms
            </Box>
            <Box as="a" href={'#'}>
              Our Story
            </Box>
            <Box as="a" href={'#'}>
              Refund Policies
            </Box>
            <Box as="a" href={'#'}>
              Sitemap
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>PTE</ListHeader>
            <Box as="a" href={'#'}>
              About PTE
            </Box>
            <Box as="a" href={'#'}>
              PTE Core
            </Box>
            <Box as="a" href={'#'}>
              Online Classes
            </Box>
            <Box as="a" href={'#'}>
              Mock Test
            </Box>
            <Box as="a" href={'#'}>
              Study Material
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>NAATI</ListHeader>
            <Box as="a" href={'#'}>
              Hindi Coaching
            </Box>
            <Box as="a" href={'#'}>
              Punjabi Coaching
            </Box>
            <Box as="a" href={'#'}>
              Urdu Coaching
            </Box>
            <Box as="a" href={'#'}>
              Nepali Coaching
            </Box>
            <Box as="a" href={'#'}>
              Study Material
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>PRACTICE MATERIAL</ListHeader>
            <Box as="a" href={'#'}>
              Reading
            </Box>
            <Box as="a" href={'#'}>
              Writing
            </Box>
            <Box as="a" href={'#'}>
              Listening
            </Box>
            <Box as="a" href={'#'}>
              Speaking
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Container maxW={'6xl'} bg={'white'} textAlign={'center'} color={'black'} py={18}>
        <Stack direction={'row'} spacing={2} justify={'center'}>
          <Text as="a">© Copyright</Text><Text as="a" fontWeight={800}>CLEAR PTE</Text><Text as="a">All Rights Reserved</Text>
        </Stack>
        <Stack direction={'row'} spacing={2} justify={'center'}>
        <Text>Designed by</Text> <Text color={'tomato'}>peopletechsoft</Text>
        </Stack>
      </Container>
    </Box>
  )
}