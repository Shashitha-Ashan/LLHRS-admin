import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../state/AuthProvider";

export default function ProtetedRoute({ children }) {
  const { userData, isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData || !isAuth) {
      navigate("/login", { replace: true });
    }
  }, [navigate, userData]);

  return children;
}
