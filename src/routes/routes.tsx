import { Route, Routes } from "react-router-dom";
import UsersPage from "../pages/users-page";
import Home from "../pages/home-page";
import ModulesPage from "../pages/module-page";
import CreateModulePage from "../pages/create-new-module-page";
import LoginPage from "../pages/login-page";
import ProtetedRoute from "./protectedRoute";
import NavBar from "../layouts/nav-bar";
import ImportModulesPage from "../pages/import-modules-page";
import TimeSlotsPage from "../pages/time-slots-page";
import BatchesPage from "../pages/batches-page";
import HallPage from "../pages/hall-page";
import CreateHallPage from "../pages/create-hall-page";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtetedRoute>
            <NavBar />
            <Home />
          </ProtetedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtetedRoute>
            <NavBar />
            <UsersPage />{" "}
          </ProtetedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<LoginPage />} />
      <Route
        path="/modules"
        element={
          <ProtetedRoute>
            <NavBar />
            <ModulesPage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/modules/create-module"
        element={
          <ProtetedRoute>
            <NavBar />
            <CreateModulePage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/modules/import-modules"
        element={
          <ProtetedRoute>
            <NavBar />
            <ImportModulesPage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/time-table"
        element={
          <ProtetedRoute>
            <NavBar />
            <TimeSlotsPage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/batches"
        element={
          <ProtetedRoute>
            <NavBar />
            <BatchesPage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/halls"
        element={
          <ProtetedRoute>
            <NavBar />
            <HallPage />
          </ProtetedRoute>
        }
      />
      <Route
        path="/halls/create-hall"
        element={
          <ProtetedRoute>
            <NavBar />
            <CreateHallPage />
          </ProtetedRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
