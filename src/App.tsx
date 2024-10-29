import MainRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
