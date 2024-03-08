import { Container, Heading, Text, Button, Flex, Input } from "@chakra-ui/react"
import React from "react"
import Footer from "../components/Footer/Footer"
export const Reading = () => {
  return (
    <div>
      <Container margin={'0'} bg={'black'} color={'white'} width={'100%'} maxWidth={'100%'} padding={'10px'}>
        <Heading>Fill In the Blanks</Heading>
      </Container>
      <Container margin={'0'} width={'100%'} maxWidth={'100%'} padding={'50px 20px'}>
        <Text>
          In the text below some words are missing. Drag words from the box below to the
          appropriate place in the text. To undo an answer choice,
          drag the word back to the box below the text. Fill all the blanks to activate "Submit".
        </Text>
      </Container>
      <Container margin={'0'} width={'100%'} maxWidth={'100%'}>
        <Text>
          Although Botswana is rich in diamonds, it has high unemployment and
          stratified socioeconomic classes. In 1999, the nation &nbsp; <Input type="text" borderRadius={'5px'}  htmlSize={12} width='auto' bg={'#ffffff'} size='sm'/> &nbsp;first budget deficit in 16 years &nbsp;  <Input type="text" htmlSize={12} borderRadius={'5px'} width='auto' bg={'#ffffff'}  size='sm'/>  &nbsp;of a slump in the international diamond market. Yet Botswana
          one of the wealthiest and most stable countries &nbsp; <Input type="text" mt='2px' borderRadius={'5px'} mb='2px' htmlSize={12} width='auto'bg={'#ffffff'}  size='sm'/> &nbsp; on the African &nbsp; <Input type="text" borderRadius={'5px'} htmlSize={12} bg={'#ffffff'}  size='sm' width='auto'/>.
        </Text>
      </Container>
      <Container marginTop={'50px'}  width={'100%'}  maxWidth={'100%'}>
        <Flex gap={'10'} justify={'center'} border={'1px solid #000'} padding={'10px'} width={'60%'} margin={'0 auto'}>
          <Button size={'lg'} colorScheme="messenger">Because</Button>
          <Button size={'lg'} colorScheme="messenger">Enjoyed</Button>
          <Button size={'lg'} colorScheme="messenger">Endure</Button>
          <Button size={'lg'} colorScheme="messenger">Continent</Button>
          <Button size={'lg'} colorScheme="messenger">White</Button>
          <Button size={'lg'} colorScheme="messenger">Suffered</Button>
        </Flex>
      </Container>
      <Footer/>
    </div>
  )
}