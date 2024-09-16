// @ts-nocheck
import { useContext } from "react";
import { AuthContext } from "../state/AuthProvider";

export default useAuth = () => {
  return useContext(AuthContext);
};
