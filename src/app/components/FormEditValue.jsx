import React from 'react'

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

const FormEditValue = () => {
  const btnBg = useColorModeValue('#EDFDFD', '#2D3748')
  return (
    <Box
      w='80%'
      margin='auto'
      mt={12}
    >
      <Heading>Edit Info</Heading>
      <Box
        w='60%'
        margin='auto'
        mt={12}
        pt={12}
      >
        <FormControl >
          <Box d='flex' justifyContent='space-between'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input 
              id='name'
              type='text' 
              placeholder='Name'  
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box d='flex' justifyContent='space-between' mt={12}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
              id='email' 
              type='text'
              placeholder='Email'  
            />
          </Box>
        </FormControl>
        <FormControl >
          <Box d='flex' justifyContent='space-between' mt={12}>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input 
              id='username' 
              type='text'
              placeholder='Username'  
            />
          </Box>
        </FormControl>
        <FormControl >
          <Box d='flex' justifyContent='space-between' mt={12}>
            <FormLabel htmlFor='city'>City</FormLabel>
            <Input 
              id='city' 
              type='text'
              placeholder='City'  
            />
          </Box>
        </FormControl>
        <Box d='flex' justifyContent='end' mt={6}>
          <Button type='submit' bg={btnBg}>Submit</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FormEditValue