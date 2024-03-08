import { Button, Container, Flex, Heading, Text, Textarea } from "@chakra-ui/react"
import React from "react"
import { ImHeadphones } from "react-icons/im";
import Footer from "../components/Footer/Footer";
export const Listening = () => {
  return (
    <div>
      <Container margin={'0'} bg={'#000000'} color={'#fff'} width={'100%'} maxWidth={'100%'} padding={'20px'}>
        <Flex align={'center'}>
          <ImHeadphones />
          <Text fontWeight={'bold'} fontSize={'20px'} marginLeft={'10px'}>Listening</Text>
          <Heading flex={'0.8'} fontSize={'20px'} textAlign={'center'}>
            Summerise Spoken Test
          </Heading>
        </Flex>
      </Container>
      <Container margin={'0'} width={'100%'} maxWidth={'100%'} padding={'50px 20px'}>
        ipsum dolor sit amet consectetur adipisicing elit. Praesentium at vel aperiam deleniti ut alias sit accusantium animi placeat provident sed rerum mollitia a fugit est harum, neque cumque nulla quaerat laboriosam veniam facilis. Aliquam rerum eligendi voluptatem id earum, modi dicta reprehenderit perspiciatis perferendis ut quo repudiandae, odio a!
      </Container>
      <Container margin={'0'} width={'100%'} maxWidth={'100%'} padding={'0 20px'}>
        <Text>#1 Technological Nature</Text>
      </Container>
      <Container width={'100%'} maxWidth={'100%'}>
        <Flex justify={'center'}>
          <audio controls>
            <source src='http://www.sousound.com/music/healing/healing_01.mp3' type='audio/mp3' />
          </audio>
        </Flex>
      </Container>
      <Container margin={'0'} width={'100%'} maxWidth={'100%'} padding={'50px 20px'}>
        <Textarea bg={'#ffffff'} size={'lg'} rows={5} border={'1px solid '} placeholder='Here is a sample placeholder' />
      </Container>
      <Container>
        <Flex gap={'10'} justify={'center'}>
          <Button size={'md'} bg={'#000000'} color={'#ffffff'}>Copy</Button>
          <Button size={'md'} bg={'#000000'} color={'#ffffff'}>Cut</Button>
          <Button size={'md'} bg={'#000000'} color={'#ffffff'}>Paste</Button>
        </Flex>
      </Container>
      <Footer/>
    </div>
  )
}