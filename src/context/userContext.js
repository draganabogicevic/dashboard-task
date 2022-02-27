import React, { useContext } from 'react'

export const UserContext = React.createContext({
    users: [],
    userHandler: prop => {},
})

export const useUserContext = () => {
    const ctx = useContext(UserContext)
    return ctx
}