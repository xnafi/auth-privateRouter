import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/Firebase.init'

const auth = getAuth(app)

export const authContext = createContext()


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();


    // register with email and password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password, createUserWithEmail)
    }
    // set userName 
    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    // email verify
    const varifyEmail = () => {
        return sendEmailVerification(auth.currentUser)

    }
    // login with Google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // signOut
    const logOut = () => {
        return signOut(auth)
    }




    // to get user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unsubscribe()
        }
    }, [])


    const values = { user, createUserWithEmail, signInWithGoogle, varifyEmail, setUserName, logOut }
    return (
        <authContext.Provider value={values} >
            {children}
        </authContext.Provider>
    )
}

export default AuthContext