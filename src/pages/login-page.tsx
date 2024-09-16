// @ts-nocheck
import * as React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useAuth } from "../state/AuthProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

function CustomEmailField() {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Username"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      variant="outlined"
    />
  );
}

function CustomPasswordField() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/forgot-password" variant="body2">
      Forgot password?
    </Link>
  );
}

export default function LoginPage() {
  const { login } = useAuth();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password");
    setLoading(true);
    try {
      await login(email, password);
      setLoading(false);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error(error);
    }

    form.reset();
  }
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
        onSubmit={(e) => handleLogin(e)}
      >
        <FormControl
          sx={{
            width: "100%",
            maxWidth: "400px",
            bgcolor: "background.paper",
            padding: "20px",
            border: "1px solid #4CAF50",
            borderRadius: "8px",
            boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginBottom: "20px", textAlign: "center" }}
          >
            Welcome Back to ReseVe
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ marginBottom: "20px" }}>
            Sign In
          </Typography>
          <CustomEmailField />
          <CustomPasswordField />
          <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
          >
            {loading ? <CircularProgress size={20} /> : "Sign In"}
          </Button>
          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ textAlign: "center" }}
            >
              Invalid username or password
            </Typography>
          )}
          <ForgotPasswordLink />
        </FormControl>
      </form>
    </>
  );
}
