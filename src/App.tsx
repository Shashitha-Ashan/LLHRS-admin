// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MainRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./layouts/nav-bar";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      {/* <NavBar /> */}
      {/* </Box> */}
      <MainRoutes />
    </BrowserRouter>
  );
}
