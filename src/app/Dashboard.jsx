import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './components/Loader'
import { useUserContext } from '../context/userContext'
import TableRow from './components/TableRow'

import { Table, Thead, Box, Tbody, Tr, Th, Button, useColorModeValue, Heading } from '@chakra-ui/react'

const Dashboard = () => {
  
  const { users, loading, error } = useUserContext()
  console.log(users)
  const stripColor = useColorModeValue('teal','#A0AEC0')
  const newUserBtnColor = useColorModeValue('#B2F5EA','#A0AEC0')

  if(loading) {
    return <Loader />
  }

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
        <TableRow user={u} key={u.id}/>  
      ))}
        
      </Tbody>  
    </Table>
    </Box>
  )
}

export default Dashboard

