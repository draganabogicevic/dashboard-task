import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './components/Loader'
import { useUserContext } from '../context/userContext'

import { Table, Thead, Box, Tbody, Tr, Th, Td, Button, useColorModeValue, Heading } from '@chakra-ui/react'

const Dashboard = () => {
  
  const { users } = useUserContext()
  console.log(users)
  const stripColor = useColorModeValue('teal','#A0AEC0')
  const editBtnColor = useColorModeValue('#FEFCBF', '#A0AEC0')
  const deleteBtnColor = useColorModeValue('#F56565', '#63171B')
  const newUserBtnColor = useColorModeValue('#B2F5EA','#A0AEC0')

  // if(loading) {
  //   return <Loader />
  // }


  return (
    <Box m={12}>
      <Box d='flex' justifyContent='space-between' mb={5}>
        <Heading>User list</Heading>
        <Link to='/newuser'>
          <Button bg={newUserBtnColor}>Add new user</Button>
        </Link>
      </Box>
    <Table variant="striped" colorScheme={stripColor}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>NAME</Th>
          <Th>USERNAME</Th>
          <Th>CITY</Th>
          <Th>EMAIL</Th>
        </Tr>
      </Thead>
      <Tbody>
        
        {users.map((u) => (
        <Tr key={u.id}> 
          <Td>{u.id}</Td>
          <Td>{u.name}</Td>
          <Td>{u.username}</Td>
          <Td>{u.city}</Td>
          <Td>{u.email}</Td>
          <Td>
            <Link to='/newuser'>
              <Button bg={editBtnColor}>EDIT</Button>
            </Link>  
          </Td>
          <Td>
            <Button bg={deleteBtnColor}>DELETE</Button>
          </Td>
        </Tr>  
      ))}
        
      </Tbody>  
    </Table>
    </Box>
  )
}

export default Dashboard

