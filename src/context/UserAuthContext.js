import { useContext, createContext, useEffect, useState } from "react";

import {
  // AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // getAuth,
  // sendEmailVerification,
} from "firebase/auth";
import { auth, fs } from "../Config/Config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

// created userContext
const userContext = createContext();

export const useAuth = () => {
  return useContext(userContext);
};

const UserAuthProvider = ({ children }) => {
  // stores user verification status
  const [verifyEmail, setVerifyEmail] = useState();
  // stores current user object
  const [currentUser, setCurrentUser] = useState();
  // this fuction listens for changes in user authentication state, like when user logs in or logs out
  // and calls the callback function
  onAuthStateChanged(auth, (user) => {
    // console.log(user)
    // if user object exists i.e, if user is logged in
    if (user) {
      // set currentUser state to user object
      setCurrentUser(user);
      // set verifyEmail state to the emailVerified property of user object
      setVerifyEmail(user.emailVerified);
      console.log(verifyEmail + "in mail");
      console.log("u are logging");
    } else {
      // alert("u are logout")
    }
  });

  // profile information store
  // used to store profile information in firestore

  const profileInformation = (profile) => {
    return addDoc(collection(fs, "profile"), profile);
  };

  // Login Functinallity

  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout Functionllity
  const UserLogout = () => {
    return signOut(auth);
  };

  // sign User
  const SignUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const value = {
    SignUp,
    currentUser,
    UserLogin,
    UserLogout,
    profileInformation,
    verifyEmail,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthProvider;
