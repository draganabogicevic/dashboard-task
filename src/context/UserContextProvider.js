import React, { useState, useEffect } from 'react'

import { useDataFetch } from '../hooks/useDataFetch'
import { usersService } from '../service/userService'
import { UserContext } from './userContext'

const UserContextProvider = props => {
  
  const {
    data,
    loading,
    error,
  } = useDataFetch(usersService.fetchUsers())
  const [users, setUsers] = useState(data)
    useEffect (() => {
      setUsers(data)
    }, [data])
   
   
    const userHandler = (newUser) => {
        setUsers(prevUsers => {
            return [...prevUsers, newUser]
        })
    }

    const deleteHandler = (id) => {
      setUsers(users.filter(u => u.id !== id))
  }
    const usersContextValue = {
        users,
        loading,
        error,
        userHandler,
        deleteHandler,
    }

    return (
        <UserContext.Provider
            // @ts-ignore
            value={usersContextValue}
        >
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider