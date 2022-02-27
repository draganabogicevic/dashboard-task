import React from 'react'
import { Text, Box, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ToggleThemeButton from './elements/ToggleThemeButton'

const navItems = [
  { href: '/', title: 'Dashboard' },
  { href: '/newuser', title: 'NewUser' },
]


const Header = () => {
  const headerBg = useColorModeValue('#EDFDFD', '#2D3748')
  return (
      <Box 
        d='flex' 
        justifyContent='end'
        p={3}
        bg={headerBg}
        w='100%'
      >
        <Box d='flex' alignItems='center'>
          {navItems.map((item, index) => (
          <Link to={item.href} key={`${item.title}_${index}`}>
            <Text
              mr='20px'
              fontSize={['lg', 'lg', 'xl', 'xl']}
              _hover={{color: '#00A3C4'}}
            >
              {item.title}
            </Text>
          </Link>
        ))}
        </Box>
        <ToggleThemeButton d={['none', 'none', 'flex', 'flex']} />
      </Box>
  )
}

export default Header
