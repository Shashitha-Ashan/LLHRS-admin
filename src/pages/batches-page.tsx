import AcademicYears from "../features/batches/components/academicYearData";
import Departments from "../features/batches/components/departmentsData";
import FocusAreas from "../features/batches/components/focusAreasData";
import Typography from "@mui/material/Typography";

export default function BatchesPage() {
  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Manage Student Batches for Lab and Lecture Hall
      </Typography>

      <hr />
      <h2>Batches</h2>
      <AcademicYears />
      <hr />
      <h2>Departments</h2>
      <Departments />
      <hr />
      <h2>Focus Areas</h2>
      <FocusAreas />
    </div>
  );
}
