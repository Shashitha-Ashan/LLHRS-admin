// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getDepartments } from "../services/batchServices";

const Departments = () => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getDepartments();
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [{ field: "name", headerName: "Name", width: 150 }];

  return (
    <DataGrid
      rows={halls}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row._id}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
    />
  );
};

export default Departments;
