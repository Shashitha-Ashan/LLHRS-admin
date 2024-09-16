import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getFocusAreas } from "../services/batchServices";

const FocusAreas = () => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getFocusAreas();
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
  ];

  return (
    <DataGrid
      rows={halls}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row.id}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
      hideFooterSelectedRowCount={true}
      loading={halls.length === 0}
    />
  );
};

export default FocusAreas;
