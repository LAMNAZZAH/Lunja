import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { getIsLoggedIn } from "../utils/api/accountApi";
import LoaderIcon from "../components/Loader/Loader";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getUserFromCookies() {
    const token = Cookies.get("token");
    if (token) {
      const response = await getIsLoggedIn(token);
      const User = await response;
      if (User?.isLoggedIn) setUser(User.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    getUserFromCookies();
  }, []);

  return (
    <authContext.Provider
      value={{ isLoggedIn: !!user, user, loading, getUserFromCookies }}
    >
      {children}
    </authContext.Provider>
  );
};

export const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isLoggedIn, loading } = useContext(authContext);
  if (loading) return <LoaderIcon />;
  else if (!isLoggedIn) return <h3>You need to login</h3>;
  return isLoggedIn && children;
};

export default AuthProvider;
