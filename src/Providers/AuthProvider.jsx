// react imports
import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";

// firebase imports
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// custom hook
import useControlCookie from "../hooks/useControlCookie";

// create auth context
export const AuthContext = createContext();

// create auth instance
const auth = getAuth(app);

// create google provider instance
const googleProvider = new GoogleAuthProvider();

// auth provider jsx component starts here
const AuthProvider = ({ children }) => {
  // user state
  const [user, setUser] = useState(null);

  // app loading state
  const [appLoading, setAppLoading] = useState(true);

  // take delete cookie method from this hook
  const { deleteCookie } = useControlCookie();

  // login with google function
  const loginGoogle = () => {
    setAppLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user creation with email and password
  const signup = (email, password) => {
    setAppLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email and password
  const login = (email, password) => {
    setAppLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user update function
  const updateUserProfile = (username, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
    });
  };

  // user logout function
  const logout = () => {
    setAppLoading(true);
    deleteCookie();
    return signOut(auth);
  };

  // set up observer for users, if there an user, update the user state and set loading to false, if there is none set user to null and set loading to false
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curUser) => {
      if (curUser) {
        setAppLoading(false);
        setUser(curUser);
      } else {
        setAppLoading(false);
        setUser(null);
      }
    });

    // clean up function for disconnecting the listener/observer
    return () => {
      unSubscribe();
    };
  }, []);

  // check if user should be logged in by verifying the token
  const checkIfUserIsLoggedIn = () => {
    console.log(user);
  };

  // pass all the necessary things to the context provider through an object
  const authObj = {
    user,
    auth,
    setUser,
    signup,
    appLoading,
    setAppLoading,
    logout,
    login,
    updateUserProfile,
    loginGoogle,
    checkIfUserIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
