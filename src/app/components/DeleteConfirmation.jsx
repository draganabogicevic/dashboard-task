import React from 'react'

import { usersService } from '../../service/userService'
import { useUserContext } from '../../context/userContext'

import {
  Box,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

const DeleteConfirmation = ({id, onClose}) => {
  const { deleteHandler } = useUserContext()
  const btnBg = useColorModeValue('#EDFDFD', '#2D3748')
  
  const handleDelete = async () => {
    try {
      await usersService.deleteUser(id)
    } catch (error) {
      
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleDelete()
    onClose()
    deleteHandler(id)
  }


  return (
    <Box
      w='80%'
      margin='auto'
      mt={12}
    >
      <Heading>Are you sure?</Heading>
      <Box
        w='60%'
        margin='auto'
        mt={12}
        pt={12}
      >     
        <Box d='flex' justifyContent='space-between' mt={6}>
          <Button type='submit' bg={btnBg} onClick={onSubmit}>Yes</Button>
          <Button bg={btnBg}>No</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DeleteConfirmation