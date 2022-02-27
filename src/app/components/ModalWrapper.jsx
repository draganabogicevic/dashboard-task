import React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


const ModalWrapper = ({children, ...props}) => {
  
  return (
      <Modal {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default ModalWrapper