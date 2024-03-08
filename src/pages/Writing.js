import React from 'react';
import { ImPencil } from "react-icons/im";
import { Box, Flex, Heading, Text, Textarea, useColorModeValue } from "@chakra-ui/react"
import Footer from '../components/Footer/Footer';
export const Writing = () => {
  return (
    <div>
    <Box w={'100%'} pt={{ base: '100px', md: 0, lg: 0 }}>
      <Flex bg={useColorModeValue('black', 'black.900')} flexDirection={'row'} p={'20px'} align={'center'}>
        <ImPencil color={'white'} />
        <Text ml={'15px'} fontSize={'xl'} fontWeight={'800'} color={'white'}>Writing</Text>
        <Heading fontSize={'20px'} color={'white'} flex={'0.8'} textAlign={'center'}>Write Essay</Heading>
      </Flex>
      <Box my={8} px={'30px'}>
        <Text>
          ipsum dolor sit amet consectetur adipisicing elit. Praesentium at vel aperiam deleniti ut alias sit accusantium animi placeat provident sed rerum mollitia a fugit est harum, neque cumque nulla quaerat laboriosam veniam facilis. Aliquam rerum eligendi voluptatem id earum, modi dicta reprehenderit perspiciatis perferendis ut quo repudiandae, odio a!
        </Text>
      </Box>
      <Box mt={{ base: 0, sm: '10px', md: '60px' }} px={{ base: 0, sm: '10px', md: '30px' }}>
        <Text fontWeight={'700'}>#1 Limitations Of Education</Text>
      </Box>
      <Box mt={{ sm: '10px', md: '30px' }} px={{ base: '10px', md: 0, lg: 0 }} >
        <Textarea
          rows={8}
          bg={useColorModeValue('white', 'gray.900')}
          placeholder='Type here'
          size={'lg'}
          border={'1px solid #000'}
          borderRadius={0}
        />
      </Box>
    </Box >
    <Footer/>
    </div>
  )
}