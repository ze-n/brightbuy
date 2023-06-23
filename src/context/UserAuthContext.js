import { useContext, createContext, useState } from "react";

import {
  // AuthErrorCodes,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  // getAuth,
  sendEmailVerification,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import { auth, fs, storage } from "../Config/Config";
import {
  // addDoc,
  // collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

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
  const [currentUserUid, setCurrentUserUid] = useState();
  // this fuction listens for changes in user authentication state, like when user logs in or logs out
  // and calls the callback function

  onAuthStateChanged(auth, (user) => {
    // console.log(user)
    // if user object exists i.e, if user is logged in
    if (user) {
      // set currentUser state to user object
      setCurrentUser(user);
      setCurrentUserUid(user.uid);
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

  // const docRef = null;

  // this method is used to store data of new users inside SignUp method
  async function storeUserData(userId, userData) {
    // referring to users collection by using user uid
    const userRef = doc(fs, "users", userId);
    // creating a document with the help of userRef reference and data userData
    await setDoc(userRef, userData);
    console.log("User data updated successfully!");
  }

  // sign up User
  const SignUp = async (userData) => {
    // retriving data from userData object
    const { Email, Password, Fullname } = userData;
    // console.log(Email, Password, Fullname);
    // creatin account
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((res) => {
        console.log("account made");
        // adding name to auth displayname
        updateProfile(res.user, {
          displayName: Fullname,
        });
        // storing user data in firestore
        storeUserData(res.user.uid, userData);

        alert("account created, You are logged in automatically");
        // sending email verification
        // sendEmailVerification(res.user)
        res.user
          .sendEmailVerification()
          .then(() => {
            console.log("email verification sent");
          })
          .catch((error) => {
            console.log(
              "error occured while sending email verification ",
              error
            );
          });
      })
      .catch((error) => {
        console.log("error occured during sign up ", error);
      });
  };

  // Login Functinallity
  // This method is used to login
  const UserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout Functionllity
  const UserLogout = () => {
    return signOut(auth);
  };

  // upload
  const UploadAvatar = async (file, currentUser, setLoading) => {
    setLoading(true);
    // storing image in databse
    // creating reference of a file in database
    const fileRef = ref(storage, "profilePictures/" + currentUser.uid + ".png");
    // uploading file to that reference
    const snapshot = await uploadBytes(fileRef, file);
    // storig source of file stored so that we can use it later
    const photoURL = await getDownloadURL(fileRef);
    // giving this source to photoURL property of currentUser which is commonly used to refer to profile picture
    await updateProfile(currentUser, {
      photoURL,
    });
    setLoading(false);
    // console.log("photo urL ", currentUser.photoURL);
    // console.log("snapshot ", snapshot);
    alert("Profile picture changed, refresh to see changes");
  };

  // update name
  const UpdateName = async (currentUser, userName, setLoading) => {
    setLoading(true);
    // referring to document inside users collection by using user uid
    const docRef = doc(fs, "users", currentUser.uid);

    // updating display name with new name
    updateProfile(currentUser, {
      displayName: userName,
    })
      .then(() => {
        // updating document with new name
        updateDoc(docRef, {
          Fullname: userName,
        })
          .then(() => {
            alert("user name changed, refresh to see changes");
          })
          .catch((error) => {
            console.log("error storing name in records ", error);
          });
      })
      .catch((error) => {
        console.log("error updating name ", error);
      });
    setLoading(false);
  };

  // update email
  const UpdateEmail = async (currentUser, userEmail, setLoading) => {
    setLoading(true);
    // creating a refrence to users collection using user uid
    const docRef = doc(fs, "users", currentUser.uid);
    // updating email
    updateEmail(currentUser, userEmail)
      .then(() => {
        // storing new email in firestore
        updateDoc(docRef, {
          Email: userEmail,
        })
          .then(() => {
            console.log("email registered in database ");
          })
          .catch((error) => {
            console.log(
              "some error occured registering email in database ",
              error.message
            );
          });
        alert("email changed ");
      })
      .catch((error) => {
        console.log("email update error : ", error.message);
        if (error.code == "auth/requires-recent-login") {
          alert("please login and logout to perform this action ");
        } else if (error.code == "auth/invalid-email") {
          alert("Please enter valid email address");
        } else {
          alert("some error occured during changing email");
        }
      });

    setLoading(false);
  };
  // update password
  const UpdatePassword = async (currentUser, userPassword, setLoading) => {
    setLoading(true);
    const docRef = doc(fs, "users", currentUser.uid);
    // updating password
    updatePassword(currentUser, userPassword)
      .then(() => {
        // updating new password in firestore
        updateDoc(docRef, {
          Password: userPassword,
        })
          .then(() => {
            console.log("password registered in database ");
          })
          .catch((error) => {
            console.log(
              "some error occured registering password in database ",
              error.message
            );
          });
        alert("password updated");
      })
      .catch((error) => {
        if (error.code == "auth/requires-recent-login") {
          alert("Please logout and login to perform this action");
        } else {
          alert("Error occured while updating password ");
        }
        console.log(error.message);
      });
    setLoading(false);
  };

  // delete user
  const DeleteUser = async (currentUser, setLoading) => {
    const docRef = doc(fs, "users", currentUser.uid);
    const fileRef = ref(storage, "profilePictures/" + currentUser.uid + ".png");

    setLoading(true);
    // deleting user
    deleteUser(currentUser)
      .then(() => {
        alert("your account has been deleted");
        // deleting data from firestore
        deleteDoc(docRef)
          .then(() => {
            console.log("data deleted from firestore");
          })
          .catch((error) => {
            console.log(
              "error occured while deleting data from firestore ",
              error.message
            );
          });
        // deleteing profile picture
        deleteObject(fileRef)
          .then(() => {
            console.log("profile pic deleted");
          })
          .catch((error) => {
            console.log("error delteing profile pic ", error);
          });
      })
      .catch((error) => {
        alert("some error occured while deleting account ");
        console.log("some error occured while deleting account ", error);
      });
    setLoading(false);
  };
  const value = {
    SignUp,
    currentUser,
    currentUserUid,
    UserLogin,
    UserLogout,
    verifyEmail,
    UploadAvatar,
    UpdateName,
    UpdateEmail,
    UpdatePassword,
    DeleteUser,
    storeUserData,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserAuthProvider;
