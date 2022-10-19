import React, { createContext, useState } from 'react'

export const authContext = createContext()


const AuthContext = ({ children }) => {
    // const [user, setUser] = useState(null)


    const name = { name: 'forhad' }
    const values = { name }
    return (
        <authContext.Provider value={values} >
            {children}
        </authContext.Provider>
    )
}

export default AuthContext