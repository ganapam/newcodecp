// 'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { FiBookOpen } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";

const courseList = [
  {
    id:1,
    title: 'Vocab List',
    text: 'Unfamiliar words added to "My Vocab List" while practicing.',
    icon: <BsBriefcase color={'black'} fontSize={'30px'}/>,
  },
  {
    id:2,
    title: 'WFD Vocab',
    text: 'Vocabulary used in Write From Dictation questions (except the extremely easy ones).',
   icon: <BsCardChecklist color={'black'} fontSize={'30px'}/>,
  },
  {
    id:3,
    title: 'Listening FIB Vocab',
    text: 'Vocabulary used in Listening FIB questions (except the extremely easy ones).',
   icon: <BsHeadset color={'black'} fontSize={'30px'}/>,
  },
  {
    id:4,
    title: 'Reading FIB Basic Vocab',
    text: 'The most frequently-used basic vocabulary from FIB (Reading) and FIB (Reading & Writing) questions. Suitable for score targets between 30.',
   icon: <FiBookOpen color={'black'} fontSize={'30px'}/>,
  },
  {
    id:5,
    title: 'PTE Basic Vocab',
    text: 'The basic PTE vocabularies that you must know if you are targeting at a score',
   icon: <BsBrightnessHigh color={'black'} fontSize={'30px'}/>,
  },
  {
    id:6,
    title: 'PTE Advanced Vocab',
    text: 'The advanced PTE vocabularies that you need to know if you are targeting at a Kore between 70-85. It is recommended for all text taxS',
   icon: <BsCalendar4Week color={'black'} fontSize={'30px'}/>,
  }
]

export default function Courses() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>---------- Popular Courses ----------</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Necessitatibus elus consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
          {courseList.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                {feature.icon}
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}