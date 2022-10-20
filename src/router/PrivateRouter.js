import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()

    if (loading) {
        return <>loading....</>
    }
    if (user && user.uid) {
        return children
    } else {
        return <Navigate to='/login' state={{ from : location }} replace />

    }
}

export default PrivateRouter