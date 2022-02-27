import React, { Fragment } from 'react'

import ModalWrapper from './ModalWrapper'
import FormEditValue from './FormEditValue'
import DeleteConfirmation from './DeleteConfirmation'

import { Tr, Td, Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'

const TableRow = ({user}) => {
  const editBtnColor = useColorModeValue('#FEFCBF', '#A0AEC0')
  const deleteBtnColor = useColorModeValue('#F56565', '#63171B')
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
  <Fragment>
    <ModalWrapper 
      isOpen={isOpen} 
      onClose={onClose}
      blockScrollOnMount={false}
      color="okBlue"
      size={'2xl'}
    >
      <DeleteConfirmation id={user.id} onClose={onClose}/>
    </ModalWrapper>
    <Tr key={user.id}> 
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.username}</Td>
      <Td>{user.city}</Td>
      <Td>{user.email}</Td>
      <Td>
        <Button bg={editBtnColor} >EDIT</Button>
      </Td>
      <Td>
        <Button bg={deleteBtnColor} onClick={onOpen}>DELETE</Button>
      </Td>
    </Tr>
  </Fragment>    
  )
}

export default TableRow