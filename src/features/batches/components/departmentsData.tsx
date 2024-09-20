// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getDepartments } from "../services/batchServices";
import LoadingIndicator from "../../../components/loading-indicator";

const Departments = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getDepartments();
      setLoading(false);
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [{ field: "name", headerName: "Name", width: 150 }];
  if (loading) return <LoadingIndicator />;
  return (
    <DataGrid
      rows={halls}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row._id}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
      getRowClassName={(params) => {
        if (params.row.name != null) {
          return `department-${params.row.name}-row`;
        }
        return "";
      }}
    />
  );
};

export default Departments;
