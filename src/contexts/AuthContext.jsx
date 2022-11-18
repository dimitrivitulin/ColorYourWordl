import { createContext, useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import {auth} from "../firebase-config"

export const UserContext = createContext()

export function UserContextProvider(props) {


  const register = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  const login = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
  const logout = () => signOut(auth)

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  console.log("MAJ", currentUser);
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, [])


  return (
    <UserContext.Provider value={{ register, currentUser, login, logout}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}