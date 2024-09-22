// @ts-nocheck

import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useImportedModules } from "../features/importModules/hooks/useImportedModules";
import Select from "@mui/material/Select";
import ImportModuleDTO from "../features/importModules/models/ImportModuleDTO";
import { getFocusAreaByDepartment } from "../features/importModules/services/importModuleServices";
import SimpleSnackbar from "../components/snackBar";

interface Module {
  _id: string;
  moduleCode: string;
  moduleName: string;
  semester: string;
  academicYear: string;
  department: string;
  NOHours: number;
}

const CreateNewModulePage = () => {
  const { createNewModule, getDepartments } = useImportedModules(null);
  const [department, setDepartment] = useState("");
  const [departments, setDepartments] = useState([]);
  const [focusArea, setFocusArea] = useState("");
  const [focusAreas, setFocusAreas] = useState([]);
  const [open, setOpen] = useState(false);

  const textFieldStyle = {
    width: "50vw",
  };
  const [module, setModule] = useState<ImportModuleDTO>({
    moduleCode: "",
    moduleName: "",
    semester: "",
    academicYear: "",
    department: "",
    NOHours: 0,
    focusArea: "",
  });

  useEffect(() => {
    const getDepartmentsData = async () => {
      const data = await getDepartments();
      setDepartments(data);
    };
    getDepartmentsData();
    getFocusArea("all");
  }, []);

  const handleFocusAreaChange = async (event) => {
    setFocusArea(event.target.value);
    setModule((prevModule) => ({
      ...prevModule,
      focusArea: event.target.value._id,
    }));
  };

  const getFocusArea = async (department) => {
    const data = await getFocusAreaByDepartment(department);
    setFocusAreas(data);
  };

  const handleChange = async (event) => {
    setDepartment(event.target.value);
    setModule((prevModule) => ({
      ...prevModule,
      department: event.target.value._id,
    }));
    getFocusArea(event.target.value._id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModule((prevModule) => ({
      ...prevModule,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewModule(module);
    clearTextFields();
    setOpen(true);
  };
  const clearTextFields = () => {
    setModule({
      moduleCode: "",
      moduleName: "",
      semester: "",
      academicYear: "",
      department: "",
      NOHours: 0,
      focusArea: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
      }}
    >
      <SimpleSnackbar
        open={open}
        onClose={() => setOpen(false)}
        bkgColor="green"
        note="Module created successfully"
      />
      <h1 style={{ marginTop: "50px" }}>Create New Module</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div>
          <TextField
            label="Module Code"
            id="moduleCode"
            name="moduleCode"
            value={module.moduleCode}
            onChange={handleInputChange}
            sx={textFieldStyle}
            required
          />
        </div>
        <div>
          <TextField
            label="Module Name"
            id="moduleName"
            name="moduleName"
            value={module.moduleName}
            onChange={handleInputChange}
            sx={textFieldStyle}
            required
          />
        </div>
        <div>
          <FormControl>
            <InputLabel>Department</InputLabel>
            <Select
              labelId="department-label"
              id="demo-simple-select"
              value={department}
              label="Department"
              onChange={handleChange}
              sx={textFieldStyle}
              required
            >
              {departments.map((department) => (
                <MenuItem key={department.name} value={department}>
                  {department.name.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <InputLabel>Focus Area</InputLabel>
            <Select
              labelId="focusArea-label"
              id="demo-simple-select"
              value={focusArea}
              label="Focus Area"
              onChange={handleFocusAreaChange}
              sx={textFieldStyle}
              required
            >
              {focusAreas.map((focusArea) => (
                <MenuItem key={focusArea.name} value={focusArea}>
                  {focusArea.name.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <TextField
            label="Semester"
            id="semester"
            name="semester"
            type="number"
            value={module.semester}
            onChange={handleInputChange}
            sx={textFieldStyle}
            required
            inputProps={{ min: "1", max: "8" }}
          />
        </div>
        <div>
          <TextField
            label="Academic Year"
            id="academicYear"
            name="academicYear"
            type="number"
            value={module.academicYear}
            onChange={handleInputChange}
            sx={textFieldStyle}
            required
            inputProps={{ min: "1", max: "4" }}
          />
        </div>
        <div>
          <TextField
            label="Number of Hours"
            id="NOHours"
            name="NOHours"
            type="number"
            value={module.NOHours}
            onChange={handleInputChange}
            sx={textFieldStyle}
            required
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Create Module
        </Button>
      </form>
    </div>
  );
};

export default CreateNewModulePage;
