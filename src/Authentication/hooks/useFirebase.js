import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.initialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithCredential,
  EmailAuthProvider,
  reauthenticateWithCredential,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        console.log(result);
        // Email verification sent!
        // ...
      });
  }
  // register user
  const registerUser = (email, password, location, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
        verifyEmail();
      })
      .catch((error) => {
        setAuthError("Email id already taken.");
      });
  };


  // login user
  const logInUser = (email, password, location, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError("Please enter right email or password.");
      });
  };

  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(uid)
        setUser(user);
        // ...
      } else {
        // User is signed out
        setUser({});
        // ...
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout user
  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    registerUser,
    logInUser,
    logOutUser,
    authError,
    loading,
  };
};

export default useFirebase;
