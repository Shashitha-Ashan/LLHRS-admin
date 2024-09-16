// @ts-nocheck
import { createContext, useContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";

export const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface User {
  name: string;
  email: string;
  role: string;
}

export function AuthProvider({ children }) {
  const instance = AuthService.getInstance();
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      instance.setToken(token);
      instance
        .get("/admin/profile")
        .then((response) => {
          setAuth(true);
          setUserData(response as User);
        })
        .catch((error) => {
          console.log(error);
          setAuth(false);
          setUserData(null);
          instance.clearToken();
        })
        .finally(() => setLoading(false));
    } else {
      setAuth(false);
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await instance.post("/admin/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.token);
      instance.setToken(response.token);
      setAuth(true);
      setUserData(response as User);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    instance.clearToken();
    setAuth(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, userData }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
