import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confog";
import axios from "axios";

export const AuthContext = createContext()
const auth=getAuth(app)
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut= ()=>{
        setLoading(true)
       return signOut(auth)
    }

    const userProfileUpdate=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

    // save user in mongoDb
    const saveUser=async user=>{
        const currentUser={
            email:user?.email,
        role:"student",
        status:'pending'
        }
        const {data} =await axios.put('http://localhost:6003/user',
            currentUser
        )
        return data
    }
   

    // onAuthStateChange
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                saveUser(currentUser)
                console.log(currentUser)
            }
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo={
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        userProfileUpdate,
        loading,
        setLoading,
        user
    }
    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    // Array of children.
    children: PropTypes.array,
  }
export default AuthProvider;