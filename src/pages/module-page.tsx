import { Paper, Typography } from "@mui/material";

import ModuleList from "../features/modules/components/moduleList";

const ModulesPage = () => {
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Modules
      </Typography>

      <Paper sx={{ height: "70vh", width: "100%" }}>
        <ModuleList />
      </Paper>
    </div>
  );
};
export default ModulesPage;
