// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getFocusAreas } from "../services/batchServices";
import LoadingIndicator from "../../../components/loading-indicator";

const FocusAreas = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getFocusAreas();
      setLoading(false);
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
  ];
  if (loading) return <LoadingIndicator />;

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
