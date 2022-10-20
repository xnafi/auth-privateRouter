import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/Firebase.init'

const auth = getAuth(app)

export const authContext = createContext()


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();


    // register with email and password
    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, createUserWithEmail)
    }
    // set userName 
    const setUserName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    // email verify
    const varifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)

    }
    // login with email
    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // login with Google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }




    // to get user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)

        });

        return () => {
            unsubscribe()
        }
    }, [])


    const values = { user, createUserWithEmail, signInWithGoogle, varifyEmail, setUserName, logOut, loginWithEmail, loading }
    return (
        <authContext.Provider value={values} >
            {children}
        </authContext.Provider>
    )
}

export default AuthContext