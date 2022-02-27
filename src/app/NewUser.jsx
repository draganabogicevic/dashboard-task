import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { usersService } from '../service/userService'
import { useUserContext } from '../context/userContext'

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'

const NewUser = () => {
  const { users, userHandler } = useUserContext()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const btnBg = useColorModeValue('#EDFDFD', '#2D3748')
  let navigate = useNavigate();

  const onNameChange = newName => {
    setName(newName)
  }

  const onEmailChange = newEmail => {
    setEmail(newEmail)
  }


  const validateInputs = () => {
    const nameFormat = /^[a-zA-Z]+ [a-zA-Z]+$/
    const mailFormat = /\S+@\S+\.\S+/
    if(!name) {
      setNameError('This field is required')
    } else if (!name.match(nameFormat)) {
      setNameError('Please add valid name')
    } else {
      setNameError('')
    }
    if(!email) {
      setEmailError('This field is required')
    } else if (!mailFormat.test(email)) {
      setEmailError('Please add valid email')
    } else {
      setEmailError('')
    }
  }
  
  const postData = {
    id: users.length + 1,
    name: name,
    email: email,
    city: '',
    username: '',
  }

  const submitCallBack = async () => {
    try {
      await usersService.submitUser(postData)
    } catch (error) {
      
    }
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    validateInputs()
    submitCallBack()
    userHandler(postData)
    navigate('/')
  }

  const onCancel = () => {
    setName('')
    setEmail('')
    navigate('/')
  }

  return (
    <Box
      w='80%'
      margin='auto'
      mt={12}
    >
      <Heading>Form</Heading>
      <Box
        w='60%'
        margin='auto'
        mt={12}
        pt={12}
      >
        <FormControl isRequired>
          <Box d='flex' justifyContent='space-between'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input 
              id='name'
              value={name}
              onChange={e => onNameChange(e.target.value)}
              type='text' 
              placeholder='Name'  
              isRequired
            />
          </Box>
          <Text>{nameError}</Text>
        </FormControl>
        <FormControl isRequired>
          <Box d='flex' justifyContent='space-between' mt={12}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
              id='email' 
              value={email}
              onChange={e => onEmailChange(e.target.value)}
              type='text'
              placeholder='Email'  
              isRequired
            />
          </Box>
          <Text>{emailError}</Text>
        </FormControl>
        <Box d='flex' justifyContent='end' mt={6}>
          <Button mr={3} bg={btnBg} onClick={onCancel}>Cancel</Button>
          <Button type='submit' bg={btnBg} onClick={onSubmit}>Submit</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NewUser