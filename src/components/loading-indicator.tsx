import { CircularProgress, Box } from "@mui/material";

function LoadingIndicator() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "70vh",
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
}

export default LoadingIndicator;
