// import CssBaseline from "@mui/material/CssBaseline";

import MainRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
