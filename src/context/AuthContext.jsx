import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "../config/config";

const Auth = createContext();

export const useAuth = () => {
  return useContext(Auth);
};

export default function AuthContext(children) {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  let auth = getAuth();

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return unsubscribe;
  }, [auth]);

  return <Auth.Provider value={{ currentUser }}>{children}</Auth.Provider>;
}
