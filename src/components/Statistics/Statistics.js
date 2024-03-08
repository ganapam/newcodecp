// 'use client'

import { Flex, Text, Container, } from '@chakra-ui/react'
export default function Statistics() {
    return (
        <Flex
            w={'full'}
            h={'80vh'}
            backgroundImage={
                'url(https://clearpte.peopletechsoft.com/assets/img/bg-2.jpg)'
            }
            position={'relative'}
            _after={{
                bgGradient: "linear(180deg, rgba(6, 0, 11, 0.29) 70.65%, #06000B 100%)",
                width: "100%",
                height: "100%",
                position: "absolute",
                content: `""`,
                top: 0,
                left: 0
            }}
            mt={12}
            px={150}
            align={'center'}
            color={'white'}
            fontSize={{ base: 'sm', sm: 'lg' }}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <Container zIndex={1} textAlign={'center'}>
                <Text fontSize={'40px'} fontWeight={'800'}>50
                </Text>
                <Text fontSize={'20px'}>Practice Tests helps you gauge your performance for the actual test.
                </Text>

            </Container>
            <Container zIndex={1} textAlign={'center'}>
                <Text fontSize={'40px'} fontWeight={'800'}>80
                </Text>
                <Text>With the PTE Experts tips & strategies, PTE Tutorials records more than 80% success rate.
                </Text>

            </Container>
            <Container zIndex={1} textAlign={'center'}>
                <Text fontSize={'40px'} fontWeight={'800'}>1200
                </Text>
                <Text>With the exam memories and practice materials, you can practice with around 1200 questions
                </Text>

            </Container>
            <Container zIndex={1} textAlign={'center'}>
                <Text fontSize={'40px'} fontWeight={'800'}>100
                </Text>
                <Text>More than 100+ hours of practice with the practice materials made available
                </Text>

            </Container>
        </Flex>
    )
}