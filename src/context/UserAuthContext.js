import { useContext, createContext, useEffect, useState } from "react";

import {
  // AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // getAuth,
  // sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth, fs, storage } from "../Config/Config";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { ref, byteUpload, uploadBytes, getDownloadURL } from "firebase/storage";

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
      console.log(verifyEmail + " in mail");
      console.log("u are logging");
    } else {
      setCurrentUser(null);
    }
  });

  // profile information store
  // used to store profile information in firestore

  const ProfileInformation = (profile) => {
    console.log("storing");
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
  const SignUp = async (email, password, FullName) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(res.user, {
        displayName: FullName,
      });
    });
  };
  // storage

  // upload
  const UploadAvatar = async (file, currentUser, setLoading) => {
    setLoading(true);
    const fileRef = ref(storage, currentUser.uid + ".png");
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    await updateProfile(currentUser, {
      photoURL,
    });
    setLoading(false);
    console.log("photo urL ", currentUser.photoURL);
    console.log("snapshot ", snapshot);
    alert("uploaded file");
  };
  const UpdateName = async (currentUser, userName, setLoading) => {
    setLoading(true);
    updateProfile(currentUser, {
      displayName: userName,
    })
      .then(() => {
        alert("user name changed");
      })
      .catch((error) => {
        console.log("error updating name ", error);
      });
  };
  const value = {
    SignUp,
    currentUser,
    UserLogin,
    UserLogout,
    ProfileInformation,
    verifyEmail,
    UploadAvatar,
    UpdateName,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthProvider;
