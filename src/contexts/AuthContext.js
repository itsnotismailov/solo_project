import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";

import { auth } from "../firenase";

export const authContext = createContext();

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! AUTH WITH GOOGLE
  const googleProvider = new GoogleAuthProvider();

  const authWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  //   ! проверка на то что пользаватель в системе или нет

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let action = {
        type: "SET_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  //! выйти из системы

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <authContext.Provider
      value={{
        authWithGoogle: authWithGoogle,
        logOut: logOut,
        user: state.user,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
