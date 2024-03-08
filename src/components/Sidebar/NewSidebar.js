import React from 'react'
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Image
} from '@chakra-ui/react'
import {
  FiHome,
  FiMenu,
} from 'react-icons/fi'
import logo from '../../logo-main.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { ImHeadphones, ImPencil } from "react-icons/im";
import { BiUserVoice } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiFileTextLine } from "react-icons/ri";
import Navbar from '../Navbar/Navbar'

const LinkItems = [
  { name: 'Home', icon: FiHome, navLink: '/' },
  { name: 'Speaking', icon: BiUserVoice, navLink: '/pte-speaking' },
  { name: 'Listening', icon: ImHeadphones, navLink: '/pte-listening' },
  { name: 'Reading', icon: FaBookOpenReader, navLink: '/pte-reading' },
  { name: 'Writing', icon: ImPencil, navLink: '/pte-writing' },
  { name: 'RW', icon: RiFileTextLine, navLink: '/rw' },
  { name: 'RE', icon: RiFileTextLine, navLink: '/re' },
]

export const NewSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let location = useLocation();

  const marginPadding = () => {
    const margin = 
    (location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login') ? 60 : 0
    const padding = 
    (location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login') ? '100px 60px 0px 60px' : '60px 0'
    return { margin, padding }
  }

  return (
    <div>
      <Navbar />
      <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        {(location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login') &&
          <>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size="full">
              <DrawerContent>
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'none', md: 'none' }} onOpen={onOpen} />
          </>
        }
        <Box p={{ base: 0, md: marginPadding().padding }} ml={{ base: 0, md: marginPadding().margin }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  )
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('black', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      color={useColorModeValue('white')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      top='85px'
      left={{ base: 0, md: '50px' }}
      borderRadius='20px'
      pl={'25px'}
      {...rest}
      className='sidebar-links'>
      {LinkItems.map((link) => (
        <NavItem linkUrl={link.navLink} key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ linkUrl, icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={linkUrl}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image src={logo} href="/"/>
    </Flex>
  )
}
