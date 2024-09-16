// @ts-nocheck

import { useState, useEffect } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { useImportedModules } from "../features/importModules/hooks/useImportedModules";
import Select from "@mui/material/Select";

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

  const textFieldStyle = {
    width: "50vw",
  };
  const [module, setModule] = useState<Module>({
    moduleCode: "",
    moduleName: "",
    semester: "",
    academicYear: "",
    department: "",
    NOHours: 0,
  });

  useEffect(() => {
    const getDepartmentsData = async () => {
      const data = await getDepartments();
      setDepartments(data);
    };
    getDepartmentsData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setDepartment(event.target.value);
    setModule((prevModule) => ({
      ...prevModule,
      department: event.target.value._id,
    }));
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
    // createNewModule(module);
    console.log(module);
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
