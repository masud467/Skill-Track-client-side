import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.confog";
import axios from "axios";
import  { axiosPublic } from "../hooks/useAxiosPublic";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = async() => {
    setLoading(true);
    await axiosPublic.get('/logout', {
        withCredentials: true,
      })
    return signOut(auth);
  };

  const userProfileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Get token from server
  const getToken = async (email) => {
    const { data } = await axiosPublic.post(
      "/jwt",
      { email },
      { withCredentials: true }
    );
    return data;
  };

  // save user in mongoDb

  

  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      image: user?.photoURL,
      name: user?.displayName,
      role: "student",
      status: "pending",
     
    };
    const { data } = await axios.put("https://skill-track-for-server.vercel.app/user", currentUser);
    return data;
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        getToken(currentUser.email);
        saveUser(currentUser);
        console.log(currentUser);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [user]);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    userProfileUpdate,
    loading,
    setLoading,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
};
export default AuthProvider;
