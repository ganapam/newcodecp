// 'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function Welcome() {
    return (
        <Flex
            w={'full'}
            h={'100vh'}
            backgroundImage={
                'url(https://clearpte.peopletechsoft.com/assets/img/bg-1.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Welcome to CLEAR PTE
                    </Text>
                    <Text
                        color={'white'}
                        fontSize={'18px'}>
                        We CLEARPTE.com is a student practice platform for PTE Academic. The portal offers FREE practice & comes with a 'state of the art Artificial Intelligence Scoring with highly accurate results
                    </Text>
                    <Stack direction={'row'}>
                        <InputGroup size='md'>
                            <Input
                                bg={'white'}
                                pr='5rem'
                                type={'email'}
                                placeholder='Enter email address'
                            />
                            <InputRightElement width='4.5rem' right={2}>
                                <Button h='1.75rem' size='sm' bg='gray' color={'white'}>
                                    Sign up
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    )
}