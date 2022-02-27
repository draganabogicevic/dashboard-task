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
   
    console.log(users)
    const userHandler = (newUser) => {
        setUsers(prevUsers => {
            return [...prevUsers, newUser]
        })
    }

    const usersContextValue = {
        users,
        userHandler,
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