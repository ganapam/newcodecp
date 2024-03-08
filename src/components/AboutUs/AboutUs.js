// 'use client'

import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { FiBookOpen } from "react-icons/fi";
import { BsPen } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa6";

const Card = ({ heading, description, icon, href, ...rest }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'70%'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={8}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            {...rest}
            >
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default function AboutUs() {
    return (
        <div>
        <Box p={4}>
            <Flex justify="center" align="center" w={'full'}>
                <Stack spacing={3} as={Container} maxW={'1xl'}>
                    <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                        About Us
                    </Text>
                    <Heading fontSize={{ base: '1xl', sm: '4xl' }} fontWeight={'bold'}>
                        The world's fastest growing English test
                    </Heading>
                    <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'sm' }}>
                        PTE Academic is accepted by over 3,500 universities and colleges globally for study, by Australia and New Zealand for works and migration visas, and for professional registration...
                    </Text>
                    <Button color={'white'} backgroundColor={'black'} w="30%" size={'sm'} >
                        Read More <BiRightArrowAlt size="20px" />
                    </Button>
                </Stack>

                <Container maxW={'4xl'} mt={12}>
                    <Flex flexWrap="wrap" gridGap={6} justify="center" align="center">
                        <Card
                            heading={'Reading'}
                            icon={<FiBookOpen color={'black'} fontSize={'30px'}/>}
                            description={'Explore our detailed guide to the Reading section of PTE Academic. including videos, tips, and the best strategies for answering each question.'}
                            href={'#'}
                        />
                        <Card
                            mt={'-50px'}
                            heading={'Writing'}
                            icon={<BsPen color={'black'} fontSize={'30px'}/>}
                            description={'The Personal Introduction is an opportunity for you to get familiar with PTE test technology and to help you prepare for your speaking and listening questions.'}
                            href={'#'}
                        />
                        <Card
                            heading={'Speaking'}
                            icon={<IoMicOutline color={'black'} fontSize={'30px'}/>}
                            description={'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti'}
                            href={'#'}
                        />
                        <Card
                             mt={'-50px'}
                            heading={'Listening'}
                            icon={<FaHeadphones color={'black'} fontSize={'30px'}/>}
                            description={'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda'}
                            href={'#'}
                        />
                    </Flex>
                </Container>
            </Flex>
        </Box>
        </div>
    )
}