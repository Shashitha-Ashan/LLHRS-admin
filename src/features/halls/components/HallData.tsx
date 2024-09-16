// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getAllHalls } from "../services/hallServices";
import LoadingIndicator from "../../../components/loading-indicator";

const HallData = () => {
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getAllHalls();
      setLoading(false);
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [
    { field: "hallName", headerName: "Hall Name", width: 250 },
    { field: "NOSeats", headerName: "Capacity", width: 100 },
    { field: "hallType", headerName: "Type", width: 150 },
  ];
  if (loading) return <LoadingIndicator />;

  return (
    <DataGrid
      rows={halls}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row._id}
      rowsPerPageOptions={[5, 10, 20]}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
    />
  );
};

export default HallData;
