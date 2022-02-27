import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  const footerBg = useColorModeValue('#EDFDFD', '#2D3748')
  return (
    <Box
      position='fixed'
      bottom='0px'
      w='100%'
      d='flex' 
      justifyContent='center'
      p={3}
      bg={footerBg}
    >
      Dashboard task
    </Box>

  )
}

export default Footer
